"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Upload, ImageIcon, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

import NavBar from "@/components/NavBar";

export default function CreateNFT() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <NavBar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto">
          <button
            className="gap-2 flex items-center justify-center py-1 cursor-pointer mb-4 -mt-2 font-medium"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4 text-black" />
            Back
          </button>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Create Your NFT
            </h1>
            <p className="text-lg text-muted-foreground">
              Upload your digital artwork and mint it as an NFT on the
              blockchain
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            {/* File Upload Section */}
            <Card className="border-border/50 flex flex-col h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  Upload Artwork
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div
                  className="border-2 border-dashed border-border hover:border-primary/50 rounded-lg p-8 text-center transition-colors cursor-pointer"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => document.getElementById("file-input")?.click()}
                >
                  {previewUrl ? (
                    <div className="space-y-4">
                      <img
                        src={previewUrl || "/placeholder.svg"}
                        alt="Preview"
                        className="max-w-full max-h-64 mx-auto rounded-lg shadow-lg"
                      />
                      <p className="text-sm text-muted-foreground">
                        {selectedFile?.name}
                      </p>
                      <Button variant="outline" size="sm">
                        Change File
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Upload className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-foreground mb-2">
                          Drop your file here, or browse
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Supports: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                          OGG, GLB, GLTF. Max size: 40MB
                        </p>
                      </div>
                    </div>
                  )}
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*,video/*,audio/*,.glb,.gltf"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>
                <div className="flex justify-center pt-2 items-end h-full">
                  <Button
                    size="lg"
                    className="text-lg px-12 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
                    disabled={!selectedFile || !title.trim()}
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Upload To Filecoin
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* NFT Details Section */}
            <Card className="border-border/50 flex flex-col h-full">
              <CardHeader>
                <CardTitle>NFT Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex-1">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-sm font-medium">
                    Title *
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter NFT title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your NFT..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border-border focus:border-primary min-h-[120px] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="collection" className="text-sm font-medium">
                    Collection
                  </Label>
                  <Input
                    id="collection"
                    placeholder="Choose collection (optional)"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="royalties" className="text-sm font-medium">
                    Royalties (%)
                  </Label>
                  <Input
                    id="royalties"
                    type="number"
                    placeholder="0"
                    min="0"
                    max="10"
                    className="border-border focus:border-primary"
                  />
                  <p className="text-xs text-muted-foreground">
                    Suggested: 0%, 2.5%, 5%, 10%. Maximum is 10%
                  </p>
                </div>
                <div className="flex justify-center pt-2">
                  <Button
                    size="lg"
                    className="text-lg px-12 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
                    disabled={!selectedFile || !title.trim()}
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Mint NFT
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Section */}
          <Card className="mt-8 border-border/50 bg-card/30">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-3">
                What happens when you mint?
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  • Your artwork will be uploaded to IPFS for decentralized
                  storage
                </li>
                <li>• A unique NFT will be created on the Base blockchain</li>
                <li>
                  • You&apos;ll retain full ownership and can list it for sale
                </li>
                <li>
                  • Gas fees will be required to complete the minting process
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
