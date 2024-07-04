import React from 'react';

function VerifiComp() {
  return (
    <div className='bg-[#e8fbff] h-[30vh] py-6 flex flex-col items-center md:flex-row md:justify-around md:px-16 mt-10'>
      <div className='text-center md:text-left font-semibold text-2xl md:text-3xl mb-4 md:mb-0'>
        <h1>Let Suppliers <span className='border-b-4 border-[#e7760d]'>Find You</span></h1>
      </div>
      <div className='text-center'>
        <button className='bg-[#e7760d] w-36 p-2 rounded-md text-white'>Get Verified</button>
      </div>
    </div>
  );
}

export default VerifiComp;
