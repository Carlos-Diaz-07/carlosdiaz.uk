import { motion } from "framer-motion"

const pos = () => {
  if (window.innerWidth > 950)
    return ({x: "47vw", y: "45vh"})
  else if (window.innerWidth > 700)
    return ({ x: "45vw", y: "45vh" })
  else if (window.innerWidth > 601)
    return ({ x: "43vw", y: "45vh" })
  else if (window.innerWidth > 440)
    return ({ x: "40vw", y: "45vh" })
  else if (window.innerWidth > 400)
    return ({ x: "37vw", y: "45vh" })
  else if (window.innerWidth > 380)
    return ({ x: "36vw", y: "45vh" })
  else if (window.innerWidth > 350)
    return ({ x: "34vw", y: "45vh" })
  else
    return ({ x: "32vw", y: "45vh" })
}

export const LogoSpinner = () => (
  <motion.div
    initial={pos}
    animate={{
      x: 0,
      y: 0,
      scale: [5, 1],
      rotate: [0, 360],
    }}
    transition={{
      type: "inertia",
      delay: 1,
      default: { duration: 2 },
    }}
  >
    <img src='assets/images/whole-logo.svg' alt='Carlos Diaz portfolio' />
  </motion.div>
)
