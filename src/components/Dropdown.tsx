"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";
import { createData, createPieData } from "@/lib/data";
import { GraphData } from "./Activities";
import { PieData } from "./Products";

const Months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
type Props = {
    setData: Dispatch<SetStateAction<GraphData[]>>
    setPieData: Dispatch<SetStateAction<PieData[]>>
}

const Dropdown = ({ setData, setPieData } : Props) => {

    const [dropdown, setDropdown] = useState<boolean>(false)
    const [month, setMonth] = useState<string>("January");

    const handleClick = ( month: string) => {
        setMonth(month)
        setDropdown(!dropdown);
        setPieData(createPieData());
        setData(createData());
    }

    return (
        <div className="relative">
                <button onClick={() => setDropdown(!dropdown)} className="flex flex-row font-light text-sm mt-2 items-center">
                    <RiArrowDropDownLine fontSize="25px" />
                    {month}
                </button>
                {
                dropdown &&
                <div className="z-10 bg-slate-200 font-light text-sm mb-2 flex flex-col top-10 absolute left-0 h-16 overflow-scroll shadow-lg border-1">
                    {
                        Months.map((month, idx) => {
                            return <button className="border-b-2 mb-2 p-1 px-2" onClick={() => handleClick(month)} key={idx}>
                                {month}
                            </button>
                        })
                    }
                </div>
                }

        </div>
    )
}

export default Dropdown