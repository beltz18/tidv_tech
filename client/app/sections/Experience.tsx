import Link       from 'next/link'
import { motion } from 'framer-motion'
import React, {
  useState,
  useEffect
} from 'react'

const Experience = () => {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline")
      underline!.style.top = `${selected * 4}rem`
    }
    transformSelected()
  }, [selected])

  const experiences = [
    {
      name: "YouTube",
      role: "Content Creator",
      url: "https://www.youtube.com/@AndiDev18",
      start: "April, 2023",
      end: "Present",
      responsibilities: [
        "Create and develop high-quality content in Python and JavaScript",
        "Share my experience gained over the years in an understandable, didactic and constant way"
      ],
      accomplishments: [
        "I began creating content on YouTube this year, with the aim of enhancing my skills and working with the latest programming languages and technologies, specifically JavaScript and Python.",
        "Over time, I have developed and shared my first course using Python with Flask and +10 short videos with tips about Python",
        "As a result, my channel has gained a substantial following, with over 100 subscribers and +2k views to date.",
      ],
    },
    {
      name: "Zuluaga Media",
      role: "Full Stack Developer",
      url: "https://www.zuluagamedia.com/",
      start: "June, 2022",
      end: "January, 2023",
      responsibilities: [
        "Lead a team of 10 programmers providing mentoring in order to improve their programming skills.",
        "Develop a progressive app with Nextjs for customer registration, task assignment, personnel management, payroll and service administration.",
        "Coach and mentoring the team to follow Agile principles and develop a lean and MVP mindset, user-centered, encouraging experimentation and constant feedback while ensuring high quality and knowledge sharing.",
        "Develop microservices based on Nodejs / Flask to connect with Google Cloud and storing data related to the operation of the internal processes of the company.",
      ],
      accomplishments: [
        "Improved my team's efficiency by reducing the learning curve from 12 months to 7 months by promoting the use of XP practices, pair and group programming. Full Stack principles and an experimentation mindset.",
        "Built a progressive web application (PWA) on Nextjs and Ractjs as front-end, Nodejs and Flask as back-end and MongoDB as database using agile methodology and SCRUM principles and values.",
        "The team scaled their knowledge by expanding their technological horizons from PHP, Wordpress and Elementor to MERN Stack, Nextjs and Flask with reactive design patterns.",
      ]
    },
    {
      name: "TIDV Tech",
      role: "Founder / Team Lead Developer",
      url: "https://tidv.tech",
      start: "January, 2021",
      end: "April, 2023",
      responsibilities: [
        "Build and plan high-quality programming content for people at different learning levels.",
        "Coach and mentoring programming students.",
        "Evaluate the mentoring program on a regular basis to ensure that it is meeting its goals.",
        "Lead a team of 5 mentors and instruct them in the use of study and learning techniques.",
        "Develop a progressive web application for the company where educational content can be uploaded in video format courses on programming and web development.",
      ],
      accomplishments: [
        "The knowledge of 150 students of the computer science career was increased where they learned the use of current and on-demand technologies such as Nodejs, Reactjs, Git, Docker and others.",
        "Increased my team's engagement by creating a psychologically-safe environment and a continuous, transparent feedback culture.",
        "The knowledge of my team in new technologies, good practices and programming principles with clean and scalable code was improved.",
        "Built a progressive web application (PWA) on Nextjs as front-end, Flask as back-end and MongoDB as database using agile methodology and SCRUM principles and values.",
      ]
    },
    {
      name: "Tachira's University Institute",
      role: "Full Stack Developer / University Professor",
      url: "https://uptaivirtualsarec.com",
      start: "March, 2019",
      end: "Present",
      responsibilities: [
        "Develop and maintain the curriculum for the computer science program.",
        "Teach a study program in computer science that includes: programming languages (as JavaScript, Python and C++), web development, data structures and algorithms, and English for software development.",
        "Mentor students in their research and development projects.",
        "Develop a web application with Reactjs as front-end and Nodejs as back-end for raising grades and creating study programs.",
      ],
      accomplishments: [
        "Developed a new curriculum for the software development program that is aligned with industry standards.",
        "Mentored several students who have gone on to successful careers in computer science.",
        "Taught English for software development to students, helping them to improve their communication skills and their ability to work in the industry.",
        "Developed a web application that helps students to raise their grades and create study programs. The application provides access to a variety of resources, including practice problems, quizzes and study guides tracking their progress and getting feedback on their work.",
      ]
    },
  ]

  return (
    <motion.div
      className='experience'
      id='experience'
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {
            experiences.map((expereince,index) => {
              return (
                <li
                  key={index}
                  className={`exp-slider-item ${index === selected && "exp-slider-item-selected"} `}
                  onClick={() => setSelected(index)}
                >
                  <span>{expereince.name}</span>
                </li>
              )
            })
          }
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className='exp-details-postion-company'>
                &nbsp;&nbsp; at &nbsp;&nbsp;
                <Link className='link' href={experiences[selected].url} target='_blank'>
                  {experiences[selected].name}{" "}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              [ {experiences[selected].start} - {experiences[selected].end} ]
            </p>
            <motion.h3
              className='title-sep'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: .6 }}
              variants={{
                visible: { opacity: 1, y: -2 },
                hidden: { opacity: 0, y: 0 },
              }}
            >
              Responsibilities
            </motion.h3>
            <ul className="exp-details-list">
              {
                experiences[selected].responsibilities.map((resp,index) => (
                  <motion.li
                    key={index}
                    className='exp-details-list-item'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: .3 + index * .2 }}
                    variants={{
                      visible: { opacity: 1, y: -2 },
                      hidden: { opacity: 0, y: 0 },
                    }}
                  >
                    {resp}
                  </motion.li>
                ))
              }
            </ul>
            <motion.h3
              className='title-sep'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: .6 }}
              variants={{
                visible: { opacity: 1, y: -2 },
                hidden: { opacity: 0, y: 0 },
              }}
            >
              Key Accomplisments
            </motion.h3>
            <ul className="exp-details-list">
              {
                experiences[selected].accomplishments.map((accomp,index) => (
                  <motion.li
                    key={index}
                    className='exp-details-list-item'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: .3 + index * .2 }}
                    variants={{
                      visible: { opacity: 1, y: -2 },
                      hidden: { opacity: 0, y: 0 },
                    }}
                  >
                    {accomp}
                  </motion.li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience