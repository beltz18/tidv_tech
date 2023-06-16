import React from 'react'
import Link  from 'next/link'

const Email = ({ email }) => {
  return (
    <div className='email'>
      <Link href={`mailto:${email}`} className='email-link' title='Send me an Email!'>
        {email}
      </Link>
    </div>
  )
}

export default Email