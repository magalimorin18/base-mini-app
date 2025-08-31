import React from "react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">
          Collect, Display, Live.
          <span className="text-primary block">MOLOTOV</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          A new way to enjoy art: simple, accessible, and real.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/create-nft">
            <Button size="lg" className="text-lg px-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Create NFT
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
