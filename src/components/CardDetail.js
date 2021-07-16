import React from 'react'
import NumberFormat from 'react-number-format'

const CardHistory = ({ transaction }) => {
  return (
    <div>
      <div
        style={{
          borderColor:
            transaction.jenis === 'pemasukan' ? '#01937C' : '#DA0037',
        }}
        className='w-full  border-l-8  mt-3 mb-2  bg-white shadow-md pb-3'
      >
        <h2 className='pl-3 text-gray-500 mb-1 text-xs pt-2'>
          {transaction.tanggal}
        </h2>
        <div className='flex justify-between h-full'>
          <div className='grid grid-rows-2 justify-between'>
            <NumberFormat
              className='pl-3 font-bold text-lg'
              style={{
                color:
                  transaction.jenis === 'pemasukan' ? '#01937C' : '#DA0037',
              }}
              value={transaction.nominal}
              thousandSeparator
              displayType={'text'}
              prefix={'Rp. '}
            />
            <p className='pl-3 text-base '>{transaction.keterangan}</p>
          </div>
          <div className='flex justify-center align-middle items-center p-2 h-full'>
            <button className='p-2 px-3 bg-red-600 text-white'>
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardHistory
