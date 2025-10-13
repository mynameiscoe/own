import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mt-15 text-white">
      <h3 className="mb-5 text-3xl text-teal-300">About</h3>
      <p className="text-[16px] text-[#FFFFF0]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nobis, ea
        porro molestiae cupiditate sequi ipsa fugit distinctio blanditiis labore
        iure, vitae dolorum possimus. Impedit vero expedita consequatur
        molestiae deserunt.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-2 mt-10 lg:mt-20 items-center">
        <div className="col-span-12 lg:col-span-4 flex justify-start">
          <Image src="/boy.png" alt="coe" width={400} height={400} />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div>
            <div className="text-2xl">Web Developer</div>
            <p className="mt-4 mb-8 text-[#FFFFF0]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
              dicta. Nam illo iure esse? Placeat sit aliquam temporibus
              deleniti. Sunt maiores eaque ab magnam sapiente magni laudantium
              odit nulla? Fugit.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-[#FFFFF0]">
            <div className="flex items-center gap-2">
              <span>Birthday:</span>
              <span>10 May 2005</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Age:</span>
              <span>20</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Phone:</span>
              <span>09 942620449</span>
            </div>
            <div className="flex items-center gap-2">
              <span>City:</span>
              <span>Yangon, Hlaing</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Email:</span>
              <span>chitminthu2005c@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
