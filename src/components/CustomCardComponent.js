export const CustomCard = ({ textSide, project, uniqKey }) => {
  if (textSide === "right") {
    return (
      <div className={"custom-card mb-5 align-self-" + (window.innerWidth > 750 ? "start" : "stretch")} color="transparent" key={uniqKey}>
        <img className='card-img' src={project.imgUrl} alt="spotify logo" />
        <div className={"card-text-box d-flex flex-column top-50 " + ((window.innerWidth > 750) && "start-100")}>
          <p className='card-title text-end'>
            {project.title}
          </p>
          <p className='text-break ps-3 pe-3 pt-2 overflow-hidden'>
            {project.description}
          </p>
          <div className='card-icon-wrapper w-100 text-center'>
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              <i className="fa fa-github card-icon" aria-hidden="true"></i>
            </a>
            <a href={project.projectUrl} target="_blank" rel="noreferrer">
              <i className="fa fa-external-link card-icon ms-3" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>)
  } else {
    return (
      <div className={"custom-card mb-5 align-self-" + (window.innerWidth > 750 ? "end" : "stretch")} color="transparent" key={uniqKey}>
        <img className='card-img ' src={project.imgUrl} alt="spotify logo" />
        <div className='card-text-box d-flex flex-column'>
          <p className='card-title text-start w-100'>
            {project.title}
          </p>
          <p className='text-break ps-3 pe-3 pt-2 overflow-hidden'>
            {project.description}
          </p>
          <div className='card-icon-wrapper w-100 text-center'>
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              <i className="fa fa-github card-icon" aria-hidden="true"></i>
            </a>
            <a href={project.projectUrl} target="_blank" rel="noreferrer">
              <i className="fa fa-external-link card-icon ms-3" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>)
  }
}
