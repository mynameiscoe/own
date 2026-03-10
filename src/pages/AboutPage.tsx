import Image from "next/image";
import { FaBirthdayCake, FaPhone, FaMapMarkerAlt, FaEnvelope, FaCode } from 'react-icons/fa';

export default function AboutPage() {
  const personalDetails = [
    { icon: FaBirthdayCake, label: 'Birthday', value: '10 May 2005' },
    { icon: FaPhone, label: 'Phone', value: '09 942620449' },
    { icon: FaMapMarkerAlt, label: 'City', value: 'Yangon, Hlaing' },
    { icon: FaEnvelope, label: 'Email', value: 'chitminthu2005c@gmail.com' },
  ];

  return (
    // Outer container with light background and padding
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12">
      <div className="max-w-7xl mx-auto shadow-2xl rounded-xl overflow-hidden">
        
        {/* --- Header Section (Focus/Tagline) --- */}
        <div className="bg-gray-800 p-8 text-center">
          <h2 className="text-4xl font-light text-white tracking-widest uppercase mb-2">
            My Journey
          </h2>
          <p className="text-lg text-teal-300 font-medium">
            Building responsive and scalable web solutions.
          </p>
        </div>

        {/* --- Main Content Split Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* 1. Left Column: Image and Main Title */}
          <div className="lg:col-span-4 p-8 bg-white border-r border-gray-200 flex flex-col items-center text-center">
            
            {/* Image Placeholder */}
            <div className="w-48 h-48 mb-6 relative rounded-full overflow-hidden border-4 border-gray-800 transition-shadow duration-300 shadow-xl">
                 {/* <Image 
                    src="/your-image-path.jpg" // Replace with your image path
                    alt="Your Portrait"
                    layout="fill"
                    objectFit="cover"
                 /> */}
                 <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700 font-bold">
                    Portrait
                 </div>
            </div>

            <h1 className="text-3xl font-extrabold text-gray-900">
              Your Name Here
            </h1>
            <p className="text-lg font-semibold text-teal-600 border-b-2 border-teal-600 inline-block pb-1 mt-1">
              <FaCode className="inline mr-2" /> Web Developer
            </p>
          </div>

          {/* 2. Right Column: Bio and Details */}
          <div className="lg:col-span-8 p-8 bg-gray-50">
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-wider">
              About My Role
            </h3>
            
            {/* Short Bio */}
            <p className="text-base text-gray-600 leading-relaxed mb-8 border-l-4 border-teal-500 pl-4 bg-white p-4 rounded shadow-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nobis, ea
              porro molestiae cupiditate sequi ipsa fugit distinctio blanditiis labore
              iure, vitae dolorum possimus. Impedit vero expedita consequatur
              molestiae deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dicta.
            </p>

            {/* Personal Details Cards */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-wider mt-10">
              Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalDetails.map((item, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-white border-t-4 border-teal-500 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="text-teal-500 text-2xl" />
                    <div>
                      <span className="text-sm font-medium text-gray-500 block">{item.label}</span>
                      <span className="text-lg font-semibold text-gray-800">{item.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Age is slightly separate as a quick fact */}
            <div className="mt-4 p-5 bg-gray-100 rounded-lg border border-gray-200">
                <span className="text-sm font-medium text-gray-500 block">Age:</span>
                <span className="text-xl font-bold text-gray-800">20 Years Old</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}