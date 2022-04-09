import {
  Container, Button
} from 'reactstrap';


export const SocialSideBar = () => {
  return (
    <div className='social-bar align-items-center d-none d-md-flex flex-column'>
      <i class="fa fa-github github-icon pb-2" aria-hidden="true"></i>
      <i class="fa fa-linkedin linkedin-icon pb-2" aria-hidden="true"></i>
      <div className="line mt-1"></div>
    </div>
  )
}
