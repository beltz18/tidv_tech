import React       from 'react'
import Navbar      from '@p/Navbar'
import Hero        from '@p/Hero'
import About       from '@p/About'
import SocialIcons from '@c/SocialIcons'
import Email       from '@c/Email'

const Andi = () => {
  return (
    <div className='app'>
      <Navbar link="https://youtube.com/@AndiDev18" />
      <SocialIcons />
      <Email email="anmdev32@gmail.com" />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default Andi