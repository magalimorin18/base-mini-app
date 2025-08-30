# 🎨 Base Mini App: Share Your Digital Art in Less Than a Minute

A decentralized platform for artists to quickly upload, mint, and share their digital artwork as NFTs on the Base blockchain.

## ✨ Features

- 📸 **Quick Upload**: Upload your digital artwork in seconds
- 🖼️ **NFT Minting**: Mint your art as NFTs on Base blockchain
- 🌐 **Decentralized Storage**: Store artwork on Filecoin via NFT.Storage

## 🚀 Getting Started

### Prerequisites

- A Coinbase Developer account
- An NFT.Storage account

### Installation

1. **Install dependencies**

```bash
npm install
```

2. **Set up environment variables**

Create a `.env` file in the root directory:

```bash
# Coinbase OnchainKit API Key
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_coinbase_api_key_here

# NFT.Storage API Key
NEXT_PUBLIC_NFT_STORAGE_KEY=your_nft_storage_api_key_here
```

### Getting API Keys

#### Coinbase Developer Portal

1. Visit [Coinbase Developer Portal](https://www.coinbase.com/developer-platform)
2. Create an account or sign in
3. Navigate to API Keys section
4. Generate a new API key for OnchainKit
5. Copy the key to your `.env` file

#### NFT.Storage

1. Visit [NFT.Storage](https://app.nft.storage/)
2. Create an account or sign in
3. Go to API Keys section
4. Generate a new API key
5. Copy the key to your `.env` file

### Running the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🛠️ Built With

- **Next.js** - React framework
- **Base** - Ethereum L2 blockchain
- **OnchainKit** - Coinbase's blockchain development kit
- **Filecoin** - Decentralized storage network
- **NFT.Storage** - IPFS pinning service
- **V0 by Vercel** - AI-powered UI generation

## 📋 Development Status

### ✅ Completed Features

- [x] **[Magali]** V0 Vercel integration
- [x] **[Magali]** Mini app core functionality
  - Photo upload for digital artwork
  - Title and description input

### ⏳ In Progress

- [ ] **[Magali]** Filecoin integration via NFT.Storage
  - _Note: Currently investigating API key format issues_
- [ ] **[Magali]** NFT minting functionality on Base

### 🔄 Pending Tasks

#### High Priority

- [ ] **[Luciano]** Deploy as Base Mini App
- [ ] **[Luciano]** Frontend UI/UX improvements

#### Future Enhancements (If Time Permits)

- [ ] Farcaster Frame integration for social sharing
- [ ] AI-powered art generation tool
- [ ] App in spanish and english

## 🏆 Hackathon Tracks

This project is being developed for the following tracks:

- **V0** - AI-powered development
- **Filecoin** - Decentralized storage
- **ENS Product Good** - Web3 identity integration
- **Base Mini App** - Base blockchain application
