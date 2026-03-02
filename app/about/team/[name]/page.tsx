import React from 'react'

const Teamdetails = async ({params})  => {
  const name = (await params).name;
  return (
    <div className='text-white text-5xl' >Team detail page {name} .</div>
  )
};

export default Teamdetails
