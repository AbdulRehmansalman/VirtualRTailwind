import React from 'react';
import { testimonials } from '../Constants/index';

const Testimonial = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-center">What People are Saying</h1>
      <div className=" mt-3 grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-neutral-950 mx-4 p-2 gap-4 rounded-2xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full h-auto flex flex-col border border-neutral-800 p-3 rounded-2xl"
          >
            <p className="text-neutral-500">{testimonial.text}</p>
            <div className="flex mt-4">
              <img
                src={testimonial.image}
                className="rounded-full h-10 w-10"
                alt=""
              />
              <div className="flex flex-col pl-6 justify-start items-start">
                <h5 className="text-neutral-400">{testimonial.user}</h5>
                <p className="text-neutral-600">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
