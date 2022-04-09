import { motion } from "framer-motion"
import {
  Container, Button
} from 'reactstrap';




export const FirstSection = () => {
  return (
    <Container className="col-10 col-sm-8 col-md-6 d-flex align-items-center" id="first-section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 3, type: "tween" }}
      >

        <h4>Hi, my name is</h4>
        <h1>Carlos Diaz</h1>
        <h3>I build things for the web</h3>
        <p className="text-justify">alotof words all here, chlling out again and again alotof words all here, chlling out again and again alotof words all here, chlling out again and againalotof words all here, chlling out again and again alotof words all here, chlling out again and again</p>
        <Button color="primary">Get In Touch</Button>
      </motion.div>
    </Container>)
}
