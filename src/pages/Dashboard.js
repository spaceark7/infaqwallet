import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div className='hidden lg:block w-full h-screen'>
        <div className='container mx-auto px-10 py-10'>
          <h2 className='text-2xl font-bold text-blue-700 md:text-4xl'>
            Halo,{' '}
            <span className='text-2xl font-bold text-yellow-600 md:text-4xl '>
              User!
            </span>
          </h2>
          <p className='text-gray-500 md:text-xl'>
            Apakah ada transaksi baru hari ini?
          </p>
        </div>

        <div className='bg-white  container mx-auto lg:h-auto px-10 py-10 rounded-2xl mt-12 pb-10 px-5 pt-5 shadow-md md:px-10 md:h-3/6'>
          <h3 className=' text-xl font-semibold text-blue-700 md:text-2xl'>
            Silahkan pilih menu
          </h3>

          <div className='grid grid-cols-2  mt-5 w-full h-full space-x-4 '>
            <Link to={'/AddIncome'} className='lg:h-full'>
              <div className='bg-blue-700 p-8 rounded-xl md:h-3/6 lg:h-full   flex justify-evenly md:flex-col md:align-middle md:items-center'>
                <span>
                  <i className='fa fa-arrow-up mr-2 md:text-7xl md:font-bold text-pieIncome'></i>
                </span>
                <h1 className='text-white font-bold md:text-4xl'>Pemasukan</h1>
              </div>
            </Link>
            <Link to={'/AddOutcome'} className='lg:h-full'>
              <div className='bg-pieOutcome p-8 rounded-xl flex md:h-3/6 lg:h-full md:flex-col md:align-middle md:items-center  justify-evenly'>
                <span>
                  <i className='fa fa-arrow-down mr-2 text-white md:text-7xl md:font-bold'></i>
                </span>
                <h1 className='text-white font-bold md:text-4xl'>
                  Pengeluaran
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Small Screen */}
      <div className='h-screen lg:hidden'>
        <div className='container h-5/6 px-3 py-5 mx-auto'>
          <h2 className='text-2xl font-bold text-blue-700 md:text-4xl'>
            Halo,{' '}
            <span className='text-2xl font-bold text-yellow-600 md:text-4xl '>
              User!
            </span>
          </h2>
          <p className='text-gray-500 md:text-xl'>
            Apakah ada transaksi baru hari ini?
          </p>

          <div className='bg-white rounded-2xl mt-12 pb-10 px-5 pt-5 shadow-md md:px-10 md:h-3/6'>
            <h3 className=' text-xl font-semibold text-blue-700 md:text-2xl'>
              Silahkan pilih menu
            </h3>

            <div className='grid grid-cols-2  mt-5 w-full h-full space-x-1 md:grid-rows-2'>
              <Link to={'/AddIncome'} className='md:row-span-2'>
                <div className='bg-blue-700 p-8 rounded-xl md:h-4/6   flex justify-evenly md:flex-col md:align-middle md:items-center'>
                  <span>
                    <i className='fa fa-arrow-up mr-2 md:text-7xl md:font-bold text-pieIncome'></i>
                  </span>
                  <h1 className='text-white font-bold md:text-4xl'>
                    Pemasukan
                  </h1>
                </div>
              </Link>
              <Link to={'/AddOutcome'} className='md:row-span-2'>
                <div className='bg-pieOutcome p-8 rounded-xl flex md:h-4/6 md:flex-col md:align-middle md:items-center  justify-evenly'>
                  <span>
                    <i className='fa fa-arrow-down mr-2 text-white md:text-7xl md:font-bold'></i>
                  </span>
                  <h1 className='text-white font-bold md:text-4xl'>
                    Pengeluaran
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
