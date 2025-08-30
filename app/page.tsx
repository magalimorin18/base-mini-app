"use client";

import {
  useMiniKit,
  useAddFrame,
  useOpenUrl,
} from "@coinbase/onchainkit/minikit";
import {
  Name,
  Identity,
  Address,
  Avatar,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { useEffect, useMemo, useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Upload } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import lighthouse from "@lighthouse-web3/sdk";

const lighthouseApiKey = process.env.NEXT_PUBLIC_LIGHTHOUSE_STORAGE_KEY;

export default function App() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);
  const { isConnected } = useAccount();

  const [file, setFile] = useState<FileList>();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileMetadata, setFileMetadata] = useState<File | null>(null);
  const [fileCID, setFileCID] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isMinting, setIsMinting] = useState(false);

  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

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

  const uploadFile = async (file: FileList) => {
    if (!lighthouseApiKey) return;

    console.log("⏳Uploading image to Lighthouse...");
    const output = await lighthouse.upload(file, lighthouseApiKey, undefined);
    console.log(
      "Image uploaded at: https://gateway.lighthouse.storage/ipfs/" +
        output.data.Hash,
    );
    setFileCID(output.data.Hash);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    const fileMetadata = event.target.files?.[0];
    if (file && fileMetadata && fileMetadata.type.startsWith("image/")) {
      setFile(file);
      setFileMetadata(fileMetadata);
      const url = URL.createObjectURL(fileMetadata);
      setPreviewUrl(url);
    }
  };

  const handleMintNFT = async () => {
    if (!file || !title || !description) return;

    await uploadFile(file);
    console.log("✅ Uploaded to Filecoin:", fileCID);

    setIsMinting(true);
    // Simulate minting process
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsMinting(false);

    // Reset form after successful mint
    setFile(undefined);
    setPreviewUrl(null);
    setTitle("");
    setDescription("");
  };

  const canMint = isConnected && file && title.trim() && description.trim();

  return (
    <div className="flex flex-col min-h-screen font-sans text-[var(--app-foreground)] mini-app-theme from-[var(--app-background)] to-[var(--app-gray)]">
      <div className="w-full max-w-md mx-auto px-4 py-3">
        <header className="flex justify-between items-center mb-3 h-11">
          <div>
            <div className="flex items-center space-x-2">
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
          </div>
          <div>{saveFrameButton}</div>
        </header>

        <main className="flex-1">
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
            <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Base MiniApp
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Share your digital art
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="artwork" className="text-sm font-medium">
                    Upload Artwork
                  </Label>
                  <div className="relative">
                    <Input
                      id="artwork"
                      type="file"
                      accept="image/*"
                      // onChange={handleFileSelect}
                      onChange={handleFileSelect}
                      disabled={!isConnected}
                      className="hidden"
                    />
                    <Label
                      htmlFor="artwork"
                      className={`
                  flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer
                  transition-colors duration-200
                  ${
                    !isConnected
                      ? "border-gray-200 bg-gray-50 cursor-not-allowed"
                      : "border-blue-300 bg-blue-50 hover:bg-blue-100 dark:border-blue-600 dark:bg-blue-900/20"
                  }
                `}
                    >
                      <Upload className="w-8 h-8 text-blue-500 mb-2" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {fileMetadata
                          ? fileMetadata.name
                          : "Click to upload image"}
                      </span>
                    </Label>
                  </div>
                </div>

                {/* Image Preview */}
                {previewUrl && (
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Preview</Label>
                    <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img
                        src={previewUrl || "/placeholder.svg"}
                        alt="Artwork preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Title Input */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-sm font-medium">
                    Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter artwork title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={!isConnected}
                    className="rounded-xl"
                  />
                </div>

                {/* Description Input */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your artwork"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={!isConnected}
                    className="rounded-xl resize-none"
                    rows={3}
                  />
                </div>

                {/* Mint NFT Button */}
                <Button
                  onClick={handleMintNFT}
                  disabled={!canMint || isMinting}
                  className="w-full rounded-xl h-12 font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  {isMinting ? "Minting NFT..." : "Mint NFT"}
                </Button>

                {!isConnected && (
                  <p className="text-xs text-center text-muted-foreground">
                    Connect your wallet to start uploading artwork
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="mt-2 pt-4 flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-[var(--ock-text-foreground-muted)] text-xs"
            onClick={() => openUrl("https://base.org/builders/minikit")}
          >
            Built on Base with MiniKit
          </Button>
        </footer>
      </div>
    </div>
  );
}
