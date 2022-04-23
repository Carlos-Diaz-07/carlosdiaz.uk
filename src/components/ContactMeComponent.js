import {
  Container, Button
} from 'reactstrap';




export const ContactMeSection = () => {
  return (
    <Container className="col-10 col-sm-8 col-md-6 d-flex flex-column align-items-left justify-content-center section" id="contact-me">
      <h5 className='text-shadow'>Contact Me</h5>
      <hr />
      <p className="text-justify">
        alotof words all here, chlling out again and again alotof words all here, chlling out alotof words all here, chlling out again and againalotof words all here, chlling out again and again alotof words all here, chlling out </p>
      <p>again and again alotof words all here, chlling out again and again alotof words allotof words all here, chlling out again and again alotof words all here, chlling out again and again
      </p>
      <Button href="mailto:diazmelian.carlos@gmail.com" className='col-sm-6 col-md-4 my-btn-primary align-self-center' color="">Get In Touch</Button>
    </Container >)
}
