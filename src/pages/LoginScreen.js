import React, { useState } from 'react'

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
    <>
      <div className='hidden lg:block h-auto w-full'>
        <div className='bg-blue-700 h-full lg:flex lg:justify-center lg:align-middle lg:items-center'>
          <div className='container flex items-center mx-auto w-full h-full'>
            <div className='w-full  md:flex justify-center md:px-10 items-center container-sm md:container  h-full md:h-4/6 rounded-t-xl py-6   '>
              <div className='hidden lg:w-4/6 w-full h-full lg:flex flex-wrap px-10 py-10 justify-center align-middle items-center'>
                <h2 className='text-white text-2xl font-bold leading-tight tracking-tight lg:mb-8 lg:text-3xl lg:tracking-normal xl:text-4xl'>
                  Sekarang semakin mudah untuk input, edit dan unggah data!
                </h2>
                <img
                  className='w-full h-full object-contain'
                  src='\assets\asset_login.png'
                  alt='login vector'
                />
              </div>

              <div className='w-2/6 h-full flex align-middle items-center   '>
                <form
                  onSubmit={HandleSubmit}
                  className='relative w-full  h-4/6 md:h-full  p-3  md:mx-auto md:shadow-xl md:rounded-xl  bg-white shadow-md pb-7 rounded-t-xl '
                >
                  <h2 className='text-center font-bold text-2xl xl:text-4xl mb-8'>
                    Login
                  </h2>
                  <div className='px-6'>
                    <label
                      className='text-gray-500 text-sm xl:text-base'
                      htmlFor='emailAddress'
                    >
                      Alamat Email
                    </label>
                    <input
                      className='block w-full text-lg bg-gray-200 rounded-full  px-3 border-0  border-gray-200 focus:ring-0  focus:border-blue-700'
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
                    <label
                      className='text-gray-500 text-sm xl:text-base'
                      htmlFor='emailAddress'
                    >
                      Password
                    </label>
                    <span className='flex rounded-full  px-3 border-[0.5] bg-gray-200 align-middle items-center border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-700'>
                      <input
                        className='block w-full  text-lg px-1 border-0 bg-gray-200 focus:ring-0 border-0 border-gray-200 focus:ring-0 focus:border-blue-700 '
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
                      className='w-full rounded-full  lg:text-2xl lg:font-bold  py-2 bg-blue-700 text-white'
                      type='submit'
                    >
                      Masuk
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Small Screen */}
      <div
        style={{ height: '90vh' }}
        className=' w-full py-6 bg-blue-700 lg:hidden'
      >
        <div className=' container h-full mx-auto '>
          <div className=' items-center align-middle justify-center w-full mb-3'>
            <div className='bg-blue-700 mx-auto  p=7 rounded-full w-14 h-14 flex justify-center align-middle items-center'>
              <img
                className='object-contain h-12 p-2 fill-current '
                src='assets/icons/wallet.svg'
                alt='wallet'
              />
            </div>

            <h2 className=' text-white text-center font-bold text-2xl'>
              Dompet Infaq
            </h2>
          </div>
          <div className='w-full  md:flex md:px-10  mt-4 container-sm  h-full md:h-4/6 rounded-t-xl py-6   '>
            <div className='hidden w-full h-full md:flex flex-wrap px-10 py-10 justify-center align-middle items-center'>
              <h2 className='text-white text-2xl font-bold leading-tight tracking-tight'>
                Sekarang semakin mudah untuk input, edit dan unggah data!
              </h2>
              <img
                className='w-full h-full object-contain'
                src='\assets\asset_login.png'
                alt='login vector'
              />
            </div>
            <form
              onSubmit={HandleSubmit}
              className='w-full h-full md:h-auto flex-auto p-3  md:mx-auto md:shadow-xl md:rounded-xl bg-white shadow-md pb-7 rounded-t-xl '
            >
              <h2 className='text-center font-bold text-2xl mb-8'>Login</h2>
              <div className='px-6'>
                <label className='text-gray-500 text-sm' htmlFor='emailAddress'>
                  Alamat Email
                </label>
                <input
                  className='block w-full bg-gray-200 rounded-full  px-3 border-0  border-gray-200 focus:ring-0  focus:border-blue-700'
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
                <span className='flex rounded-full  px-3 border-[0.5] bg-gray-200 align-middle items-center border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-700'>
                  <input
                    className='block w-full px-1 border-0 bg-gray-200 focus:ring-0 border-2 border-gray-200 focus:border-blue-700 '
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
                  className='w-full rounded-full  py-2 bg-blue-700 text-white'
                  type='submit'
                >
                  Masuk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginScreen
