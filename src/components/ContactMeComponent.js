import {
  Container, Button
} from 'reactstrap';




export const ContactMeSection = () => {
  return (
    <Container className="col-10 col-sm-8 col-md-6 d-flex flex-column align-items-center justify-content-center section" id="contact-me-section">
      <h5 className='text-shadow'>Contact Me</h5>
      <hr />
      <p className="text-center">
        alotof words all here, chlling out again and again alotof words all here, chlling out alotof words all here, chlling out again and againalotof words all here, chlling out again and again alotof words all here, chlling out </p>
      <p className="text-center">again and again alotof words all here, chlling out again and again alotof words allotof words all here, chlling out again and again alotof words all here, chlling out again and again
      </p>
      <Button href="mailto:diazmelian.carlos@gmail.com" className='col-12 col-sm-6 col-md-5 my-btn-primary'>Get In Touch</Button>
    </Container >)
}
