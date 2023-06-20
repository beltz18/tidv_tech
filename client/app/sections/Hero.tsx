import React      from 'react'
import Button     from '@c/Button'
import Link       from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-one">
        <motion.h1
          className='hero-title'
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .3,
            ease: "easeInOut",
            delay: .6,
          }}
        >
          Hi, my name is
        </motion.h1>
        <motion.h2
          className="hero-title-large"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .3,
            ease: "easeInOut",
            delay: .75,
          }}
        >
          Andi Montilla
        </motion.h2>
        <motion.h3
          className="hero-title-large hero-title-sub"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .3,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          [ Full Stack Developer ]
        </motion.h3>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .3,
            ease: "easeInOut",
            delay: 1.25,
          }}
        >
          +4 years experience as a Full Stack Developer with strong
          understanding of both front-end and back-end development.
          Proven ability to develop and deliver high-quality web
          applications using a variety of technologies. I&apos;ve collaborated
          with multidisciplinary teams and led small teams (5 - 10 developers).
          Excellent problem-solving and debugging skills.
        </motion.p>
        <motion.div
          className="hero-button"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .3,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <Button
            text='Visit my YouTube Channel'
            link='https://youtube.com/@AndiDev18'
          />
        </motion.div>
      </div>
      <motion.div
        className="hero-two"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: .3,
          ease: "anticipate",
          delay: .3,
        }}
      >
        <Link href="https://youtube.com/@AndiDev18" target='_blank'>
          <img src="/andi-dev-logo.png" alt="logo Andi Dev" className='hero-logo logo' />
          <img src="/andi-dev-logo.png" alt="logo Andi Dev" className='hero-logo2 logo' />
        </Link>
      </motion.div>
    </div>
  )
}

export default Hero