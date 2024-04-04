import type { Metadata } from "next";
import { Inter, Work_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css"; //important
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-work-sans",
});
export const metadata: Metadata = {
  title: "Connect - Inspired by Zoom",
  description: "A video calling app.Talk to your friends and family seamlessly",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsVariant: "iconButton",
          logoImageUrl: "/icons/logo.svg",
        },
        variables: {
          colorText: "#fff",
          colorPrimary: "#0E78F9",
          colorBackground: "#1C1F2E",
          colorInputBackground: "#252A41",
          colorInputText: "#fff",
        },
      }}
    >
      <html lang="en">
        <body
          className={`${inter.className} ${poppins.variable} ${worksans.variable} bg-dark-2`}
        >
          <Toaster />
          {children}
          {/* <SpeedInsights />
          <Analytics /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
