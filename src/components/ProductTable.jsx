// import React from 'react'

import { BiSearch } from "react-icons/bi";

function ProductTable() {

  const products = [
    {
      id: 1,
      name: 'Asbtract 3D',
      image: 'https://media.istockphoto.com/id/1479180033/photo/digital-eye-ai-artificial-intelligence-digital-concept.webp?b=1&s=170667a&w=0&k=20&c=TiT2tkP7ohy6CfAhXysl2v5oVm4Q5pP0utW46gOzWdA=',
      stock: 10,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      price: 100,
      totalSales: 500,
    },
    {
      id: 2,
      name: 'Sharphens Illustration',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFic3RyYWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      stock: 20,
      price: 200,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      totalSales: 1000,
    },
    {
      id: 3,
      name: 'Light Trail',
      image: 'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFic3RyYWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      stock: 30,
      price: 300,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      totalSales: 1500,
    },
  ];
  return (
    <div className="table-container">
      <div className="table-header">
        <h3>Product Sell</h3>
        <div className="f-container">
          <div className="search-bar t-s">
            <BiSearch size='20px' color="grey" />
            <input type="text" name="searcg" placeholder="Search" />
          </div>
          <select className="select-bar">
            <option value="last">Last 30 Days</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className='head product-desc'>Product Name</th>
            <th className='head right'>Stock</th>
            <th className='head right'>Price</th>
            <th className='head right'>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className='product-desc'>
                <div className='product-content'>
                  <img className='tab-img' src={product.image} alt={product.name} />
                  <div className="tab-content">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                </div>
              </td>
              <td className='right'>{product.stock}</td>
              <td className='right'>{product.price}</td>
              <td className='right'>{product.totalSales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default ProductTable