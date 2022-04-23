import { CustomCard } from "./CustomCardComponent";
import { Container } from 'reactstrap';


export const WorkSection = () => {
  return (
    <Container className="col-10 col-sm-8 col-md-6 d-flex flex-column section" id="work-section">
      <h5 className='text-shadow'>Work</h5>
      <hr className="mb-3"/>
      <CustomCard textSide={"right"}/>
      <CustomCard textSide={"left"} />
      <CustomCard textSide={"right"} />
      <CustomCard textSide={"left"} />

    </Container>)
}
