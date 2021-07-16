import React from 'react'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'

const CardHistory = ({ transaction }) => {
  return (
    <div>
      <div
        style={{
          borderColor:
            transaction.jenis === 'pemasukan' ? '#01937C' : '#DA0037',
        }}
        className='w-full  border-l-8  mt-3 mb-2 rounded-r-lg  bg-white shadow-md pb-3'
      >
        <h2 className='pl-3 text-gray-500 mb-1 text-xs pt-2'>
          {transaction.tanggal}
        </h2>
        <div className='flex justify-between h-full'>
          <div className='grid grid-rows-2 justify-between'>
            <h2 className='pl-3 text-lg font-semibold'>
              {transaction.jenis.charAt(0).toUpperCase() +
                transaction.jenis.slice(1)}
            </h2>

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
          </div>
          <div className='flex justify-center align-middle items-center p-2 h-full'>
            <Link
              className='text-white text-lg font-medium rounded-md bg-green-500 p-1 px-3 inline-block my-auto h-full'
              to={`/rincian/${transaction.tanggal}`}
            >
              Lihat Rincian
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardHistory
