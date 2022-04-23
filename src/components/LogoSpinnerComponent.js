import { motion } from "framer-motion"

export const LogoSpinner = () => {

  const pos = () => {
    if (window.innerWidth > 950)
      return ({ x: "50vw", y: "45vh" })
    else if (window.innerWidth > 700)
      return ({ x: "49vw", y: "45vh" })
    else if (window.innerWidth > 601)
      return ({ x: "48vw", y: "45vh" })
    else if (window.innerWidth > 440)
      return ({ x: "47vw", y: "45vh" })
    else if (window.innerWidth > 400)
      return ({ x: "46vw", y: "45vh" })
    else if (window.innerWidth > 380)
      return ({ x: "45vw", y: "45vh" })
    else if (window.innerWidth > 350)
      return ({ x: "44vw", y: "45vh" })
    else
      return ({ x: "43vw", y: "45vh" })
  }

  return (
    <motion.div
      className="position-fixed spinner-logo"
      initial={pos}
      animate={{
        x: 31,
        y: 10,
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
}
