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
    { name: 'GitHub',   icon: <FiGithub />,   link: 'https://github.com/beltz18'                         , title: 'Visit my repositories!'           },
    { name: 'YouTube',  icon: <FiYoutube />,  link: 'https://youtube.com/@AndiDev18'                     , title: 'Check out my courses on YouTube!' },
    { name: 'LinkedIn', icon: <FiLinkedin />, link: 'https://www.linkedin.com/in/andi-montilla-602b57246', title: 'Wanna see my experience?!'        },
    { name: 'Twitter',  icon: <FiTwitter />,  link: 'https://twitter.com/BeltzAnh'                       , title: 'Tweet me a greet!'                },
  ]

  return (
    <div className='social-icons'>
      <ul className='social-icons-list'>
        {
          icons.map(({name,icon,link,title}) => (
            <li key={name} title={name} className='social-icons-list-item'>
              <Link
                href={link}
                title={title}
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