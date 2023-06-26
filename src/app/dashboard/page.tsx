"use client"

import Activities from "@/components/Activities"
import DashboardHeader from "../../components/DashboardHeader";
import Products from "@/components/Products"
import Schedule from "@/components/Schedule"
import Sidebar from "@/components/Sidebar"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react";
import HiddenSidebar from "@/components/HiddenSidebar";

const Dashboard = () => {
    const data = useSession()
    console.log(data)
    const router = useRouter();

    const [show, setShow] = useState<boolean>(false);

    if (data.status === "unauthenticated") {
        router.push("/");
    }

    return <div className="bg-slate-100 max-[800px]:h-full h-screen gap-6 p-4 w-full grid grid-cols-5 grid-rows-3 max-[900px]:flex max-[900px]:flex-col">
        <Sidebar />
        <DashboardHeader show={show} setShow={setShow} />
        {show && <HiddenSidebar show={show} setShow={setShow} />}
        <Activities />
        <Products />
        <Schedule />
    </div>
}

export default Dashboard