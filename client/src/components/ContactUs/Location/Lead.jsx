import { FaFileInvoiceDollar, FaAward } from "react-icons/fa";

export const LeadDetails = () => {
    return(
        <div>
            <div className="md:absolute w-[100%]  h-48 md:w-[40%] md:h-36 shadow-md bg-[#fbfbfb] bottom-0 md:left-[8%] p-6  md:mb-6">
                <div className="mx-auto grid md:grid-cols-4 justify-center items-center">
                    <FaFileInvoiceDollar className="h-12 w-12 col-span-1"/>
                    <div className="col-span-3">
                        <p className="font-bold text-xl text-slate-500">Industry Leader in Tax Return</p>
                        <p className="text-slate-500">We quickly and accurately file your taxes</p>
                    </div>
                 </div>
            </div>
            <div className="md:absolute h-48 md:w-[40%] md:h-36 shadow-md bg-[#fbfbfb] border-t-2 bottom-0 md:right-[8%]  right-0  p-6  md:mb-6">
                <div className="mx-auto grid md:grid-cols-4 justify-center items-center">
                    <FaAward className="h-12 w-12 col-span-1"/>
                    <div className="col-span-3">
                    <p className="font-bold text-xl text-slate-500">50+ Years Experience</p>
                    <p className="text-slate-500">Accounting & Tax Filing Services, Ontario.</p>
                    </div>
                 </div>
            </div>
            {/* <div className="absolute w-[40%] shadow-md bg-white bottom-24 right-32 rounded-md">
                <p className="font-bold text-2xl text-slate-500"></p>
                 <p className="text-slate-500"></p>
            </div> */}

        </div>
    )
}