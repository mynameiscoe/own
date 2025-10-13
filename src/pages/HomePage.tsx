"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faViber } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full mt-15 home-responsive">
      <div className="flex flex-col">
        {mounted && (
          <span className={` text-2xl font-semibold mb-[13px] text-white`}>
            Hello, name is
          </span>
        )}
        <p className="text-5xl font-bold text-white">Chit Min Thu</p>
        <div
          className="text-3xl font-extrabold sm:font-bold mt-5 mb-5"
          style={{ fontWeight: 700 }}
        >
          <span className="text-white">I&apos;m a </span>
          <span className="gradient-text-developer text-[#00FFFF]">
            Frontend Developer
          </span>
        </div>
        <p className="mb-[2px] text-white">
          I&apos;m a motivated junior frontend developer and
        </p>
        <p className="text-white">
          I&apos;m always learning and improving my skills.
        </p>
        <a
          href="#"
          download
          className="bg-[#00FFFF] hover:bg-[#00cccc] px-5 py-2 rounded-md shadow-lg font-semibold text-center mt-5 w-[200px] text-black"
        >
          <div className="flex justify-between items-center">
            <span>Download CV</span>
            <ArrowDownToLine />
          </div>
        </a>
        {/* <div className="flex justify-center gap-5 mt-5 mb-4 w-full">
          <div className="bg-white w-[34px] h-[34px] rounded-full text-center flex justify-center items-center">
            <FontAwesomeIcon
              icon={faViber}
              className="text-purple-700"
              size="lg"
            />
          </div>
          <div className="bg-white w-[34px] h-[34px] rounded-full text-center flex justify-center items-center">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-blue-800"
              size="lg"
            />
          </div>
          <div className="bg-white w-[34px] h-[34px] rounded-full text-center flex justify-center items-center">
            <FontAwesomeIcon
              icon={faTelegram}
              className="text-blue-400"
              size="lg"
            />
          </div>
        </div> */}
        {/* <div className="hidden md:block bg-amber-700" style={{ height: "0px" }}>
          <Image
            src="/music.png"
            alt="Music"
            width={280}
            height={280}
          />
        </div> */}
      </div>
      <div className="mt-8 md:mt-15">
        <Image
          className=""
          src="/cute.png"
          alt="cute"
          width={370}
          height={370}
        />
      </div>
    </div>
  );
}

{
  //  <Image
  //   className="spin-animation"
  //   src="/some.png" // Path relative to the `public` folder
  //   alt="cute"
  //   width={250}
  //   height={250}
  // />
}
