export default function skillPage() {
  return (
    <div>
      <h1 className="mt-15 text-3xl text-teal-300">Skills</h1>
      <p className="mt-5 text-[#FFFFF0]">
        Here are some of my skills my name is chit min thu:
      </p>
      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          <div className="flex flex-col gap-10">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white">HTML</span>
                <span className="text-white">80%</span>
              </div>
              <div
                className="bg-[#C0C0C0] position-relative"
                style={{ width: "100%", height: "8px" }}
              >
                <div
                  className="bg-green-400 position-absolute"
                  style={{ width: "80%", height: "8px" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white">CSS</span>
                <span className="text-white">80%</span>
              </div>
              <div
                className="bg-[#C0C0C0] position-relative"
                style={{ width: "100%", height: "8px" }}
              >
                <div
                  className="bg-green-400 position-absolute"
                  style={{ width: "80%", height: "8px" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white">JAVASCRIPT</span>
                <span className="text-white">70%</span>
              </div>
              <div
                className="bg-[#C0C0C0] position-relative"
                style={{ width: "100%", height: "8px" }}
              >
                <div
                  className="bg-green-400 position-absolute"
                  style={{ width: "70%", height: "8px" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white">REACT</span>
                <span className="text-white">60%</span>
              </div>
              <div
                className="bg-[#C0C0C0] position-relative"
                style={{ width: "100%", height: "8px" }}
              >
                <div
                  className="bg-green-400 position-absolute"
                  style={{ width: "60%", height: "8px" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white">NEXT JS</span>
                <span className="text-white">60%</span>
              </div>
              <div
                className="bg-[#C0C0C0] position-relative"
                style={{ width: "100%", height: "8px" }}
              >
                <div
                  className="bg-green-400 position-absolute"
                  style={{ width: "60%", height: "8px" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white">OTHER</span>
                <span className="text-white">50%</span>
              </div>
              <div
                className="bg-[#C0C0C0] position-relative"
                style={{ width: "100%", height: "8px" }}
              >
                <div
                  className="bg-green-400 position-absolute"
                  style={{ width: "50%", height: "8px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
