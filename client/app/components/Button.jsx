import React from 'react'
import Link  from 'next/link'

const Button = ({ text, link }) => {
  return (
    <Link href={link} className='btn' target='_blank'>{text}</Link>
  )
}

export default Button