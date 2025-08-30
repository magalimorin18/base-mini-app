import React from "react";
import { Button } from "./ui/button";
import { TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">
          Discover Extraordinary
          <span className="text-primary block">Digital Art</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Explore, collect, and trade unique NFTs from the world&apos;s most
          talented digital artists
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            <TrendingUp className="w-5 h-5 mr-2" />
            Explore Gallery
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 bg-transparent"
          >
            Create NFT
          </Button>
        </div>
      </div>
    </section>
  );
}
