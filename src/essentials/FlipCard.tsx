"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function FlipCard({
  frontImage,
  backImage,
  title,
  link,
}: {
  frontImage: string;
  backImage: string;
  title: string;
  link: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-[300px] h-[300px] perspective">
      <div
        className={`relative w-[100%] h-[100%] mx-auto duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-[100%] h-[100%] bg-white/10 p-5 rounded-lg shadow-lg flex flex-col items-center justify-center text-white backface-hidden gap-3">
          <Image
            src={frontImage}
            alt="front"
            width={200}
            height={180}
            className="spin-animation"
          />
          <button
            className="px-4 py-2  bg-teal-400 text-black rounded shadow-md hover:shadow-lg hover:bg-teal-500 cursor-pointer"
            onClick={() => setFlipped(true)}
          >
            View Present
          </button>
        </div>

        {/* Back Side */}
        <div className="absolute border border-gray-400  w-[100%] h-[100%] bg-white/10 rounded-lg shadow-lg flex flex-col items-center text-white rotate-y-180 backface-hidden top-0">
          <button
            onClick={() => setFlipped(false)}
            className="absolute top-3 right-3 text-white bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 cursor-pointer transition"
            aria-label="Close"
          >
            &#x2715;
          </button>

          <Image
            src={backImage}
            alt="back"
            className="rounded-lg"
            width={500}
            height={500}
          />
          <div
            className="w-full h-20 bg-transparent backdrop-blur-2xl shadow-md hover:shadow-lg absolute bottom-0 flex justify-center"
            style={{ borderRadius: "0px 0px 8px 8px" }}
          >
            {link === "#" ? (
              <div className="inline-flex items-center absolute bottom-5 gap-2 px-4 py-2 bg-teal-400 text-black font-medium rounded">
                {title}
              </div>
            ) : (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center absolute bottom-5 gap-2 px-4 py-2 bg-teal-400 text-black font-medium rounded hover:bg-teal-500 transition"
              >
                {title}
                <FaArrowRight className="text-sm" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
