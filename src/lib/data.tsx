
export const createData = () => {
    const data = [
        {   
            name: "Week 0",
            uv: Math.round(Math.random() * 500),
            pv: Math.round(Math.random() * 500),
            amt: Math.round(Math.random() * 500),
        },
        {   
            name: "Week 1",
            uv: Math.round(Math.random() * 500),
            pv: Math.round(Math.random() * 500),
            amt: Math.round(Math.random() * 500),
        },
        {
            name: "Week 2",
            uv: Math.round(Math.random() * 500),
            pv: Math.round(Math.random() * 500),
            amt: Math.round(Math.random() * 500),
        },
        {
            name: "Week 3",
            uv: Math.round(Math.random() * 500),
            pv: Math.round(Math.random() * 500),
            amt: Math.round(Math.random() * 500),
        },
        {
            name: "Week 4",
            uv: Math.round(Math.random() * 500),
            pv: Math.round(Math.random() * 500),
            amt: Math.round(Math.random() * 500),
        },
    ]   


    return data;
}


export const createPieData = () => {
    const data = [
        { name: 'Group A', value: Math.round(Math.random() * 500) },
        { name: 'Group B', value: Math.round(Math.random() * 500) },
        { name: 'Group C', value: Math.round(Math.random() * 500) },
    ]

    return data;
}