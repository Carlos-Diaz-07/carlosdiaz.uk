import { motion } from "framer-motion"
import {
  Container, Row, Col, Button
} from 'reactstrap';




export const FirstSection = () => {
  return (
    <Container className="col-12 col-sm-11 col-md-10 col-xl-8 d-flex align-items-center" id="first-section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 3, type: "tween" }}
      >

        <h3>Hi, my name is</h3>
        <h1>Carlos Diaz</h1>
        <h2>I build things for the web</h2>
        <p className="text-justify">alotof words all here, chlling out again and again alotof words all here, chlling out again and again alotof words all here, chlling out again and againalotof words all here, chlling out again and again alotof words all here, chlling out again and again</p>
        <Button>Get In Touch</Button>
      </motion.div>
    </Container>)
}
