import Beams from "@/components/Beams";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex flex-col gap-y-24">
      <nav className=" flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 top-0 shadow-md">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={32}
            height={32}
            alt="logo"
            className="max-sm:size-10"
          />
          <p className="text-[26px] font-extrabold text-white max-sm:hidden">
            CONNECT.
          </p>
        </Link>
        <div className="flex-between gap-5">
          <Button className="text-white" variant="outline">
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button className="text-white" variant="outline">
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </nav>
      <Beams />
      <div>
        <div className="md:flex md:flex-between sm:mt-20 mt-10">
          <div className="px-8 mb-10">
            <h1 className="text-6xl text1 text-white mb-10 font-semibold">
              Hello!!!
            </h1>
            <div>
              <p className="text-slate-300 first-letter:font-semibold first-letter:text-4xl text-left max-w-[800px] text-md">
                Welcome to Connect, a revolutionary platform that redefines the
                way we communicate and collaborate. Built with the same
                intuitive and user-friendly design as Zoom, Connect takes the
                concept of virtual interaction to a whole new level. Our
                platform is powered by Next.js, a leading web development
                framework that ensures a seamless and high-performance user
                experience. With Next.js, we deliver a fast, secure, and
                scalable solution that meets the demands of any size of
                audience.
              </p>
            </div>
          </div>
          <div>
            <div className="px-6 md:overflow-hidden">
              <Image
                src="/images/connect_hero.png"
                alt="connect-ui"
                width={1200}
                height={1200}
                className="max-w-full border-2 border-sky-600 rounded-md md:ml-20 "
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-between sm:mt-20 mt-10 sm:ml-5">
          <div className="md:overflow-hidden px-6 sm:-ml-24">
            <Image
              src="/images/recordings.png"
              alt="connect-ui"
              width={1000}
              height={2000}
              className="max-w-full border-2 border-sky-600 rounded-md md:mr-20 mb-10 "
            />
          </div>

          <div className="px-8 mb-20">
            <h1 className="text-4xl text1 text-white mb-10 font-semibold">
              Record your meetings
            </h1>
            <div>
              <p className="text-slate-300 first-letter:font-semibold first-letter:text-2xl text-left max-w-[800px] text-md">
                Experience the convenience of recording your meetings with our
                new feature! Not only can you capture every important detail,
                but you can also share these recordings with your team members.
                This ensures that everyone stays on the same page, even if they
                couldn&apos;t attend the meeting. Don&apos;t miss out on
                important discussions - record and share your meetings today!
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-between sm:mt-20 mt-10">
          <div className="px-8 mb-10">
            <h1 className="text-4xl text1 text-white mb-10 font-semibold">
              Easy to use, you know everything already
            </h1>
            <div>
              <p className="text-slate-300 first-letter:font-semibold first-letter:text-4xl text-left max-w-[800px] text-md">
                Experience simplicity like never before with our user-friendly
                app. Designed with you in mind, our intuitive interface ensures
                that you can navigate through the app with ease. No need for
                lengthy tutorials or complex guides - if you can use a
                smartphone, you can use our app. It&apos;s that simple. Dive in
                and discover how easy it is to get things done with our app
                today
              </p>
            </div>
          </div>
          <div>
            <div className="px-6 md:overflow-hidden">
              <Image
                src="/images/call.png"
                alt="connect-ui"
                width={1200}
                height={1200}
                className="max-w-full border-2 border-sky-600 rounded-md md:ml-20 "
              />
            </div>
          </div>
        </div>
      </div>
       <Footer/>
    </main>
  );
};

export default page;
