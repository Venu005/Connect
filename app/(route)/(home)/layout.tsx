import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";

interface HomelayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Connect - Inspired by Zoom",
  description: "A video calling app.Talk to your friends and family seamlessly",
  icons: {
    icon: "/icons/logo.svg",
  },
};
const Homelayout = ({ children }: HomelayoutProps) => {
  return (
    <main className="relative">
      <NavBar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Homelayout;
