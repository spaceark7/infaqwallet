import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ destination }) => {
  return (
    <Link
      className='bg-transparent-400 px-2 p-2 text-blue-700 '
      to={destination}
    >
      <span className='text-xl font-medium'>
        <i className='fa fa-arrow-left mr-2'></i> Kembali
      </span>
    </Link>
  )
}

export default BackButton
