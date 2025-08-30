"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NFTGrid from "@/components/NFTGrid";
import FilterSection from "@/components/FilterSection";
import { Wallet, ConnectWallet } from "@coinbase/onchainkit/wallet";
import { Name, Address, EthBalance } from "@coinbase/onchainkit/identity";
import {
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { Identity, Avatar } from "@coinbase/onchainkit/identity";
import { useCallback, useMemo, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { useAddFrame, useMiniKit } from "@coinbase/onchainkit/minikit";
import { Button } from "@/components/ui/button";

export default function NFTGallery() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { context } = useMiniKit();
  const addFrame = useAddFrame();
  const [frameAdded, setFrameAdded] = useState(false);
  const toggleMobileMenu = () => {
    console.log("Toggle mobile menu clicked, current state:", isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAddFrame = useCallback(async () => {
    const frameAdded = await addFrame();
    setFrameAdded(Boolean(frameAdded));
  }, [addFrame]);

  const saveFrameButton = useMemo(() => {
    if (context && !context.client.added) {
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleAddFrame}
          className="text-[var(--app-accent)] p-4"
        >
          Save Frame
        </Button>
      );
    }

    if (frameAdded) {
      return (
        <div className="flex items-center space-x-1 text-sm font-medium text-[#0052FF] animate-fade-out">
          <span>Saved</span>
        </div>
      );
    }

    return null;
  }, [context, frameAdded, handleAddFrame]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Molotov</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Explore
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Collections
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Artists
              </a>
              {saveFrameButton}
              <Wallet className="z-10">
                <ConnectWallet>
                  <Name className="text-inherit" />
                </ConnectWallet>
                <WalletDropdown>
                  <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                    <Avatar />
                    <Name />
                    <Address />
                    <EthBalance />
                  </Identity>
                  <WalletDropdownDisconnect />
                </WalletDropdown>
              </Wallet>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-4 pointer-events-none"
            }`}
          >
            <nav className="py-6 px-4 bg-white h-screen mt-[9px]">
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-md hover:bg-accent/50 text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Explore
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-md hover:bg-accent/50 text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Collections
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-md hover:bg-accent/50 text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Artists
                </a>
                {saveFrameButton}
                <Wallet className="z-10">
                  <ConnectWallet>
                    <Name className="text-inherit" />
                  </ConnectWallet>
                  <WalletDropdown>
                    <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                      <Avatar />
                      <Name />
                      <Address />
                      <EthBalance />
                    </Identity>
                    <WalletDropdownDisconnect />
                  </WalletDropdown>
                </Wallet>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Filter Section */}
      <FilterSection />

      {/* NFT Grid */}
      <NFTGrid />

      {/* Footer */}
      <Footer />
    </div>
  );
}
