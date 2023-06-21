"use client"

import Activities from "@/components/Activities"
import Data from "@/components/Data"
import Products from "@/components/Products"
import Schedule from "@/components/Schedule"
import Sidebar from "@/components/Sidebar"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter();

    // if (!session) {
    //     router.push("/");
    // }

    return <div className="bg-slate-300 h-screen gap-4 p-8 w-full grid grid-cols-5 grid-rows-4">
        <Sidebar />
        <Data />
        <Activities />
        <Products />
        <Schedule />
    </div>
}

export default Dashboard