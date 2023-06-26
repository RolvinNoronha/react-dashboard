"use client"

import { useState } from "react"
import Dropdown from "./Dropdown"
import { PieChart, Pie, Cell } from "recharts";
import { createPieData } from "@/lib/data"

export type PieData = {
    name: string,
    value: number,
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
const LEGEND = ["Basic Trees", "Custom Short Pants", "Super Hoodles"]
const Colors = ["blue-500", "teal-500", "amber-400"]


const Products = () => {

    const piegraphdata = createPieData();
    const [pieData, setPieData] = useState<PieData[]>(piegraphdata);
    

    return (
    <div className="bg-white flex col-start-2 min-w-[250px] overflow-scroll max-[900px]:min-h-[250px] [&>*]:p-4 col-end-4 rounded-3xl max-[1200px]:col-start-1 max-[1200px]:col-end-4">
        <div className="flex flex-col w-min">
            <h1 className="text-lg font-medium">Products</h1>
            <Dropdown setPieData={setPieData} setData={() => {}} />
        </div>

        <div className="">
            <PieChart width={200} height={200}>
            <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
    
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
            >
            {pieData.map((entry, index) => {
                return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            })}
          </Pie>
        </PieChart>
        </div>
        <div className="flex flex-col justify-center">
            {LEGEND.map((legend, idx) => {
                let color = COLORS[idx];
                return <div className="max-[800px]:ml-8" key={idx}>
                    <h2 className="flex flex-row items-center"><span style={{ backgroundColor: `${color}`}} className="h-3 mr-2 w-3 block rounded-full"></span>{legend}</h2>
                    <p className="ml-4 font-light text-sm">{Math.round((pieData[idx].value * 100) / 1500) + "%"}</p>
                </div>
            })}

        </div>
    </div>
    )
}

export default Products
