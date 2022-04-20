import { CustomCard } from "./CustomCardComponent";
import {
  Container, Button
} from 'reactstrap';


export const WorkSection = () => {
  return (
    <Container className="col-10 col-sm-8 col-md-6 d-flex flex-column align-items-left justify-content-center section" id="work">
      <h5 className='text-shadow'>Work</h5>
      <hr />
      <CustomCard />
    </Container>)
}
