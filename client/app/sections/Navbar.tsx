import React  from 'react'
import Link   from 'next/link'
import Logo   from '@c/Logo'
import Button from '@c/Button'
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
        <div className="brand">
          <Link href={link} target='_blank'>
            <Logo i={2} />
          </Link>
        </div>
        <div className="nav-responsive-toggle">
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
        </div>
        <div className={`${responsiveNavbar && "nav-responsive"} nav-items`}>
          <ul className="nav-items-list">
            <li key='Home' className='nav-items-list-home'>
              <Link href='/'>Home</Link>
            </li>
            {
              sectionLinks.map(({name, link}) => (
                <li key={name} className='nav-items-list-item'>
                  <Link href={link} className='nav-items-list-item-link'>{name}</Link>
                </li>
              ))
            }
          </ul>
          <div className="nav-items-button">
            <Button text='Resume' link='/assets/resume/resume_andi_en.pdf' />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar