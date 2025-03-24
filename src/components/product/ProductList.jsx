import { React, useState, useEffect } from 'react'
import Product from './Product'
import Spinner from '../common/Spinner'
import Modal from '../common/Modal'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState(null)
  const [selectedType, setSelectedType] = useState("");


  useEffect(() => {
    fetch('/api/products')
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((products) => {
        setProducts(products)
      })
      .catch((error) => {
        console.log('Erro ao carregar informações', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const types = [...new Set(products.map((item) => item.type))]

  const filteredProducts =
    selectedType === ''
      ? products
      : products.filter((item) => item.type === selectedType)


  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">Produtos</h2>
          <div className="mb-4">
            <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Filtro</label>
            <select
              id="type"
              name="type"
              className="border rounded w-1/4 py-2 px-3"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">Selecione uma categoria...</option>
              {types.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          { loading ? (<Spinner loading={loading} />) : 
            (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                { Array.isArray(filteredProducts) && filteredProducts.length > 0 ?
                  filteredProducts.map((product) => {
                    return (
                      <span key={product.id} onClick={() => {
                        setShowModal(true)
                        setModalData(product)
                      }}>
                        <Product product={product} />
                      </span>
                    )
                })
                : (<>Nenhum produto encontrado</>)}
              </div>
            )
        }
        {showModal && <Modal setOpenModal={setShowModal} data={modalData} />}
      </section>
    </>
  )
}

export default ProductList