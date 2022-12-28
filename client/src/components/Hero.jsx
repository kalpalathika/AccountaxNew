import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  console.log("process", process.env)
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className={`text-red-500 text-2xl font-bold p-2`}>
          You find problems
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          We find Solutions
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-4xl text-xl font-bold py-4'>
            Can maintain your
          </p>
          <Typed
          className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['General ledger', 'Accounts Receivable','Accounts Payable','Bank Reconciliation','Payroll System','Financial Statements']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Why not share your resposibilities and concerns with the experts? We will save your time and money</p>
      </div>
    </div>
  );
};

export default Hero;
