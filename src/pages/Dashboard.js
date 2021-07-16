import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='h-screen'>
      <div className='container h-5/6 px-3 py-5'>
        <h2 className='text-2xl font-bold text-blue-700'>
          Halo,{' '}
          <span className='text-2xl font-bold text-yellow-600'>User!</span>
        </h2>
        <p className='text-gray-500'>Apakah ada transaksi baru hari ini?</p>

        <div className='bg-white rounded-2xl mt-12 pb-10 px-5 pt-5 shadow-md'>
          <h3 className=' text-xl font-semibold text-blue-700'>
            Silahkan pilih menu
          </h3>

          <div className='grid grid-cols-2  mt-5 w-full space-x-1'>
            <Link to={'/AddIncome'}>
              <div className='bg-blue-700 p-8 rounded-xl flex justify-evenly'>
                <span>
                  <i className='fa fa-arrow-up mr-2 text-pieIncome'></i>
                </span>
                <h1 className='text-white font-bold'>Pemasukan</h1>
              </div>
            </Link>
            <Link to={'/AddOutcome'}>
              <div className='bg-pieOutcome p-8 rounded-xl flex justify-evenly'>
                <span>
                  <i className='fa fa-arrow-down mr-2 text-white'></i>
                </span>
                <h1 className='text-white font-bold'>Pengeluaran</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
