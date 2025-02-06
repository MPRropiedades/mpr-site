"use client"; 

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image_url: string;
}

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    async function fetchListings() {
      const { data, error } = await supabase.from("listings").select("*");
      if (error) console.error("Error fetching listings:", error);
      else setListings(data);
    }
    fetchListings();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Real Estate Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.id} className="border p-4 rounded-lg shadow-md">
            <img src={listing.image_url} alt={listing.title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{listing.title}</h2>
            <p className="text-gray-600">{listing.location}</p>
            <p className="text-green-500 font-bold">${listing.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
