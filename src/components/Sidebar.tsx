

import { AiOutlinePieChart, AiOutlineCalendar } from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { signOut } from "next-auth/react";


const Sidebar = () => {
    return (
    <div className="bg-black col-start-1 h-full font-Mont row-span-full max-[1200px]:hidden rounded-3xl flex justify-center items-center flex-col max-[800px]-w-4/5">
        <h1 className="text-4xl font-medium text-white my-12">Board.</h1>
        <div className="[&>*]:flex [&>*]:items-center flex-1 [&>*]:mb-4 text-white">
            <h3 className="font-semibold"><AiOutlinePieChart  className="mr-4"/> Dashboard</h3>
            <h3><IoPricetagsOutline className="mr-4" /> Transactions</h3>
            <h3><AiOutlineCalendar className="mr-4"/> Schedule</h3>
            <h3><BiUserCircle className="mr-4"/> Users</h3>
            <h3 ><FiSettings className="mr-4"/> Settings</h3>
        </div>
        <div className="text-white mb-2 [&>*]:mb-2 [&>*]:text-sm [&>*]:font-light">
            <p>Help</p>
            <p>Contact Us</p>
            <p className="cursor-pointer" onClick={() => signOut({callbackUrl: "/"})}>Sign Out</p>
        </div>
    </div>
    )
}

export default Sidebar