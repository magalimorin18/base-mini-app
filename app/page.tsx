"use client";

import Hero from "@/components/Hero";
import NFTGrid from "@/components/NFTGrid";
import FilterSection from "@/components/FilterSection";
import NavBar from "@/components/NavBar";

export default function NFTGallery() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Filter Section */}
      <FilterSection />

      {/* NFT Grid */}
      <NFTGrid />
    </div>
  );
}
