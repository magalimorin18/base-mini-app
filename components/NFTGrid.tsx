import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Eye, Heart, Share2 } from "lucide-react";
import { Badge } from "./ui/badge";

const featuredNFTs = [
  {
    id: 1,
    title: "Cosmic Dreams #001",
    artist: "DigitalVision",
    price: "2.5 ETH",
    image: "/img-placeholder.png",
    likes: 234,
    views: 1205,
    category: "Abstract",
  },
  {
    id: 2,
    title: "Neon Cityscape",
    artist: "CyberArtist",
    price: "1.8 ETH",
    image: "/img-placeholder.png",
    likes: 189,
    views: 892,
    category: "Digital",
  },
  {
    id: 3,
    title: "Ethereal Portrait",
    artist: "ArtMaster3D",
    price: "3.2 ETH",
    image: "/img-placeholder.png",
    likes: 456,
    views: 2103,
    category: "Portrait",
  },
  {
    id: 4,
    title: "Quantum Flux",
    artist: "TechnoCreator",
    price: "4.1 ETH",
    image: "/img-placeholder.png",
    likes: 678,
    views: 3421,
    category: "Abstract",
  },
  {
    id: 5,
    title: "Digital Bloom",
    artist: "NaturePixel",
    price: "1.9 ETH",
    image: "/img-placeholder.png",
    likes: 321,
    views: 1567,
    category: "Nature",
  },
  {
    id: 6,
    title: "Cyber Samurai",
    artist: "FutureWarrior",
    price: "5.5 ETH",
    image: "/img-placeholder.png",
    likes: 892,
    views: 4532,
    category: "Character",
  },
];

export default function NFTGrid() {
  return (
    <section className="px-4 pb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredNFTs.map((nft) => (
            <Card
              key={nft.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={nft.image || "/placeholder.svg"}
                  alt={nft.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="w-8 h-8 p-0 bg-white/95 hover:bg-white text-gray-700 hover:text-gray-900 shadow-lg border border-white/20 backdrop-blur-sm"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="w-8 h-8 p-0 bg-white/95 hover:bg-white text-gray-700 hover:text-gray-900 shadow-lg border border-white/20 backdrop-blur-sm"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
                <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm">
                  {nft.category}
                </Badge>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-1">
                      {nft.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      by {nft.artist}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary text-lg">
                      {nft.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{nft.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{nft.views}</span>
                  </div>
                </div>
                <Button className="w-full" size="sm">
                  Place Bid
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
