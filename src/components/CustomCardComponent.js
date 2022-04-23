

export const CustomCard = ({ textSide }) => {
  if (textSide === "right")
    return (
      <div className="custom-card mb-5" color="transparent">
        <img className='card-img' src="assets/images/spotify-logo.jpg" alt="spotify logo" />
        <div className='card-text-box position-absolute d-flex flex-column top-50 start-100 translate-middle'>
          <p className='card-title text-end'>
            Spotify
          </p>
          <p className='text-break ps-3 pe-3 pt-2 overflow-hidden'>
            asdasdasdasd asd asd asddsa a asd a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs asddsa a asd a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs
          </p>
          <div className='card-icon-wrapper w-100 text-center'>
            <i href="https://github.com/Carlos-Diaz-07" className="fa fa-github card-icon" aria-hidden="true"></i>
            <i href="https://github.com/Carlos-Diaz-07" className="fa fa-external-link card-icon ms-3" aria-hidden="true"></i>
          </div>
        </div>
      </div>)
  else {
    return (
      <div className="custom-card mb-5 align-self-end" color="transparent">
        <img className='card-img ' src="assets/images/spotify-logo.jpg" alt="spotify logo" />
        <div className='card-text-box position-absolute d-flex flex-column top-50 start-0 translate-middle'>
          <p className='card-title text-start w-100'>
            Spotify
          </p>
          <p className='text-break ps-3 pe-3 pt-2 overflow-hidden'>
            asdasdasdasd asd asd asddsa a asd a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs asddsa a asd a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs
          </p>
          <div className='card-icon-wrapper w-100 text-center'>
            <i href="https://github.com/Carlos-Diaz-07" className="fa fa-github card-icon" aria-hidden="true"></i>
            <i href="https://github.com/Carlos-Diaz-07" className="fa fa-external-link card-icon ms-3" aria-hidden="true"></i>
          </div>
        </div>
      </div>)
  }
}
