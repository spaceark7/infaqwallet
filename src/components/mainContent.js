import { toInteger } from 'lodash'
import React, { useEffect, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import NumberFormat from 'react-number-format'
import data from '../data'
import CardHistory from './CardHistory'

const MainContent = () => {
  const [saldo, setSaldo] = useState(0)
  const [income, setIncome] = useState(0)
  const [outcome, setOutcome] = useState(0)

  useEffect(() => {
    const count = () => {
      let credit = 0
      let income = 0
      let outcome = 0
      data.map((transaksi) => {
        if (transaksi.jenis === 'pemasukan') {
          income += transaksi.nominal
          setIncome(income)
        }
        if (transaksi.jenis === 'pengeluaran') {
          outcome += transaksi.nominal
          setOutcome(outcome)
        }
        credit = income - outcome
        return credit
      })

      return credit
    }

    setSaldo(count())
  }, [saldo, income, outcome])

  const dataMock = [
    {
      color: '#01937C',
      title: `${data[0].jenis}`,
      value: toInteger(`${(saldo / income) * 100}`),
    },
    {
      color: '#DA0037',
      title: 'Pengeluaran',
      value: toInteger(`${(outcome / income) * 100}`),
    },
  ]

  return (
    <>
      <div className='container relative bg-blue-700 h-auto mx-auto rounded-b-3xl rad py-2 pb-20 '>
        <div className='ml-4 py-1'>
          <p className='text-sm text-white'>Halo, Selamat datang</p>
          <h2 className='font-bold text-2xl text-white'>Dompet Infaq</h2>
        </div>
        <div className='mt-8 '>
          <h2 className='text-center text-lg font-medium mt-4 text-white'>
            Total Saldo
          </h2>
          <h1 className='text-white text-5xl font-bold text-center flex-none'>
            <NumberFormat
              value={saldo}
              displayType={'text'}
              thousandSeparator
              prefix={'Rp. '}
            />
          </h1>
        </div>
      </div>
      <div className='mt-4 mx-auto left-auto w-full w-8/12 h-8 grid grid-cols-2'>
        <div className='mx-auto'>
          <span className='bg-pieIncome h-3 w-3 rounded-full inline-block'></span>
          <span className='inline-block px-2'>
            <p className='text-black'>Pemasukan</p>
          </span>
        </div>
        <div className='mx-auto'>
          <span className='bg-pieOutcome h-3 w-3 rounded-full inline-block'></span>
          <span className='inline-block px-2'>
            <p className='text-black'>Pengeluaran</p>
          </span>
        </div>
      </div>
      <div className='h-1/2 w-full flex align-middle items-center justify-center overflow-visible px-6'>
        <PieChart
          className='w-full'
          rounded
          lineWidth={30}
          data={dataMock}
          radius={28}
          animate
          animationEasing='ease-in'
          animationDuration={2000}
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
          labelStyle={(index) => ({
            fontSize: '7px',
            fontWeight: 'bold',
            fill: dataMock[index].color,
          })}
          labelPosition={110}
        />
      </div>
      <div className='container h-auto w-full mx-auto px-4 pb-10'>
        <h1 className=' text-gray-700  text-xl text-center'>
          Riwayat Transaksi
        </h1>
        <div className='overflow-scroll h-1/2'>
          {data.map((trans) => {
            return <CardHistory key={trans.id} transaction={trans} />
          })}
        </div>
      </div>

      <div className='w-full h-auto bg-blue-700 pb-8'>
        <div className='container p-5'>
          <h1 className='text-center text-2xl text-white font-bold tracking-wider'>
            Yuk! Berdonasi
          </h1>
          <div className='mx-auto flex justify-center p-2'>
            <img
              className='w-1/2 h-1/2 text-center'
              src='/assets/icons/donation.svg'
              alt='donation'
            />
          </div>
          <p className='text-white text-xs text-center'>
            Bersama kita dukung acara kajian ini agar lebih nyaman dan
            terakomodasi.
          </p>

          <div className='grid grid-cols-2 mt-5 bg-pieIncome rounded p-2 shadow-md '>
            <div className='flex justify-center align-middle items-center'>
              <h2 className='text-center text-white text-lg font-bold'>
                Andry Muldani
              </h2>
            </div>
            <div className=''>
              <h2 className='flex-nowrap text-center text-white font-semibold'>
                Bank BCA
              </h2>
              <h2 className='text-center text-white font-semibold'>
                1973 xxxx xxx
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContent
