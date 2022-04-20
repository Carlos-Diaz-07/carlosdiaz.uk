import {
  Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle
} from 'reactstrap';




export const CustomCard = () => {
  return (
    <div className="custom-card" color="transparent" id="work" inverse>
      <img src="assets/images/spotify-logo.jpg" alt="" height="100%" width="100%" />
      <div className='card-text-box position-absolute top-50 start-100 translate-middle'>
        <p className='card-title text-end'>
          Spotify
        </p>
        <p className='text-break'>
          asdasdasdasd asd asd asddsa a asd a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs asddsa a asd a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs
        </p>
        <i href="https://github.com/Carlos-Diaz-07" className="fa fa-github card-icon ps-2" aria-hidden="true"></i>
        <i href="https://github.com/Carlos-Diaz-07" className="fa fa-external-link card-icon ps-2" aria-hidden="true"></i>
      </div>
    </div>)
}
