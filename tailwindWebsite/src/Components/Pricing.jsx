import React from 'react';
import { pricingOptions } from '../Constants/index.jsx';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="mt-20">
      <h1 className="bold text-4xl sm:text-2xl bg-gradient-to-r from bg-red-500 to bg-green-500 text-center text-transparent bg-clip-text">
        Pricing
      </h1>
      <div className="p-2 mt-10 flex flex-wrap -mx-2 lg:mb-0">
        {pricingOptions.map((price, index) => (
          <div
            key={index}
            className="w-full -mx-2 sm:w-1/2 lg:w-1/3 border border-neutral-600 rounded-xl px-2 mb-2 "
          >
            <div className="flex flex-col p-4">
              <p className="text-4xl mb-8">
                <span>{price.title}</span>
                {price.title == 'Pro' && (
                  <span className="bg-gradient-to-r from bg-orange-400 to bg-orange-700 text-transparent bg-clip-text text-xl">
                    (Most Popolar)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{price.price}</span>
                <span>/Month</span>
              </p>
            </div>
            <ul>
              {price.features.map((item, index) => (
                <li
                  key={index}
                  className="flex text-white mt-6 items-center p-3"
                >
                  <CheckCircle2 />
                  <span className="ml-2">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className=" mb-5 mt-5 w-full inline-flex justify-center h-15 items-center p-2 text-center border border-orange-900 rounded-2xl hover:bg-orange-600 hover:text-black transition-all duration-150 ease-in-out"
            >
              {' '}
              Subscribe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
