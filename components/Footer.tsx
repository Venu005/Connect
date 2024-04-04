import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-center">
      <p className="text-slate-200 font-semibold">
        <Link
          href="https://github.com/Venu005"
          className="underline-offset-4 hover:underline"
        >
          Made with 💗 by Venu
        </Link>
      </p>
    </div>
  );
};

export default Footer;
