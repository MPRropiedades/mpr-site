// Types for Listings
export interface Listing extends ListingDTO {
    id: string;
    created_at: string;
}

export interface ListingDTO {
    title: string;
    description: string;
    price: number;
    location: string;
    image_url: string;
}