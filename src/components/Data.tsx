

import { IconType } from "react-icons"

type Props = {
    Icon: IconType,
    value: string,
    header: string,
    color: string,
}

const colors = {
    orange: "bg-orange-100",
    red: "bg-red-100",
    indigo: "bg-indigo-100",
    green: "bg-green-100",
}


const Data = ({ Icon, value, header, color} : Props) => {

    //@ts-ignore
    let colorClasses = colors[color]

    return (
    <div className={`flex flex-col rounded-3xl p-4 mt-4 w-44 ${colorClasses}`}>
        <Icon className="ml-auto"/>
        <h2 className="">{header}</h2>
        <p className="font-semibold">{value}</p>
    </div>
    )
}

export default Data