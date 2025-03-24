import React from 'react'

const Modal = ({ setOpenModal, data }) => {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="mt-3 sm:flex">                    
              <div className="mt-2 text-center sm:text-left">
                <img className="rounded-md w-110 h-110 mx-auto" src={data.imageUrl} />
                <h4 className="mt-2 text-lg font-medium text-gray-800">
                    {data.name}
                </h4>
                <h3 className="mt-2 text-left text-gray-500">
                  R$ {data.price}
                </h3>
                <div class="mt-2 bg-white flex justify-left flex-wrap">
                  <span class="inline-flex items-center mt-1 mb-1 mr-1 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600">
                    <span class="ml-1 mr-1">
                      {data.type}
                    </span>
                  </span>
                  <span class="inline-flex items-center m-1 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600">
                    <span class="ml-1 mr-1">
                      {data.seller}
                    </span>
                  </span>
                  <span class="inline-flex items-center m-1 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600">
                    <span class="ml-1 mr-1">
                      {data.sport}
                    </span>
                  </span>
                </div>
                { data.availableSizes ? (
                  <h3 className="mt-2 text-left">
                  Tamanhos disponíveis <span className='text-gray-800'>{data.availableSizes.replaceAll(',', ', ')}</span>
                </h3>
                ) : (<></>)}
                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                    {data.details}
                </p>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                    onClick={() => setOpenModal(false)}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal