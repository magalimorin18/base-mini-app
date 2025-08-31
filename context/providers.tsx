"use client";

import { type ReactNode, useEffect } from "react";
import { base } from "wagmi/chains";
import { MiniKitProvider, useMiniKit } from "@coinbase/onchainkit/minikit";

// Component to handle frame ready state globally
function FrameReadyHandler() {
  const { setFrameReady, isFrameReady } = useMiniKit();
  
  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);
  
  return null; // This component doesn't render anything
}

export function Providers(props: { children: ReactNode }) {
  return (
    <MiniKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base}
      config={{
        appearance: {
          mode: "auto",
          theme: "mini-app-theme",
          name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
          logo: process.env.NEXT_PUBLIC_ICON_URL,
        },
      }}
    >
      <FrameReadyHandler />
      {props.children}
    </MiniKitProvider>
  );
}
