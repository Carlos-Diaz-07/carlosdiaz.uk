import { CustomCard } from "./CustomCardComponent";
import { Container } from 'reactstrap';


export const WorkSection = (projects) => {
  const jobs = projects.projects.map((project) => {
    const textSide = project.id % 2 === 0 ? "right" : "left";
    return (
      <CustomCard textSide={textSide} project={project} />
    );
  });

  return (
    <Container className="col-10 col-sm-8 col-md-6 d-flex flex-column section" id="work-section">
      <h5 className='text-shadow'>Work</h5>
      <hr className="mb-3"/>
      {jobs}
    </Container>)
}
