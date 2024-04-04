import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";

interface RootlayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Connect - Inspired by Zoom",
  description: "A video calling app.Talk to your friends and family seamlessly",
  icons: {
    icon: "/icons/logo.svg",
  },
};
const Rootlayout = ({ children }: RootlayoutProps) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default Rootlayout;
