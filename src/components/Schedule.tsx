
const Schedule = () => {
    return (
    <div className="bg-white col-start-4 col-end-6 p-6 rounded-3xl max-[1200px]:col-start-4 max-[1200px]:col-end-6">
        <div className="flex flex-row justify-between">
            <h1 className="text-lg font-medium">Today's Schedule</h1>
            <p className="text-xs font-light">{"See All >"}</p>
        </div>
        <div className="flex flex-col [&>*]:mb-2 p-6">
            <div className="flex flex-row items-stretch">
                <div className="w-2 rounded-lg mr-2 bg-blue-300"></div>
                <div>
                    <h2 className="text-sm font-light">Meeting with suppliers from Kuta Bail</h2>
                    <p className="text-xs font-light">14:00 to 15:00</p>
                    <p className="text-xs font-light">at Sunset road, Kuta Bail</p>
                </div>
            </div>
            <div className="flex flex-row items-stretch">
                <div className="w-2 rounded-lg mr-2 bg-green-200"></div>
                <div>
                    <h2 className="text-sm font-light">Check operation at Giga Factory 1</h2>
                    <p className="text-xs font-light">18:00 to 20:00</p>
                    <p className="text-xs font-light">at Cental Jakarta</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Schedule