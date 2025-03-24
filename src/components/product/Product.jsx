import React from 'react'

const Product = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
        <span className='flex'>
            <img className="rounded-md mx-auto my-3 w-75 h-75" alt="" src={product.imageUrl} />
        </span>
        <div className="p-4">
            <h3 className="text-xl font-bold">{ product.name }</h3>
            <h2 className="text-gray-600">R$ { product.price }</h2>
        </div>
    </div>
  )
}

export default Product