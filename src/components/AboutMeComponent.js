import {
  Container, Button
} from 'reactstrap';




export const AboutMeSection = () => {
  return (
    <Container className="col-10 col-sm-8 col-md-6 d-flex flex-column align-items-left justify-content-center" id="first-section">
      <h4>Hi, my name is</h4>
      <h1>Carlos Diaz</h1>
      <h3>I build things for the web</h3>
      <p className="text-justify">alotof words all here, chlling out again and again alotof words all here, chlling out again and again alotof words all here, chlling out again and againalotof words all here, chlling out again and again alotof words all here, chlling out again and again</p>
      <Button href="mailto:diazmelian.carlos@gmail.com" className='col-sm-6 col-md-4 my-btn-primary' color="">Get In Touch</Button>
    </Container>)
}
