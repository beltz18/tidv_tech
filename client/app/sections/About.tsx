import React      from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const technologies = [
    { name: 'Reactjs',    icon: <i className='bx bxl-react'></i> },
    { name: 'Nodejs',     icon: <i className='bx bxl-nodejs'></i> },
    { name: 'JavaScript', icon: <i className='bx bxl-javascript'></i> },
    { name: 'TypeScript', icon: <i className='bx bxl-typescript'></i> },
    { name: 'Flask',      icon: <i className='bx bxl-flask'></i> },
    { name: 'Django',     icon: <i className='bx bxl-django'></i> },
    { name: 'Python',     icon: <i className='bx bxl-python'></i> },
    { name: 'HTML',       icon: <i className='bx bxl-html5'></i> },
    { name: 'CSS',        icon: <i className='bx bxl-css3'></i> },
    { name: 'Sass',       icon: <i className='bx bxl-sass'></i> },
    { name: 'SQL',        icon: <i className='bx bxl-postgresql'></i> },
    { name: 'MongoDB',    icon: <i className='bx bxl-mongodb'></i> },
    { name: 'Git/GitHub', icon: <i className='bx bxl-github'></i> },
    { name: 'Docker',     icon: <i className='bx bxl-docker'></i> },
  ]

  return (
    <motion.div
      className='about'
      id='about'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Let me introduce myself: My name is Andi Montilla, a Full Stack
            developer with +4 years of experience, it&apos;s a pleasure for me to
            offer you my skills. I have worked on various applications and
            projects over the past few years, I&apos;m proud to say that my
            experience is extensive in web and mobile development.
          </p>
          <p className="about-grid-info-text">
            Very passionate about the creative process of app development and enjoy
            working in a team to deliver high-quality projects. I have advanced skills
            in programming languages such as Python and JavaScript, as well as extensive
            experience in relational and non-relational databases, additionally user
            interface development kits. Also, familiar with version control tools like
            Git and Bitbucket.
          </p>
          <p className="about-grid-info-text">
            I have worked on projects of variable size, from small applications to much
            larger projects, collaborating and leading small and multidisciplinary teams,
            Demonstrating analytical skills that allow me to understand and solve complex
            problems using technology effectively.
          </p>
          <p className="about-grid-info-text">
            Very confident that I can bring my skills, knowledge, and passion for technology
            to you. If you are interested in my profile, I&apos;d be happy to provide more
            information about my skills and previous work. Get in touch with me via email
            or Twitter.
          </p>
          <p className="about-grid-info-text">
            Some technologies I have worked in:  
          </p>
          <motion.ul
            className="about-grid-info-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            variants={{
              visible: { opacity: 1, y: -2 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            {
              technologies.map(({name,icon}) => (
                <li className='about-grid-info-list-item' key={name}>
                  {icon}
                  &nbsp;
                  {name}
                </li>
              ))
            }
          </motion.ul>
        </div>
        <motion.div
          className="about-grid-photo"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          variants={{
            visible: { opacity: 1, y: -2 },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <div className="about-grid-photo-container">
            <img src="/AndiDev.png" alt='profile' />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About