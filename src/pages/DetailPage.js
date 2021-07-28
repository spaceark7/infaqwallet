import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'
import BackButton from '../components/BackButton'
import NumberFormat from 'react-number-format'

const DetailPage = ({ match }) => {
  const _data = data.find((d) => d.tanggal === match.params.tanggal)
  console.log(_data)
  return (
    <div className='px-4  md:py-8 lg:py-10 md:h-full h-auto lg:container-md xl:grid xl:grid-flow-row  lg:mx-auto  justify-center items-center align-middle '>
      <BackButton className='md:pb-4' destination={'/'} />
      <div className='py-4 px-3 lg:container lg:mx-auto  md:py-10 md:flex  md:align-middle md:items-center md:justify-evenly lg:w-2/3 xl:w-full  bg-white pb-7 h-5/6 rounded-xl'>
        <div className='px-2 h-full  grid grid-rows-5 space-y-5 md:grid-rows-2 grid-flow-col'>
          <div className='w-full h-auto flex align-middle justify-center items-center mt-5 pt-4  '>
            <i className=' fa fa-check text-lg bg-green-100 rounded-full text-7xl px-5 py-5 text-green-400'></i>
          </div>
          <div className='flex flex-wrap justify-center md:col-start-1 md:row-start-2  py-3 align-middle items-center'>
            <h1 className='font-bold w-full text-center text-pieIncome text-2xl'>
              {_data.jenis.charAt(0).toUpperCase() + _data.jenis.slice(1)}
            </h1>
            <p className='text-gray-400 mt-3 text-center leading-5 text-sm'>
              {_data.keterangan}
            </p>
          </div>
          <div className='py-5 w-full md:row-start-2 md:col-start-2 rounded-lg flex justify-center items-center align-middle bg-gray-100'>
            <NumberFormat
              className='pl-3 font-bold text-3xl'
              style={{
                color: _data.jenis === 'pemasukan' ? '#01937C' : '#DA0037',
              }}
              value={_data.nominal}
              thousandSeparator
              displayType={'text'}
              prefix={'Rp. '}
            />
          </div>
          <div className='mt-5 md:col-start-2 md:row-start-1'>
            <div className='grid grid-cols-2 align-middle items-center justify-center mt-3 '>
              <h2 className='text-left px-2  font-bold'>Tanggal :</h2>
              <h2 className='text-right px-2  font-bold'>{_data.tanggal}</h2>

              <h2 className='text-left px-2  font-bold'>Diposting Oleh :</h2>
              <h2 className='text-right px-2  font-bold'>{_data.author}</h2>
            </div>
          </div>

          <div className='bg-blue-700 md:hidden text-center flex justify-center align-middle items-center font-bold text-white text-xl mt-8 h-2/4 rounded-full'>
            <Link to='/'>Kembali</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
