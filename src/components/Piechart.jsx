// import React from 'react'
import CustomLabel from './CustomeLabel';
import './Piechart.css';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label } from 'recharts';

const Piechart = () => {
    const data = [
        { name: 'Old Cutomers', value: 35 },
        { name: 'New Cutomers', value: 65 },
        { name: 'Existing Cutomers', value: 65 },
    ];
    const COLORS = [ '#C70039', '#C1D0B5', '#2525d1'];
    return (
        <div className='piechart-container'>
            <div className="p-header">
                <h3>Cutomers</h3>
                <p>Customers that buy products</p>
            </div>
            <div className="piechart">
                <ResponsiveContainer width='100%' height="100%">
                    <PieChart width={200} height={300} >
                        <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={95}
                            fill="#8884d8"
                            paddingAngle={0}
                            legendType={'line'}
                            dataKey="value"
                        >
                            <Label
                                position="center"
                                content={<CustomLabel noOfBubbleTeaSold={data[1].value}/>}
                            />
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Piechart;