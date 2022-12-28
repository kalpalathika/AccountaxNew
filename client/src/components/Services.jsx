import React from 'react';
import  company  from "../assets/company.png";
import  bookKeeping  from "../assets/bookKeeping.png";
import  taxPlanning  from "../assets/taxPlanning.png";



const Services = () => {
  return (
    <div id="services" className='w-full py-[5rem] px-4 bg-[#f0f0f0]'>
      <h2 className='text-3xl  text-center'>Our Startup Services </h2>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-24'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 bg-white rounded-lg hover:scale-110 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem]' src={company} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>COMPANY STRUCTURE</h2>
              <div className='text-center font-medium'>
                  <p className=' text-slate-500 mx-8'>We will train your staff to carry out and monitor the financial aspects of your business</p>
              </div>
          </div>
          <div className='w-full shadow-xl bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-110 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={bookKeeping} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>BOOK KEEPING</h2>
              <div className='text-center font-medium'>
                  <p className=' text-slate-500 mx-8'>We will set up and keep your books, either manually or computerized</p>
              </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 bg-white rounded-lg hover:scale-110 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem]' src={taxPlanning} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>TAX PLANNING</h2>
              <div className='text-center font-medium'>
                  <p className=' text-slate-500 mx-8'>We will complete all necessary financial reports and records current, accurate and immediately available.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Services;
