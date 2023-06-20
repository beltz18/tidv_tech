import React      from 'react'
import Link       from 'next/link'
import { motion } from 'framer-motion'
import Logo       from '@c/Logo'
import Button     from '@c/Button'
import {
  GiHamburgerMenu
} from 'react-icons/gi'
import {
  CgClose
} from 'react-icons/cg'

const Navbar = ({ link }) => {
  const sectionLinks = [
    { name: 'About',      link: '#about'      },
    { name: 'Experience', link: '#experience' },
    { name: 'Work',       link: '#work'       },
    { name: 'Contact',    link: '#contact'    },
  ]

  const [navbarVisible, setNavbarVisible]       = React.useState(false)
  const [responsiveNavbar, setResponsiveNavbar] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('scroll', () => window.pageYOffset > 100 ? setNavbarVisible(true) : setNavbarVisible(false))
  }, [])

  React.useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link")
    links.forEach((link) => { link.addEventListener("click", () => setResponsiveNavbar(false)) })
    const nav = document.querySelector(".nav-items")
    nav?.addEventListener("click", (e) => { e.stopPropagation() })
    const html = document.querySelector("html")
    html?.addEventListener("click", (e) => { setResponsiveNavbar(false) })
  }, [])

  React.useEffect(() => {
    const main = document.querySelector("main")
    responsiveNavbar ? main?.classList.add("blur") : main?.classList.remove("blur")
  }, [responsiveNavbar])

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        <motion.div
          className="brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: .3,
            ease: "circInOut"
          }}
        >
          <Link href={link} target='_blank'>
            <Logo i={2} />
          </Link>
        </motion.div>
        <motion.div
          className="nav-responsive-toggle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: .3,
            ease: "circInOut"
          }}
        >
          {
            responsiveNavbar ? (
              <CgClose
                onClick={(e) => {
                  e.stopPropagation();
                  setResponsiveNavbar(false)
                }}
              />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setResponsiveNavbar(true)
                }}
              />
            )
          }
        </motion.div>
        <div className={`${responsiveNavbar && "nav-responsive"} nav-items`}>
          <ul className="nav-items-list">
            <li key='Home' className='nav-items-list-home'>
              <Link href='/'>Home</Link>
            </li>
            {
              sectionLinks.map(({name, link}, index) => (
                <motion.li
                  key={name}
                  className='nav-items-list-item'
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0   }}
                  transition={{
                    duration: .3,
                    ease: 'easeInOut',
                    delay: .3 + index * .1,
                  }}
                >
                  <Link href={link} className='nav-items-list-item-link'>{name}</Link>
                </motion.li>
              ))
            }
          </ul>
          <motion.div
            className="nav-items-button"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0   }}
            transition={{
              duration: .3,
              ease: 'easeInOut',
              delay: .6,
            }}
          >
            <Button text='Resume' link='/assets/resume/resume_andi_en.pdf' />
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar