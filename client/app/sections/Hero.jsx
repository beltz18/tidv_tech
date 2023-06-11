import React  from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
    <div className='hero'>
      <h1 className='hero-title'>Hi, my name is</h1>
      <h2 className="hero-title-large">Andi Montilla</h2>
      <h3 className="hero-title-large hero-title-sub">[ Full Stack Developer ]</h3>
      <p className="hero-text">
        +4 years experience as a Full Stack Developer with strong
        understanding of both front-end and back-end development.
        Proven ability to develop and deliver high-quality web
        applications using a variety of technologies. I've collaborated
        with multidisciplinary teams and led small teams (5 - 10 developers).
        Excellent problem-solving and debugging skills.
      </p>
      <div className="hero-button">
        <Button
          text='Visit my YouTube Channel'
          link='https://youtube.com/@AndiDev18'
        />
      </div>
    </div>
  )
}

export default Hero