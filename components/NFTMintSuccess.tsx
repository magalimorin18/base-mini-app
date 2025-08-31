"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Copy, Share2 } from "lucide-react";
import { useState } from "react";

interface NFTMintSuccessProps {
  transactionHash: string;
  tokenURI: string;
  title: string;
  description: string;
  imageUrl: string;
  onReset: () => void;
  onExplore: () => void;
}

export default function NFTMintSuccess({
  transactionHash,
  tokenURI,
  title,
  description,
  imageUrl,
  onReset,
  onExplore,
}: NFTMintSuccessProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const shareNFT = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Check out my new NFT: ${title}`,
          text: `I just minted "${title}" on Base!`,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      copyToClipboard(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Success Header */}
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              🎉 NFT Successfully Minted!
            </h1>
            <p className="text-lg text-muted-foreground">
              Your digital artwork is now live on the Base blockchain
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* NFT Preview */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🖼️ NFT Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    NFT
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Contract Details */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📋 Contract Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Transaction Hash
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="bg-muted px-2 py-1 rounded text-sm font-mono flex-1">
                        {transactionHash.slice(0, 6)}...
                        {transactionHash.slice(-4)}
                      </code>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(transactionHash)}
                        className="shrink-0"
                      >
                        {copied ? "Copied!" : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Token URI
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="bg-muted px-2 py-1 rounded text-sm font-mono flex-1 truncate">
                        {tokenURI.slice(0, 30)}...
                      </code>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(tokenURI)}
                        className="shrink-0"
                      >
                        {copied ? "Copied!" : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Network
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Base Network
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={shareNFT}
              variant="outline"
              className="flex items-center gap-2 px-6 py-3"
            >
              <Share2 className="w-4 h-4" />
              Share NFT
            </Button>

            <Button onClick={onReset} variant="outline" className="px-6 py-3">
              Mint Another NFT
            </Button>

            <Button onClick={onExplore} variant="outline" className="px-6 py-3">
              Explore NFTs
            </Button>
          </div>

          {/* Next Steps */}
          <Card className="border-border/50 bg-green-50 dark:bg-green-950/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                🚀 Whats Next?
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Your NFT is now stored on Filecoin and the Base blockchain
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  You can view it on BaseScan or share it with others
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Ready to mint another piece? Click Mint Another NFT above
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
