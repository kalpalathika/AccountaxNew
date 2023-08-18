import { FaUserTie, FaRegBuilding, FaRibbon
} from "react-icons/fa";
import {MdFamilyRestroom} from "react-icons/md";
import {BsGraphUp} from "react-icons/bs";
import {RiSuitcaseLine} from 'react-icons/ri'

export const Clients = () => {
    const clientArr = [
        {
            id: "business-owners",
            name: "Business owners",
            icon: <FaUserTie className="text-white h-12 w-12"/>
        },
        {
            id: "corporations",
            name: "Corporations",
            icon: <FaRegBuilding className="text-white h-12 w-12"/>
        },
        {
            id: "family-owned",
            name: "Family Business",
            icon: <MdFamilyRestroom className="text-white h-12 w-12"/>
        },
        {
            id: "high-net-worth",
            name: "High Net worth Individuals",
            icon: <BsGraphUp className="text-white h-12 w-12"/>
        },
        {
            id: "not-for-profit-accounting",
            name: "Not-for-Profit Accounting",
            icon: <FaRibbon className="text-white h-12 w-12"/>
        },
        {
            id: "professionals",
            name: "Professionals",
            icon: <RiSuitcaseLine className="text-white h-12 w-12"/>
        }
    ]
    return (
        <div id="clients" className='w-full py-[5rem] px-4 bg-white '>
            <h2 className='text-4xl  text-center'> Our Clients</h2>
            <p className="text-center text-xl text-slate-500">Which one are you?</p>
            <div className="mx-auto grid md:grid-cols-6 gap-8 pt-16 px-12">
            {
                clientArr.map(client=> 
                    <div className="text-center animate-fadeInUpAnim" key={client.id}>
                        <div className="w-24 h-24 bg-red-500 rounded-full inline-flex items-center justify-center hover:bg-[#201630]">
                            {client.icon}
                        </div>
                        <h2 className='text-md font-bold py-8 text-slate-400'>{client.name}</h2>
                    </div>
                    )
            }
            </div>
        </div>
      );
}