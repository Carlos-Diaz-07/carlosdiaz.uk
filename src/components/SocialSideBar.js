import { Link } from "react-router-dom";

export const SocialSideBar = () => {
  return (
    <div className='social-bar align-items-center d-none d-md-flex flex-column'>
      <a href="https://github.com/Carlos-Diaz-07" target="_blank" rel="noreferrer">
        <i href="https://github.com/Carlos-Diaz-07" className="fa fa-github github-icon pb-2" aria-hidden="true"></i>
      </a>
      <a href="https://www.linkedin.com/in/carlos-diaz-07/" target="_blank" rel="noreferrer">
        <i className="fa fa-linkedin linkedin-icon pb-2" aria-hidden="true"></i>
      </a>
      <div className="line mt-1"></div>
    </div>
  )
}
