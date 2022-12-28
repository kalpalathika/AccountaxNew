import { MdLocationPin, MdAccessTime } from "react-icons/md";
import Maps from "../../../commonUI/Maps";
import {TbLocation} from "react-icons/tb";
import {BiPhoneCall} from "react-icons/bi";
import { LeadDetails } from "./Lead";
import React from "react";

export const LocationDetails = () => {
    return(
        <React.Fragment>
            <div className='hidden md:flex'>
                <div  id="location" className="h-[36rem] w-full  relative">
                    <Maps/>
                    <div className="absolute py-12 h-[30rem] w-96 md:w-72 sm:w-96 md:text-center bg-red-500 md:right-32">
                        <div className="py-4 flex gap-4 items-center justify-center">
                            <MdLocationPin className="h-12 w-12 text-white"/>
                            <div className="inline-flex flex-col items-start">
                                <p className="text-2xl font-bold text-white">Accountax</p>
                                <p className="text-white px-0">Niagara Falls, Canada</p>
                            </div>

                        </div>
                        <div className=" flex gap-4 items-center justify-center py-4">
                            <TbLocation className="h-4 w-4 text-white"/>
                            <div className="inline-flex flex-col items-start w-[70%]">
                                <p className=" font-bold text-white">Accountax</p>
                                <p className="text-white">Niagara Falls, Canada</p>
                            </div>
                        </div>
                        <div className=" flex gap-4 items-center justify-center pb-4">
                            <MdAccessTime className="h-4 w-4 text-white"/>
                            <div className="inline-flex flex-col items-start w-[70%]">
                                <p className=" font-bold text-white">Mon - Fri: 09.00 to 06.00</p>
                                <p className="text-white">Sat-Sun:Closed</p>
                            </div>
                        </div>
                        <div className=" flex gap-4 items-center justify-center pb-4 ">
                            <BiPhoneCall className="h-4 w-4 text-white"/>
                            <div className="inline-flex flex-col items-start  w-[70%]">
                                <p className="font-bold text-white">+1 23456-12</p>
                                <p className="text-white">+1 23456-12</p>
                            </div>
                        </div>
                        
                    </div>
                    <LeadDetails/>
                </div>
            </div>
            <div id="location" className="block md:hidden">
            <div className="h-[31rem] w-full">
                <Maps/>
            </div>
            <div className="h-96 w-auto sm:w-96  bg-red-500 md:right-32">
                        <div className="py-4 flex gap-4 items-center justify-center">
                            <MdLocationPin className="h-12 w-12 text-white"/>
                            <div className="inline-flex flex-col items-start">
                                <p className="text-2xl font-bold text-white">Accountax</p>
                                <p className="text-white px-0">Niagara Falls, Canada</p>
                            </div>

                        </div>
                        <div className=" flex gap-4 items-center justify-center py-4">
                            <TbLocation className="h-4 w-4 text-white"/>
                            <div className="inline-flex flex-col items-start w-[70%]">
                                <p className=" font-bold text-white">Accountax</p>
                                <p className="text-white">Niagara Falls, Canada</p>
                            </div>
                        </div>
                        <div className=" flex gap-4 items-center justify-center pb-4">
                            <MdAccessTime className="h-4 w-4 text-white"/>
                            <div className="inline-flex flex-col items-start w-[70%]">
                                <p className=" font-bold text-white">Mon - Fri: 09.00 to 06.00</p>
                                <p className="text-white">Sat-Sun:Closed</p>
                            </div>
                        </div>
                        <div className=" flex gap-4 items-center justify-center pb-4 ">
                            <BiPhoneCall className="h-4 w-4 text-white"/>
                            <div className="inline-flex flex-col items-start  w-[70%]">
                                <p className="font-bold text-white">+1 23456-12</p>
                                <p className="text-white">+1 23456-12</p>
                            </div>
                        </div>
                        
            </div>
            <LeadDetails/>

            </div>
        </React.Fragment>
    )
}