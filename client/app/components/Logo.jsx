import React from 'react'
import Image from 'next/image'

const Logo = ({ i }) => {
  const logos = ['/light.png', '/dark.png', '/andi-dev.png']
  return (
    <>
      <Image
        src={logos[i]}
        className='logo'
        alt='Logo'
        width='80'
        height='80'
      />
    </>
  )
}

export default Logo