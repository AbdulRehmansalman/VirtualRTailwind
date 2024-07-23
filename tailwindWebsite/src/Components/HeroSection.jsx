import React from 'react';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text:7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from bg-orange-300 to bg-orange-600 text-transparent bg-clip-text">
          {' '}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-600 max-w-4xl">
        Empower Your Creativity and Bring your VR app ideas to Life with our
        intuitive development tools.Get Started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center mt-10 space-x-12">
        <a
          href="#"
          className="bg-gradient-to-r from bg-orange-400 to bg-orange-900 hover:shadow-orange-300 py-3 px-4 border rounded-md hover:border-[#f79d5d] rounded-md"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-3 px-4 rounded-md border hover:border-[#7a6253] "
        >
          Documentation
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 mx-2 my-4"
        >
          <source src={video1} />
          Your Browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 mx-2 my-4"
        >
          <source src={video2} />
          Your Browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
