import StreamVideoProvider from "@/providers/StreamClientProvider";

interface RootlayoutProps {
  children: React.ReactNode;
}
const Rootlayout = ({ children }: RootlayoutProps) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default Rootlayout;
