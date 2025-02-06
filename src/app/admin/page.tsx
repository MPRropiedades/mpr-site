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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <button
        onClick={() => supabase.auth.signOut().then(() => router.push("/login"))}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>

      {/* Add Listing Button */}
      <button
        onClick={() => setModalOpen(true)}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Add Listing
      </button>

      {/* Listings Table */}
      <h2 className="text-xl font-semibold mt-8">Real Estate Listings</h2>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing) => (
            <tr key={listing.id}>
              <td className="border px-4 py-2">{listing.title}</td>
              <td className="border px-4 py-2">${listing.price}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                  onClick={() => deleteListing(listing.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Adding Listings */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Listing</h2>
            <form onSubmit={handleAddListing}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={newListing.title}
                  onChange={(e) => setNewListing({ ...newListing, title: e.target.value })}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Ubicacion</label>
                <input
                  type="text"
                  value={newListing.location}
                  onChange={(e) => setNewListing({ ...newListing, location: e.target.value })}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={newListing.description}
                  onChange={(e) => setNewListing({ ...newListing, description: e.target.value })}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Price</label>
                <input
                  type="number"
                  value={newListing.price}
                  onChange={(e) => setNewListing({ ...newListing, price: +e.target.value })}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Image URL</label>
                <input
                  type="text"
                  value={newListing.image_url}
                  onChange={(e) => setNewListing({ ...newListing, image_url: e.target.value })}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
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
