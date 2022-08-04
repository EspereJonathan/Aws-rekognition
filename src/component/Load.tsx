import React from 'react'
import './Loading.css'

export default function () {
  return (
    <>
      <div className='loadingContainer'>
        <div className='image'>
            <span className='label'>Loading </span>
        </div>
        <div className='information'>
            <span className='label  '>Loading </span>
        </div>
      </div>
    </>
  )
}
