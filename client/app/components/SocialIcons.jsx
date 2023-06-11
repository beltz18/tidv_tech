import React from 'react'
import {
  FiGithub,
  FiYoutube,
  FiLinkedin,
  FiTwitter
} from 'react-icons/fi'
import Link from 'next/link'

const SocialIcons = () => {
  const icons = [
    { name: 'GitHub',   icon: <FiGithub />,   link: 'https://github.com/beltz18'                          },
    { name: 'YouTube',  icon: <FiYoutube />,  link: 'https://youtube.com/@AndiDev18'                      },
    { name: 'LinkedIn', icon: <FiLinkedin />, link: 'https://www.linkedin.com/in/andi-montilla-602b57246' },
    { name: 'Twitter',  icon: <FiTwitter />,  link: 'https://twitter.com/BeltzAnh'                        },
  ]

  return (
    <div className='social-icons'>
      <ul className='social-icons-list'>
        {
          icons.map(({name,icon,link}) => (
            <li key={name} title={name} className='social-icons-list-item'>
              <Link
                href={link}
                className='social-icons-list-item-link'
                target='_blank'
              >
                {icon}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SocialIcons