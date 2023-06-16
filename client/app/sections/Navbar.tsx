import React  from 'react'
import Link   from 'next/link'
import Logo   from '@c/Logo'
import Button from '@c/Button'

const Navbar = ({ link }) => {
  const sectionLinks = [
    { name: 'About',      link: '#about'      },
    { name: 'Experience', link: '#experience' },
    { name: 'Work',       link: '#work'       },
    { name: 'Contact',    link: '#contact'    },
  ]

  return (
    <nav>
      <div className="wrapper">
        <div className="brand">
          <Link href={link} target='_blank'>
            <Logo i={2} />
          </Link>
        </div>
        <div className="nav-items">
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