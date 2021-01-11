import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 0.5, stiffness: 70 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

const nextVariants = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 120 }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className = "base container"
      variants = { containerVariants }
      initial = 'hidden'
      animate = 'visible'
      exit = 'exit'
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className = "next"
          variants = { nextVariants }
          // not needed because it is inherited from parent div
          // initial = 'hidden'
          // animate = 'visible'
        >
          <Link to="/toppings">
            <motion.button
              variants = { buttonVariants }
              whileHover = 'hover'
              >Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;
