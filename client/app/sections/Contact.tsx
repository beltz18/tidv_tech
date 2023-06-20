import React      from 'react'
import Typed      from 'typed.js'
import { motion } from 'framer-motion'
import Button     from '@c/Button'

const Contact = () => {
  const el = React.useRef(null)

  const getRandomIntInclusive = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hello!... Hola!... Ciao!... ",
        "Send me <i>Waves</i> and",
        "You want to talk?",
        "I like to make new friends, so",
        "Got a pro tip?",
        "Don't hesitate, tell me something :)",
        "Let's share our experiences!",
        "Do you love Spaghetti?",
        "I'm Spider-Man",
        "I love Cats, do you too? (=^･ω･^=)",
        "Science is life",
        "I'm feelin' hungry",
        "Wanna take a coffee?",
        "AI will rule the world D:",
      ],
      typeSpeed: getRandomIntInclusive(15,40),
      backSpeed: getRandomIntInclusive(15,40),
      backDelay: 600,
      startDelay: 300,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <>
      <motion.div
        className='contact'
        id='contact'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: .3 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <motion.h2
          className="contact-title"
          ref={el}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          variants={{
            visible: { opacity: 1, y: -5 },
            hidden: { opacity: 0, y: 0 },
          }}
        ></motion.h2>
        <motion.h2
          className="contact-sub-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: .9 }}
          variants={{
            visible: { opacity: 1, y: -5 },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          Let&apos;s Get in Touch! :D
        </motion.h2>
        <motion.p
          className='contact-text'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          variants={{
            visible: { opacity: 1, y: -5 },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          I always appreciate for a kind message with warm people.
          If you want to talk about tech, ask for a tip, needs an
          advise, offer me a job or just hang out for a while. I
          will try my best to get back to you and chat!
        </motion.p>
        <motion.div
          className="contact-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1, y: -5 },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <Button text="Say Hi!" link="mailto:anmdev32@gmail.com"></Button>
        </motion.div>
      </motion.div>

      <footer>
        <small>Andi Dev</small>
      </footer>
    </>
  )
}

export default Contact