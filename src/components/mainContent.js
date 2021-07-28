import { toInteger } from 'lodash'
import React, { useEffect, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import NumberFormat from 'react-number-format'
import data from '../data'
import CardHistory from './CardHistory'
import axios from 'axios'

const MainContent = () => {
  const [saldo, setSaldo] = useState(0)
  const [income, setIncome] = useState(0)
  const [outcome, setOutcome] = useState(0)
  const [datum, setDatum] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/rincian')
      setDatum(data)
      countData(data)
    }
    const countData = (datum) => {
      let credit = 0
      let income = 0
      let outcome = 0
      datum.map((transactions) => {
        console.log('transaksi banyak: ', transactions)
        transactions.rincian.map((transaction) => {
          console.log('transaksi: ', transaction)
          if (transaction.jenis === 'pemasukan') {
            income += transaction.nominal
            setIncome(income)
          } else {
            outcome += transaction.nominal
            setOutcome(outcome)
          }
          credit = income - outcome
          setSaldo(credit)
          return credit
        })

        return credit
      })
    }

    fetchData()

    // const count = () => {
    //   let credit = 0
    //   let income = 0
    //   let outcome = 0
    //   data.map((transaksi) => {

    //     if (transaksi.rincianjenis === 'pemasukan') {
    //       income += transaksi.nominal
    //       setIncome(income)
    //     }
    //     if (transaksi.jenis === 'pengeluaran') {
    //       outcome += transaksi.nominal
    //       setOutcome(outcome)
    //     }
    //     credit = income - outcome
    //     return credit
    //   })

    //   return credit
    // }
  }, [])

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
      <div className='hidden lg:block h-full '>
        <div className=' w-full xl:bg-blue-800'>
          <div className='md:content xl:container xl:mx-auto'>
            <div className='grid grid-rows-2 grid-flow-col-dense  bg-blue-800  px-8'>
              <div className='ml-10 py-8 row-start-1 col-span-2 flex justify-start align-center items-center flex-nowrap'>
                <div className=''>
                  <p className='text-2xl text-white text-opacity-70 xl:text-4xl'>
                    Halo, Selamat datang
                  </p>
                  <h2 className='font-bold text-4xl text-white text-opacity-70 xl:text-6xl'>
                    Dompet Infaq
                  </h2>
                  <p className='text-white text-opacity-70 mt-3 w-3/4 xl:text-lg'>
                    Menyediakan informasi keuangan secara transparan dan
                    terperinci dari setiap kegiatan Kajian.
                  </p>
                </div>
              </div>

              <div className='  h-full w-full row-span-2 col-start-3 my-auto md:mr-10   py-8    pl-0 '>
                <PieChart
                  className='h-2/3 w-full mt-10'
                  rounded
                  totalValue={100}
                  lineWidth={30}
                  data={[dataMock[0]]}
                  animate
                  animationEasing='ease-in'
                  animationDuration={2000}
                  label={({ dataEntry }) =>
                    `${Math.round(dataEntry.percentage)} %`
                  }
                  labelStyle={(index) => ({
                    fontSize: '18px',
                    fontWeight: 'bold',
                    fill: dataMock[index].color,
                  })}
                  labelPosition={0}
                />
                <div className=' text-white  md:text-base xl:text-2xl mt-10 left-auto w-full  h-8 grid grid-cols-2'>
                  <div className='mx-auto'>
                    <span className='bg-pieIncome h-3 w-3 rounded-full inline-block '></span>
                    <span className='inline-block px-2'>
                      <p className='text-white  '>Pemasukan</p>
                    </span>
                  </div>
                  <div className='mx-auto'>
                    <span className='bg-pieOutcome h-3 w-3 rounded-full inline-block'></span>
                    <span className='inline-block px-2'>
                      <p className='text-white'>Pengeluaran</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className=' ml-10 row-start-2 col-start-1 col-span-2 '>
                <h2 className='text-lg font-medium lg:text-2xl  text-white'>
                  Total Saldo
                </h2>
                <h1 className='text-white text-5xl md:text-7xl xl:text-8xl font-bold  flex-none'>
                  <NumberFormat
                    value={saldo}
                    displayType={'text'}
                    thousandSeparator
                    prefix={'Rp. '}
                  />
                </h1>
              </div>
            </div>

            <div className='pb-32 xl:bg-gray-200'>
              <div className=' h-auto lg:min-h-full w-full px-4 pb-10'>
                <h1 className=' text-gray-700  text-2xl lg:text-4xl py-4 font-semibold mt-10 text-center'>
                  Riwayat Transaksi
                </h1>
                <div className=' w-full flex flex-wrap items-start justify-evenly'>
                  {data.map((trans) => {
                    return (
                      <div key={trans.id} className='w-2/4 px-4'>
                        <CardHistory transaction={trans} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className='w-full h-auto bg-blue-700 pb-8'>
              <div className='container p-5 mx-auto'>
                <h1 className='text-center text-2xl lg:text-5xl text-white font-bold tracking-wider'>
                  Yuk! Berdonasi
                </h1>

                <div className='relative flex mt-8 h-full w-full items-center'>
                  <div className='mx-auto flex justify-center p-2 h-full w-full'>
                    <img
                      className='w-1/2 h-1/2 text-center'
                      src='/assets/icons/donation.svg'
                      alt='donation'
                    />
                  </div>
                  <div className='relative w-full h-full px-7 '>
                    <p className='text-white  text-2xl'>
                      Bersama kita dukung acara kajian ini agar lebih nyaman dan
                      terakomodasi.
                    </p>
                    <div className='grid grid-cols-2 mt-5 bg-pieIncome rounded p-2 shadow-md '>
                      <div className='flex justify-center align-middle items-center'>
                        <h2 className='text-center text-white text-2xl font-bold'>
                          Andry Muldani
                        </h2>
                      </div>
                      <div className=''>
                        <h2 className='flex-nowrap text-center text-white text-xl font-semibold'>
                          Bank BCA
                        </h2>
                        <h2 className='text-center text-white font-semibold text-xl'>
                          1973 xxxx xxx
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small View */}
      <div className='lg:hidden'>
        <div className='container bg-blue-700 h-auto mx-auto rounded-b-3xl rad py-2 pb-20 mb-4 '>
          <div className='ml-4 py-1'>
            <p className='text-sm text-white'>Halo, Selamat datang</p>
            <h2 className='font-bold text-2xl text-white'>Dompet Infaq</h2>
          </div>
          <div className='mt-8 '>
            <h2 className='text-center text-lg font-medium mt-4 text-white'>
              Total Saldo
            </h2>
            <h1 className='text-white text-5xl md:text-7xl font-bold text-center flex-none'>
              <NumberFormat
                value={saldo}
                displayType={'text'}
                thousandSeparator
                prefix={'Rp. '}
              />
            </h1>
          </div>
        </div>
        <div className='mt-4 mx-auto md:text-3xl  left-auto w-full w-8/12 h-8 grid grid-cols-2'>
          <div className='mx-auto'>
            <span className='bg-pieIncome h-3 w-3 rounded-full inline-block '></span>
            <span className='inline-block px-2'>
              <p className='text-black  '>Pemasukan</p>
            </span>
          </div>
          <div className='mx-auto'>
            <span className='bg-pieOutcome h-3 w-3 rounded-full inline-block'></span>
            <span className='inline-block px-2'>
              <p className='text-black'>Pengeluaran</p>
            </span>
          </div>
        </div>
        <div className='h-1/2 w-full  flex align-middle items-center justify-center overflow-visible px-6'>
          <PieChart
            className='w-full md:mx-auto md:w-2/3 '
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
          <h1 className=' text-gray-700  text-xl lg:text-4xl text-center'>
            Riwayat Transaksi
          </h1>
          <div className='overflow-scroll h-1/2'>
            {data.map((trans) => {
              return <CardHistory key={trans.id} transaction={trans} />
            })}
          </div>
        </div>

        <div className='w-full h-auto bg-blue-700 pb-8'>
          <div className='container p-5 mx-auto'>
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
      </div>
    </>
  )
}

export default MainContent
