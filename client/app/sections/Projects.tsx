import React      from 'react'
import Link       from 'next/link'
import Image      from 'next/image'
import { motion } from "framer-motion"
import {
  FiGithub,
  FiExternalLink,
} from 'react-icons/fi'

const Projects = () => {
  const projectsData = [
    {
      image: '/assets/projects/vaper_house.png',
      name: 'Vaper House',
      link: 'https://vaper-house.onrender.com/',
      description: 'Website for the company Vaper House, where you can consult the product catalog, buy, register, access the cart and administrative operations in terms of sales, user administration and products.',
      tech: [
        'Python',
        'Flask',
        'JavaScript',
        'Nodejs',
        'Expressjs',
        'MySQL',
        'MongoDB',
      ],
      github: 'https://github.com/TIDV-Tech/vaper_house'
    },
    {
      image: '/assets/projects/nasa_clone.png',
      name: 'Nasa Clone',
      link: 'https://nasa-clone.onrender.com/',
      description: 'Project to improve file rendering skills and template creation in Nodejs by creating a clone of the official NASA website.',
      tech: [
        'JavaScript',
        'Nodejs',
        'EJS',
        'MongoDB',
      ],
      github: 'https://github.com/beltz18/nasa_clone'
    },
    {
      image: '/assets/projects/sharenv_withFriends.png',
      name: 'Sharenv',
      link: 'https://github.com/beltz18/sharenv_withFriends',
      description: 'The most practical and simple way to share your environment variable files with your coworkers at any time you want, you just have to add your coworker to your workspace and he will have permanent access to all the changes you have managed to your env file.',
      tech: [
        'Python',
      ],
      github: 'https://github.com/beltz18/sharenv_withFriends'
    },
  ]

  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            description,
            link,
            github,
            name,
            tech,
          }) => {
            return (
              <motion.div
                className="project"
                key={name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} alt={name} fill quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{name}</h3>
                  <div className="project-info-description">
                    <p>{description}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {tech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item" key={1}>
                      <Link
                        href={github}
                        className="project-info-links-item-link"
                        target='_blank'
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item" key={2}>
                      <Link
                        href={link}
                        className="project-info-links-item-link"
                        target='_blank'
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Projects