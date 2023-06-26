
import { AiOutlineBell, AiOutlineLike } from "react-icons/ai";
import Data from "./Data";
import { IoPricetagsOutline, IoCashOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { Dispatch, SetStateAction } from "react";

type Props = {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>,
}

const DashboardHeader = ({show, setShow} : Props) => {
    return (
    <div className="flex flex-col max-[1200px]:col-start-1 max-[1200px]:col-end-6 max-[750px]:min-h-[320px] max-[500px]:min-h-[360px] max-[900px]:min-h-[200px] col-start-2 col-end-6 row-start-1 row-end-2 font-Mont rounded-3xl">
        <div className="flex h-8 flex-wrap">
            <h1 className="flex-1 text-black text-xl font-medium"><span onClick={() => setShow(!show)} className="min-[1100px]:hidden mr-2 hover:cursor-pointer">&#9776;</span>Dashboard</h1>
            <input placeholder="Search..." className="bg-white mr-2 rounded-lg p-2 focus:outline-none max-[500px]:order-4 max-[500px]:flex-1 max-[500px]:mt-2 "type="text" />
            <AiOutlineBell fontSize="25px" className="mr-2" />
            <img
                className="h-8 w-8 rounded-full" 
                src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="profile" />
        </div>
        <div className="flex justify-between max-[400px]:min-h-[500px] max-[400px]:mb-14 max-[400px]:justify-center flex-wrap max-[500px]:mt-[3rem]">
            <Data 
                color="green"
                Icon={IoCashOutline} 
                value="$2,129,430"
                header="Total Revenues"
            />

            <Data 
                color="orange"
                Icon={IoPricetagsOutline} 
                value="1520"
                header="Total Transactions"
            />

            <Data 
                color="red"
                Icon={AiOutlineLike} 
                value="9721"
                header="Total Likes"
            />

            <Data 
                color="indigo"
                Icon={FiUsers} 
                value="892"
                header="Total Users"
            />
        </div>
    </div>
    )
}

export default DashboardHeader