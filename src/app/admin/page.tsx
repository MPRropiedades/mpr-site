"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";
import { Listing, ListingDTO } from "../../models/types"; // Import Listing type
import { User } from "@supabase/supabase-js"; // Import Supabase User type

export default function Admin() {
  const [user, setUser] = useState<User | null>(null); // Use Supabase User type
  const [listings, setListings] = useState<Listing[]>([]); // Set listings state with Listing type
  const [modalOpen, setModalOpen] = useState(false); // Modal state
  const [newListing, setNewListing] = useState<ListingDTO>({
    title: "",
    description: "",
    location: "",
    price: 0,
    image_url: "",
  }); // New listing state
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/login");
      } else {
        setUser(data.user); // Now it's typed as Supabase User
        fetchListings(); // Call fetchListings after auth check
      }
    }
    checkAuth();
  }, [router]);

  // Fetch Listings
  const fetchListings = async () => {
    const { data, error } = await supabase.from("listings").select("*");
    if (error) {
      console.error("Error fetching listings:", error.message);
    } else {
      setListings(data as Listing[]); // Type the response as Listing[]
    }
  };

  // Delete Listing
  const deleteListing = async (id: string) => {
    const { error } = await supabase.from("listings").delete().eq("id", id);
    if (error) {
      console.error("Error deleting listing:", error.message);
    } else {
      alert("Listing deleted successfully");
      fetchListings(); // Refresh listings after deleting
    }
  };

  // Add New Listing
  const handleAddListing = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("listings").insert([newListing]);
    if (error) {
      console.error("Error adding listing:", error.message);
    } else {
      alert("Listing added successfully");
      setModalOpen(false); // Close the modal
      fetchListings(); // Refresh listings
      setNewListing({
        title: "",
        description: "",
        location: "",
        price: 0,
        image_url: "",
      }); // Clear form fields
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admin Dashboard</h1>
        
        {/* Logout Button */}
        <button
          onClick={() => supabase.auth.signOut().then(() => router.push("/login"))}
          className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>

        {/* Add Listing Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="mt-4 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
        >
          Add Listing
        </button>

        {/* Listings Table */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Real Estate Listings</h2>
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-600">Title</th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-600">Price</th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2 text-sm text-gray-700">{listing.title}</td>
                <td className="border px-4 py-2 text-sm text-gray-700">${listing.price}</td>
                <td className="border px-4 py-2 text-sm">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition ml-2"
                    onClick={() => deleteListing(listing.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding Listings */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Add New Listing</h2>
            <form onSubmit={handleAddListing}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={newListing.title}
                  onChange={(e) => setNewListing({ ...newListing, title: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Ubicacion</label>
                <input
                  type="text"
                  value={newListing.location}
                  onChange={(e) => setNewListing({ ...newListing, location: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={newListing.description}
                  onChange={(e) => setNewListing({ ...newListing, description: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                <input
                  type="number"
                  value={newListing.price}
                  onChange={(e) => setNewListing({ ...newListing, price: +e.target.value })}
                  className="w-full px-4 py-2 border rounded-md text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input
                  type="text"
                  value={newListing.image_url}
                  onChange={(e) => setNewListing({ ...newListing, image_url: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md text-sm"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
                >
                  Add Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
