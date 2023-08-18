import React, { useState } from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Button } from '../commonUI/Button';
import { ContactModal } from '../commonUI/ContactModal';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='max-w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-red-500'>Accountax</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
    <div>
        <h6 className='font-medium text-gray-400'>Learn More</h6>
        <ul>
            <li className='py-2 text-sm'>Are you interested in becoming a client?</li>
            <li className='py-2 text-sm'>Just share more details about your needs in our form and we'll schedule a call!</li>
            <li className='py-2 text-sm'>Note: We are not taking on new personal tax clients.</li>
            <div className='flex justify-start items-center mt-6'>
            <Button onClick={()=>setShowModal(true)} className="w-48">Request a Call</Button>
            </div>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Contact Accountax</h6>
        <ul>
            <li className='text-sm'>3324 MAIN ST.</li>
            <li className='text-sm'>Niagra Falls, ON</li>
            <li className='text-sm'>L2G 5Z5 </li>
            <li className='text-sm'>Canada</li>
        </ul>

      </div>
      {showModal ? (
        <ContactModal open={showModal} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
};

export default Footer;
