import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginScreen = ({ history }) => {
  const [isPeak, setIsPeak] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log('User Form: ', `${email} , ${password}`)
    history.push('/')
  }

  return (
    <div style={{ height: '85vh' }} className='h-full w-full'>
      <div className='container'>
        <div className='p-2 '>
          <Link className=' p-2 rounded-md text-blue-700 text-base' to='/'>
            <span>
              <i className='fa fa-arrow-left'></i> Kembali
            </span>
          </Link>
        </div>
        <div className='relative items-center align-middle justify-center mt-10  w-full'>
          <div className='bg-blue-700 mx-auto p=7 rounded-full w-14 h-14 flex justify-center align-middle items-center'>
            <img
              className='object-contain h-12 p-2 fill-current '
              src='assets/icons/wallet.svg'
              alt='wallet'
            />
          </div>

          <h2 className=' text-blue-700 text-center font-bold text-lg'>
            Dompet Infaq
          </h2>
        </div>
        <div className='w-full mt-4 container-sm  p-2 px-5 '>
          <form
            onSubmit={HandleSubmit}
            className='w-full mx-auto p-3 bg-white shadow-md pb-7 '
          >
            <h2 className='text-center font-bold text-2xl mb-8'>Login</h2>
            <div className='px-6'>
              <label className='text-gray-500 text-sm' htmlFor='emailAddress'>
                Alamat Email
              </label>
              <input
                className='block w-full  px-1 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-700'
                type='email'
                name='emailAddress'
                id='emailAddress'
                autoComplete='email'
                placeholder='pengguna@example.com'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='px-6 mt-10'>
              <label className='text-gray-500 text-sm' htmlFor='emailAddress'>
                Password
              </label>
              <span className='flex align-middle items-center border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-700'>
                <input
                  className='block w-full px-1 border-0  focus:ring-0 border-b-2 border-gray-200 focus:border-blue-700 '
                  type={isPeak ? 'text' : 'password'}
                  name='password'
                  id='password'
                  placeholder='Masukan Kata Sandi'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
                <span>
                  <i
                    onClick={() => {
                      if (isPeak === false) {
                        setIsPeak(true)
                      } else {
                        setIsPeak(false)
                      }
                    }}
                    className={
                      isPeak
                        ? 'fa fa-eye-slash p-2 text-gray-500'
                        : 'fa fa-eye p-2 text-gray-500'
                    }
                  ></i>
                </span>
              </span>
            </div>
            <div className='w-full flex justify-center rounded-md items-center align-middle mt-10 px-6'>
              <button
                className='w-full rounded-md  py-2 bg-blue-700 text-white'
                type='submit'
              >
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
