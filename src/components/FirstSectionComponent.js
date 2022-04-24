import {
  Container, Button
} from 'reactstrap';




export const FirstSection = () => {
  return (
    <Container className="col-10 col-sm-8 col-md-6 d-flex flex-column align-items-left justify-content-center section first-section" id="first-section">
      <h4 className='text-shadow'>Hi, my name is</h4>
      <h1 className='text-shadow'>Carlos Diaz</h1>
      <h2 className='text-shadow'>I build things for the web</h2>
      <p className="text-justify">alotof words all here, chlling out again and again alotof words all here, chlling out again and again alotof words all here, chlling out again and againalotof words all here, chlling out again and again alotof words all here, chlling out again and again</p>
      <Button href="mailto:diazmelian.carlos@gmail.com" className='col-12 col-sm-6 col-md-4 my-btn-primary'>Get In Touch</Button>
    </Container>)
}
