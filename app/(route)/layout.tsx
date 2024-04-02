interface RootlayoutProps {
  children: React.ReactNode;
}
const Rootlayout = ({ children }: RootlayoutProps) => {
  return <main>{children}</main>;
};

export default Rootlayout;
