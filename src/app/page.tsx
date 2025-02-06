"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Listing } from "../models/types"; // Import Listing type
import Link from "next/link"; // Import Link for navigation

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    // Fetch listings when the page loads
    async function fetchListings() {
      const { data, error } = await supabase.from("listings").select("*");
      if (error) {
        console.error("Error fetching listings:", error.message);
      } else {
        setListings(data as Listing[]);
      }
    }
    fetchListings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Real Estate Listings</h1>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={listing.image_url || "/default-image.jpg"} // Default image if none is provided
                alt={listing.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 truncate">{listing.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{listing.description}</p>
                <p className="text-lg font-semibold text-gray-900 mt-2">${listing.price}</p>
                <div className="mt-4">
                  <Link
                    href={`/listing/${listing.id}`}
                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
