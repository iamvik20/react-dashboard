// import React from 'react'
import earnings from '../assets/earnings.svg';
import { TfiArrowUp, TfiArrowDown } from "react-icons/tfi";


function Card({ data }) {
    const { name, amount, icon, profit, loss , color} = data;
    return (
        <div className="card">
            <div style={{
                height: '100px',
                width: '100px',
                background: color,
                padding: '15px',
                borderRadius: '50%',
                display: 'flex',
                

            }}>
                <img
                    src={icon}
                    width='80px'
                />
            </div>
            <div className='card-header'>
                <p
                    style={{
                        color: '#B4B4B3',
                        fontSize: '.8em'
                    }}
                >{name}</p>
                <h2>{amount}</h2>
                <p style={{
                    fontSize: '0.8em'
                }}>
                    <span style={{
                        textAlign: 'center',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: loss ? 'red' : '#54B435'
                    }}>
                        {loss ? <TfiArrowDown color='red' /> : <TfiArrowUp />}{profit}
                    </span> this month
                </p>
            </div>
        </div >
    )
}

export default Card