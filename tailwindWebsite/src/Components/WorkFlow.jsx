import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import codeImg from '../assets/code.jpg';
import { checklistItems } from '../Constants/index.jsx';

const WorkFlow = () => {
  return (
    <div className="mt-20 ">
      <h2 className="text-center bold text-3xl sm:text-5xl lg:6xl tracking-wide">
        Accelerate your{' '}
        <span className="bg-gradient-to-r from bg-orange-400 to bg-orange-800 text-transparent bg-clip-text">
          {' '}
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Image of Code" loading="lazy" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((list, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-300 h-10 w-10 mx-6 items-center justify-center rounded-full p-2">
                <CheckCircle2 />
              </div>
              <div className="mt-1 mb-1">
                <h5 className="text-xl">{list.title}</h5>
                <p className='text-md text-neutral-500'>{list.description}</p>   
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
