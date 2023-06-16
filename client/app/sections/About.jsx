import React from 'react'

const About = () => {
  const technologies = [
    { name: 'Reactjs',    icon: <i class='bx bxl-react'></i> },
    { name: 'Nodejs',     icon: <i class='bx bxl-nodejs'></i> },
    { name: 'JavaScript', icon: <i class='bx bxl-javascript'></i> },
    { name: 'TypeScript', icon: <i class='bx bxl-typescript'></i> },
    { name: 'Flask',      icon: <i class='bx bxl-flask'></i> },
    { name: 'Django',     icon: <i class='bx bxl-django'></i> },
    { name: 'Python',     icon: <i class='bx bxl-python'></i> },
    { name: 'HTML',       icon: <i class='bx bxl-html5'></i> },
    { name: 'CSS',        icon: <i class='bx bxl-css3'></i> },
    { name: 'Sass',       icon: <i class='bx bxl-sass'></i> },
    { name: 'SQL',        icon: <i class='bx bxl-postgresql'></i> },
    { name: 'MongoDB',    icon: <i class='bx bxl-mongodb'></i> },
    { name: 'Git/GitHub', icon: <i class='bx bxl-github'></i> },
    { name: 'Docker',     icon: <i class='bx bxl-docker'></i> },
  ]

  return (
    <div className='about' id='about'>
      <div className="title">
        <h2>About me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Let me introduce myself: I am Andi Montilla, a Full Stack
            developer with +4 years of experience, and I would like to
            offer you my skills. I have worked on various applications
            and projects over the past few years, and I am proud to say
            that I have gained extensive experience in web, mobile
            development and programming.
          </p>
          <p className="about-grid-info-text">
            I am passionate about the creative process of app development,
            and enjoy working as a team to deliver high-quality projects.
            I have advanced skills in programming languages such as Python
            and JavaScript, as well as extensive experience in relational,
            non-relational databases, and user interface development tools.
            Also, I am familiar with version control tools like Git.
          </p>
          <p className="about-grid-info-text">
            I have worked on projects of variable size, from small
            applications to much larger projects, where I have collaborated
            with multidisciplinary teams and lead small teams. I have
            demonstrated analytical skills that allow me to understand and
            solve complex problems using technology effectively.
          </p>
          <p className="about-grid-info-text">
            I am confident that I can bring my skills, knowledge and passion
            for technology to you. If you are interested in my profile, I will
            be happy to provide you with more information about my skills and
            previous work. Get in touch with me via email or Twitter.
          </p>
          <p className="about-grid-info-text">
            Some technologies i have working in:  
          </p>
          <ul className="about-grid-info-list">
            {
              technologies.map(({name,icon}) => (
                <li className='about-grid-info-list-item'>
                  {icon}
                  &nbsp;
                  {name}
                </li>
              ))
            }
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="about-grid-photo-container">
            <img src="/AndiDev.png" alt='profile' />
          </div>
          <div className="about-grid-photo-container">
            <img src="/Andi.png"    alt='profile' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About