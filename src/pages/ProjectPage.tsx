import Image from "next/image";

export default function ProjectPage() {
  return (
    <div>
      <h1 className="mt-15 text-3xl text-teal-300">Projects</h1>
      <p className="mt-5 text-[#FFFFF0]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla
        veniam quia deleniti fugit necessitatibus error tempore doloribus
        incidunt quidem exercitationem magni excepturi, iusto reiciendis
        voluptates voluptate ad, nesciunt ab.
      </p>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <div className="bg-white/10 p-5 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center">
              <h3 className="text-xl text-white mb-3">Project 1</h3>
              <Image
                className=""
                src="/cute.png"
                alt="cute"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="bg-white/10 p-5 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center">
              <h3 className="text-xl text-white mb-3">Project 2</h3>
              <Image
                className=""
                src="/cute.png"
                alt="cute"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="bg-white/10 p-5 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center">
              <h3 className="text-xl text-white mb-3">Project 3</h3>
              <Image
                className=""
                src="/cute.png"
                alt="cute"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="bg-white/10 p-5 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center">
              <h3 className="text-xl text-white mb-3">Project 2</h3>
              <Image
                className=""
                src="/cute.png"
                alt="cute"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="bg-white/10 p-5 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center">
              <h3 className="text-xl text-white mb-3">Project 2</h3>
              <Image
                className=""
                src="/cute.png"
                alt="cute"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="bg-white/10 p-5 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center">
              <h3 className="text-xl text-white mb-3">Project 2</h3>
              <Image
                className=""
                src="/cute.png"
                alt="cute"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
