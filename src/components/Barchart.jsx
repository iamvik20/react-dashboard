
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Barchart.css';

function Barchart() {
    const data = [
        {
            name: 'Jan',
            uv: 3000,
            pv: 0,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 2500,
            pv: 0,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 4500,
            pv: 0,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 3580,
            pv: 0,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 3890,
            pv: 0,
            amt: 2181,
        },
        {
            name: 'Jun',
            uv: 1690,
            pv: 0,
            amt: 2500,
        },
        {
            name: 'Jul',
            uv: 3800,
            pv: 0,
            amt: 2400,
        },
        {
            name: 'Aug',
            uv: 0,
            pv: 5000,
            amt: 2400,
        },
        {
            name: 'Sep',
            uv: 4500,
            pv: 0,
            amt: 2400,
        },
        {
            name: 'Oct',
            uv: 3600,
            pv: 0,
            amt: 2400,
        },
        {
            name: 'Nov',
            uv: 3000,
            pv: 0,
            amt: 2400,
        },
        {
            name: 'Dec',
            uv: 3490,
            pv: 0,
            amt: 2100,
        },
    ];

    return (
        <div className='barchart-container'>
            <div className='barchart-header'>
                <div className='head'>
                    <h2>Overview</h2>
                    <p>Monthly Earnings</p>
                </div>
                <select className='select-bar'>
                    <option>Overlay</option>
                </select>
            </div>
            <div className='barchart'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={150} height={20} data={data}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} allowDataOverflow={false} fontSize={12} fontWeight={600} tickSize={15}/>
                        <Bar dataKey="pv" radius={10} stackId="a" barSize={35} fill='#362FD9' />
                        <Bar dataKey="uv" radius={10}  stackId="a" barSize={35} fill='#F1EFEF' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Barchart