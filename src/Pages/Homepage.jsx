// import React from 'react'
import Barchart from '../components/Barchart'
import Card from '../components/Card'
import Header from '../components/Header'
import Piechart from '../components/Piechart'
import ProductTable from '../components/ProductTable'
import { CardData } from '../data/CardData'

function Homepage({ OpenSidebar }) {
    return (
        <div className='container'>
            <Header OpenSidebar={OpenSidebar}/>
            <div className='card-container'>
                {
                    CardData.map(data => {
                        return (
                            <Card key={data.name} data={data} />
                        )
                    })
                }
            </div>
            <div className='charts'>
                <Barchart />
                <Piechart />
            </div>
            <ProductTable />
        </div>
    )
}

export default Homepage