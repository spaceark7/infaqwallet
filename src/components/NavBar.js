import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  useEffect(() => {
    const toggle = document.querySelector('.mob-menu')
    const menuBlock = document.querySelector('.menu-block')
    const menuItems = document.querySelectorAll('.menu-item')

    Array.from(menuItems, (menu) => {
      menu.addEventListener('click', function () {
        menuBlock.style.transform = 'translateX(100%)'
        setIsOpen(false)
      })
      return ''
    })

    toggle.addEventListener('click', function () {
      if (isOpen === false) {
        menuBlock.style.transform = 'translateX(0)'
        setIsOpen(true)
      } else {
        menuBlock.style.transform = 'translateX(100%)'
        setIsOpen(false)
      }
    })
  }, [isOpen])

  return (
    <>
      <header className='sticky top-0 w-full bg-blue-700 h-16 z-10 '>
        <div className='container mx-auto flex h-full'>
          <div className='relative items-center align-middle mr-auto ml-3.5 flex'>
            <img
              className='object-contain h-7 mr-2 fill-current text-white '
              src='assets/icons/wallet.svg'
              alt='wallet'
            />
            <h2 className=' text-white items-center align-middle'>
              Dompet Infaq
            </h2>
          </div>
          <div className='mob-menu ml-auto p-8  flex items-center align-middle'>
            <i className='menu-bar fa fa-bars text-white text-xl'></i>
          </div>
        </div>
      </header>
      <div className='fixed menu-block transform translate-x-full transition  ease-out duration-500  h-full w-full bg-blue-700 z-20 '>
        <div className='container grid grid-flow-row space-y-1 h-3/6 w-full p-10 flex justify-center align-middle items-center my-auto'>
          <Link
            className='text-white font-bold text-xl text-center w-full w-11/12 block menu-item'
            to='/'
          >
            <div className='w-full max-w-xl min-w-full'>Home</div>
          </Link>

          {isLogin && (
            <Link
              to='/dashboard'
              className='text-white font-bold text-xl text-center menu-item'
            >
              Dashboard
            </Link>
          )}
          {isLogin ? (
            <Link
              to='/'
              className='text-white font-bold text-xl text-center menu-item'
            >
              Logout
            </Link>
          ) : (
            <Link
              to='/login'
              className='text-white font-bold text-xl text-center menu-item'
            >
              Login
            </Link>
          )}
          <Link
            to='/tentang'
            className='text-white font-bold text-xl text-center menu-item'
          >
            Tentang
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavBar
