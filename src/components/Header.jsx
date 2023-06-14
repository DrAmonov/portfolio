import React from 'react'

function Header() {
  return (
    <div className='bg-black py-3 px-10 flex justify-end'>
      <select className='border-none bg-black border-black text-white' name="" id="">
        <option value="eng">Eng</option>
        <option value="uz">Uz</option>
      </select>
    </div>
  )
}

export default Header