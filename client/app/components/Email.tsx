import React      from 'react'
import Link       from 'next/link'
import { motion } from 'framer-motion'

const Email = ({ email }) => {
  return (
    <motion.div
      className='email'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: .3,
        ease: "linear",
        delay: 2,
      }}
    >
      <Link href={`mailto:${email}`} className='email-link' title='Send me an Email!'>
        {email}
      </Link>
    </motion.div>
  )
}

export default Email