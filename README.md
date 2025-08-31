# 🎨 Base Mini App: Share Your Digital Art in Less Than a Minute

A decentralized platform for artists to quickly upload, mint, and share their digital artwork as NFTs on the Base blockchain.

## ✨ Features

- 📸 **Quick Upload**: Upload your digital artwork in seconds
- 🖼️ **NFT Minting**: Mint your art as NFTs on Base blockchain
- 🌐 **Decentralized Storage**: Store artwork on Filecoin

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

# ⚠️ This key needs to be funded with USDFC and TFIL
NEXT_PUBLIC_FILECOIN_PRIVATE_KEY=

# This key is to upload data through lighthouse - speed
NEXT_PUBLIC_LIGHTHOUSE_STORAGE_KEY=
```

### Getting API Keys

#### Coinbase Developer Portal

1. Visit [Coinbase Developer Portal](https://www.coinbase.com/developer-platform)
2. Create an account or sign in
3. Navigate to API Keys section
4. Generate a new API key for OnchainKit
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
- **V0 by Vercel** - AI-powered UI generation

## 🏆 Hackathon Tracks

This project is being developed for the following tracks:

- **V0** - AI-powered development
- **Filecoin** - Decentralized storage
- **ENS Product Good** - Web3 identity integration
- **Base Mini App** - Base blockchain application
