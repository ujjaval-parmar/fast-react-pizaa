import React from 'react'

const Loader = () => {
  return (
    <div className='absolute inset-0 z-10 bg-slate-400/30  backdrop-blur-[2px] flex justify-center items-center'>
      <div className='loader'></div>
    </div>
  )
}

export default Loader