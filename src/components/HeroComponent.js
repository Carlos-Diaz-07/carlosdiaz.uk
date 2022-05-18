import {
  Container, Button
} from 'reactstrap';




export const HeroSection = () => {
  return (
    <Container className="col-10 col-sm-8 col-md-6 d-flex flex-column align-items-left justify-content-center section first-section" id="first-section">
      <h4 className='text-shadow'>Hi, my name is</h4>
      <h1 className='text-shadow'>Carlos Diaz</h1>
      <h2 className='text-shadow'>I build things for the Web</h2>
      <p className="text-justify">I'm a Junior Software Developer currently working for <a className="text-color-primary" href="https://goatagency.com/" target="_blank" rel="noreferrer"> The Goat Agency</a>. I love creating, be it with my hands, my guitar, my 3D printer or coding.</p>
      <Button href="mailto:diazmelian.carlos@gmail.com" className='col-12 col-sm-6 col-md-4 my-btn-primary'>Get In Touch</Button>
    </Container>)
}
