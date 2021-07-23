import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import CardDetail from '../components/CardDetail'
import data from '../data'
const AddIncome = () => {
  const [inputData, setInputData] = useState([])
  const [nominal, setNominal] = useState()
  const [description, setDescription] = useState()
  const [date, setDate] = useState()
  const [isDisabled, setIsDisabled] = useState(true)

  const handleSaveSubmit = (e) => {
    e.preventDefault()

    const obj = {
      jenis: 'pemasukan',
      nominal: nominal,
      keterangan: description,
      tanggal: date,
    }
    if (inputData.length !== 0) {
      setInputData((inputData) => [...inputData, obj])
      setDescription('')
    } else {
      setInputData((inputData) => [obj])
      setDescription('')
    }

    document.querySelector('.detail-form').reset()

    console.log(inputData)
  }

  const handleUpload = () => {
    console.log('Data now : ', inputData)
  }

  return (
    <div className='px-7 py-5 container mx-auto '>
      <div className='mb-5'>
        <BackButton destination={'/dashboard'} />
      </div>
      <h2 className='bg-blue-700 py-2 px-3 text-white rounded-md w-2/3 font-bold text-xl'>
        Rekapan Transaksi Pemasukan
      </h2>
      <form action='data' className='py-5'>
        <div>
          <label className='text-lg font-semibold' htmlFor='select'>
            Jenis Data
          </label>
          <select
            className='block select text-lg w-full bg-transparent mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
            name='income'
            id='income'
            disabled
          >
            <option className='' value='Pemasukan'>
              Pemasukan
            </option>
          </select>
        </div>
      </form>

      {inputData.length === 0 ? (
        <div>SIlahkan Isi Data</div>
      ) : (
        <div className='mt-2 mb-10 container mx-auto'>
          <h2 className='text-lg font-bold text-gray-500'>Data Tersimpan</h2>

          {inputData.map((data, index) => (
            <CardDetail key={index} transaction={data} />
          ))}
          <button
            onClick={handleUpload}
            className='mt-5 w-full p-2 py-3 bg-pieIncome text-lg font-bold text-white'
          >
            Upload Data
          </button>
        </div>
      )}

      <div className='container grid-cols-1 mx-auto'>
        <h2 className='text-2xl font-semibold text-center pb-8'>Rincian</h2>
        <form
          onSubmit={handleSaveSubmit}
          className='bg-white detail-form rounded-md shadow-md p-4 py-6'
          action='rincian'
        >
          <div className='mb-4'>
            <label className='text-lg text-gray-500' htmlFor='Tanggal'>
              Pilih Tanggal
            </label>
            <input
              className='mt-0  block bg-transparent w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-700'
              type='date'
              name='Tanggal'
              id='Tanggal'
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='text-lg text-gray-500' htmlFor='Uang'>
              Masukan Nominal (Rp.)
            </label>
            <input
              className='mt-0 text-lg font-bold block bg-transparent w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-700'
              type='number'
              name='Uang'
              id='Uang'
              onChange={(e) => setNominal(e.target.valueAsNumber)}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='text-lg text-gray-500' htmlFor='Nominal'>
              Keterangan
            </label>
            <textarea
              className='mt-0 block text-lg font-semibold w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-700'
              rows='3'
              required
              onChange={(e) => {
                setDescription(e.target.value)
                e.target.value === '' || null
                  ? setIsDisabled(true)
                  : setIsDisabled(false)
              }}
            ></textarea>
          </div>
          <div className='w-full'>
            <button
              className='w-full px-2 py-3 bg-blue-700 text-lg text-white font-bold disabled:opacity-50'
              type='submit'
              disabled={isDisabled}
            >
              SIMPAN
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddIncome
