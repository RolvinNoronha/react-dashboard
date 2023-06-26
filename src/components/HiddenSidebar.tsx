import { signOut } from "next-auth/react"
import { Dispatch, SetStateAction } from "react"
import { AiOutlineCalendar, AiOutlinePieChart } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { FiSettings } from "react-icons/fi"
import { IoPricetagsOutline } from "react-icons/io5"

type Props = {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>,
}


const HiddenSidebar = ({ show, setShow } : Props) => {
    return (
    <div className="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-slate-200">
        <div className="sidebar ml-8 [&>*]:text-black [&>*]:font-Mont">
            <h1 className="text-4xl font-medium text-white my-12"><span onClick={() => setShow(!show)} className="cursor-pointer mr-2">&times;</span>Board.</h1>
            <div className="[&>*]:flex [&>*]:items-center flex-1 [&>*]:mb-4 text-white">
                <h3 className="font-semibold"><AiOutlinePieChart  className="mr-4"/> Dashboard</h3>
                <h3><IoPricetagsOutline className="mr-4" /> Transactions</h3>
                <h3><AiOutlineCalendar className="mr-4"/> Schedule</h3>
                <h3><BiUserCircle className="mr-4"/> Users</h3>
                <h3 ><FiSettings className="mr-4"/> Settings</h3>
            </div>
            <div className="text-white mb-2 [&>*]:mb-2 [&>*]:text-sm [&>*]:font-normal">
                <p>Help</p>
                <p>Contact Us</p>
                <p className="cursor-pointer" onClick={() => signOut({callbackUrl: "/"})}>Sign Out</p>
            </div>
        </div>
    </div>
    )
}

export default HiddenSidebar
