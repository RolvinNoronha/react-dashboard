"use client"

import Dropdown from "./Dropdown"
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { createData } from "@/lib/data";



export type GraphData = {
    name: string,
    uv: number,
    pv: number,
    amt: number,
}


const Activities = () => {

    const graphData = createData();
    const [data, setData] = useState<GraphData[]>(graphData);


    return (
    <div className="bg-white overflow-scroll max-[900px]:min-h-[380px] flex col-start-2 col-end-6 p-6 row-start-2 row-end-3 -mt-16 rounded-3xl max-[1200px]:col-start-1 max-[1200px]:col-end-6">
        <div className="flex flex-col w-min">
            <h1 className="text-lg font-medium">Activities</h1>
            <Dropdown setPieData={() => {}} setData={setData} />
        </div>

        <div className="relative mt-4 ">
            <LineChart
            width={900}
            height={330}
            data={data}
            >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend wrapperStyle={{ position: "absolute", top: 0, right: -100, width: "min-content"}}/>
                <Line name="User1" type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                <Line name="User2" type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
        </div>
            
    </div>
    )
}

export default Activities