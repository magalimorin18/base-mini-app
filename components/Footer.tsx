import { Sparkles } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Molotov</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              The premier destination for discovering and collecting
              extraordinary digital art.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Marketplace</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Explore
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Artists
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Rankings
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Create</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Mint NFT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Create Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Artist Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Molotov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
