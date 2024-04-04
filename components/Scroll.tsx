"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Hello <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Let&apos;s dive in
              </span>
            </h1>
          </>
        }
      >
        <div>
          <div className="md:flex md:flex-between sm:mt-20 mt-10">
            <div className="px-8 mb-10">
              <h1 className="text-6xl text1 text-white mb-10 font-semibold">
                Hello!!!
              </h1>
              <div>
                <p className="text-slate-300 first-letter:font-semibold first-letter:text-4xl text-left max-w-[800px] text-md">
                  Welcome to Connect, a revolutionary platform that redefines
                  the way we communicate and collaborate. Built with the same
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
              <div className="px-6 ">
                <Image
                  src="/images/connect_hero.png"
                  alt="connect-ui"
                  width={1200}
                  height={1200}
                  className="max-w-full border-2 border-sky-600 rounded-md  "
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-between sm:mt-20 mt-10 sm:ml-5">
            <div className="md:overflow-hidden px-6 ">
              <Image
                src="/images/recordings.png"
                alt="connect-ui"
                width={1000}
                height={2000}
                className="max-w-full border-2 border-sky-600 rounded-md  mb-10 "
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
                  but you can also share these recordings with your team
                  members. This ensures that everyone stays on the same page,
                  even if they couldn&apos;t attend the meeting. Don&apos;t miss
                  out on important discussions - record and share your meetings
                  today!
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
                  app. Designed with you in mind, our intuitive interface
                  ensures that you can navigate through the app with ease. No
                  need for lengthy tutorials or complex guides - if you can use
                  a smartphone, you can use our app. It&apos;s that simple. Dive
                  in and discover how easy it is to get things done with our app
                  today
                </p>
              </div>
            </div>
            <div>
              <div className="px-6 ">
                <Image
                  src="/images/call.png"
                  alt="connect-ui"
                  width={1200}
                  height={1200}
                  className="max-w-full border-2 border-sky-600 rounded-md "
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}

export const users = [
  {
    name: "Manu Arora",
    designation: "Founder, Algochurn",
    image: "https://picsum.photos/id/10/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Founder, Sarah's Kitchen",
    image: "https://picsum.photos/id/11/300/300",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Software Engineer, Tech Corp",
    image: "https://picsum.photos/id/12/300/300",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager, Innovate Inc",
    image: "https://picsum.photos/id/13/300/300",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "Data Scientist, DataWorks",
    image: "https://picsum.photos/id/14/300/300",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "UX Designer, DesignHub",
    image: "https://picsum.photos/id/15/300/300",
    badge: "Mentor",
  },
  {
    name: "Michael Miller",
    designation: "CTO, FutureTech",
    image: "https://picsum.photos/id/16/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Brown",
    designation: "CEO, StartUp",
    image: "https://picsum.photos/id/17/300/300",
  },
  {
    name: "James Wilson",
    designation: "DevOps Engineer, CloudNet",
    image: "https://picsum.photos/id/18/300/300",
    badge: "Something",
  },
  {
    name: "Patricia Moore",
    designation: "Marketing Manager, MarketGrowth",
    image: "https://picsum.photos/id/19/300/300",
    badge: "Mentor",
  },
  {
    name: "Richard Taylor",
    designation: "Frontend Developer, WebSolutions",
    image: "https://picsum.photos/id/20/300/300",
  },
  {
    name: "Linda Anderson",
    designation: "Backend Developer, ServerSecure",
    image: "https://picsum.photos/id/21/300/300",
  },
  {
    name: "William Thomas",
    designation: "Full Stack Developer, FullStack",
    image: "https://picsum.photos/id/22/300/300",
    badge: "Badger",
  },
  {
    name: "Elizabeth Jackson",
    designation: "Project Manager, ProManage",
    image: "https://picsum.photos/id/23/300/300",
    badge: "Mentor",
  },
  {
    name: "David White",
    designation: "Database Administrator, DataSafe",
    image: "https://picsum.photos/id/24/300/300",
    badge: "Advocate",
  },
  {
    name: "Jennifer Harris",
    designation: "Network Engineer, NetConnect",
    image: "https://picsum.photos/id/25/300/300",
  },
  {
    name: "Charles Clark",
    designation: "Security Analyst, SecureIT",
    image: "https://picsum.photos/id/26/300/300",
  },
  {
    name: "Susan Lewis",
    designation: "Systems Analyst, SysAnalyse",
    image: "https://picsum.photos/id/27/300/300",
  },
  {
    name: "Joseph Young",
    designation: "Mobile Developer, AppDev",
    image: "https://picsum.photos/id/28/300/300",
    badge: "Mentor",
  },
  {
    name: "Margaret Hall",
    designation: "Quality Assurance, BugFree",
    image: "https://picsum.photos/id/29/300/300",
    badge: "Developer",
  },
];
