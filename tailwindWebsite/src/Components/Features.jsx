import React from 'react';
import { features } from '../Constants';

export const Features = () => {
  return (
    <div className="relative min-h-[500px] mt-20 border border-neutral-800">
      <div className="text-center p-3">
        <span className="bold text-xl mt-10 bg-gradient-to-r from bg-orange-400 to bg-orange-700 text-transparent bg-clip-text">
          FEATURE
        </span>
        <h1 className="mt-10 text-4xl bold sm:text-2xl lg:text-5xl ">
          Easily Build
          <span className="bold text-4xl sm:text-2xl lg:text-5xl bg-gradient-to-r from bg-orange-400 to bg-orange-800 text-transparent bg-clip-text">
            {' '}
            Your Code{' '}
          </span>
        </h1>
      </div>
      {/* Grid Columns */}
      <div className="flex flex-wrap mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 mt-5">
            <div className="flex">
              <div className="text-xl flex mx-6 justify-center items-center h-10 w-10 rounded-lg text-orange-700 bg-neutral-800 p-2">
                {feature.icon}
              </div>
              <div>
                <h5 className="max-w-7xl mt-1 mb-2 text-xl ">
                  {feature.text}{' '}
                </h5>
                <p className="text-neutral-700 max-w-17">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
