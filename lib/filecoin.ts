import { Synapse, RPC_URLS } from "@filoz/synapse-sdk";
import { useState } from "react";

const RPC_URL = RPC_URLS.calibration.websocket;

export type UploadedInfo = {
  fileName?: string;
  fileSize?: number;
  commp?: string;
  txHash?: string;
};

// --------- This is a one time setup --------------- //

// 1. Deposit USDFC tokens
// const amount = ethers.parseUnits("1", 18);
// await synapse.payments.deposit(amount, TOKENS.USDFC);

// 2. Approve the Pandora service for automated payments
// const pandoraAddress =
//   CONTRACT_ADDRESSES.PANDORA_SERVICE[synapse.getNetwork()];

export const useFileUpload = () => {
  const [progress, setProgress] = useState(0);
  const uploadFile = async (file: File, filecoinPrivateKey: string) => {
    setProgress(0);

    // 1) Convert File → ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    // 2) Convert ArrayBuffer → Uint8Array
    const uint8ArrayBytes = new Uint8Array(arrayBuffer);

    setProgress(15);

    // 3) Create Synapse instance
    const synapse = await Synapse.create({
      privateKey: filecoinPrivateKey,
      rpcURL: RPC_URL,
    });

    setProgress(40);

    //4) Create Storage
    const storageService = await synapse.createStorage();

    setProgress(50);

    //5) Checking
    const pre = await storageService.preflightUpload(uint8ArrayBytes.length);
    if (!pre.allowanceCheck.sufficient) {
      throw new Error(
        "Storage allowance is insufficient; top-up via UI or UI flow",
      );
    }

    setProgress(70);

    //6) Uploading
    const result = await storageService.upload(uint8ArrayBytes);
    const CID = result.commp.toString();

    setProgress(100);

    return CID;
  };

  return {
    uploadFile,
    progress,
  };
};
