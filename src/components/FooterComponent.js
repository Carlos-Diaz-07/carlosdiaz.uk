import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';


export const FooterSection = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/carlos-diaz-07/carlosdiaz.uk')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
        console.log(json)
      })
      .catch(e => console.error(e));
  }, []);


  return (
    <Container className="col-10 col-sm-8 col-md-6 d-flex justify-content-center pb-5">
      <a className='footer-repo-link' href="https://github.com/carlos-diaz-07/carlosdiaz.uk">
        <div>Designed &amp; Built by Carlos Diaz</div>
        <div className='d-flex justify-content-center'>
          <span>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <span>{githubInfo.stars.toLocaleString()}</span>
          </span>
          <span className='ms-3'>
            <i class="fa fa-code-fork" aria-hidden="true"></i>
            <span>{githubInfo.forks.toLocaleString()}</span>
          </span>
        </div>
      </a>
    </Container>
  );
};
