

import React, { useState } from 'react';
import {MdDone} from 'react-icons/md';
import finance from '../assets/finance2.jpg';
import {Button} from '../commonUI/Button';
import { ContactModal } from '../commonUI/ContactModal';

export const WhyAccountax = () => {
    const [showModal, setShowModal] = useState(false);
    const accountaxArr = [
        {
            id: "quick-turnaround",
            heading: "Quick Turn around",
            description: "We quickly and accurately file your taxes while EFILING your details directly to Canada Revenue Services.",
        },
        {
            id: "experienced",
            heading: "Experienced",
            description: "Our 30+ years experience has helped us become an industry leader throughout Southern Ontario",
        },
        {
            id: "service",
            heading: "Service",
            description: "We treat all of our clients with respect, honesty and integrity. Our clients are family to us!",
        },
    ]
    return (
        <React.Fragment>
        <div id="accountax" className='w-full py-[5rem] px-4 bg-[#201630]'>
            <h2 className='text-4xl  text-center text-white font-bold'> Why Choose Accountax? </h2>
            <div className='mx-auto grid md:grid-cols-2 gap-5 px-8 py-12'>
                <div className='flex flex-col items-center'>
                <div class="inline-block overflow-hidden mb-12">
                        <img src={finance} className="h-full w-full transition-all duration-500 ease-in-out align-middle hover:scale-110"/>
                </div>
                <Button className="w-48" onClick={()=> setShowModal(true) }>Request a call</Button>
                </div>
                <div className="mx-auto grid md:grid-rows-3 gap-5">
                {
                    accountaxArr.map(data=> 
                        <div key={data.id}>
                            <div className="h-36 w-auto p-4 bg-black ">
                                {/* {client.icon} */}
                                <div className='flex justify-between items-center gap-4 group'>
                                        <MdDone className='h-12 w-12 text-white border-2 border-white rounded-full group-hover:text-red-500 group-hover:border-red-500'/>
                                    <div className='w-[90%]'>
                                        <h2 className='text-white text-lg group-hover:text-red-500'>{data.heading}</h2>
                                        <p className='text-slate-400 group-hover:text-red-500'>{data.description}</p>
                                    </div>
                                </div>
                            </div>
                            {/* <h2 className='text-md font-bold py-8 text-slate-400'>{client.name}</h2> */}
                        </div>
                        )
                }
                </div>
            </div>

        </div>
        {showModal ? (
        <ContactModal open={showModal} setShowModal={setShowModal} />
      ) : null}
        </React.Fragment>
      );
}