import React from 'react';
import './works.css';
import Linkdin from '../../assets/LinkedinLogo.png';
import Github from '../../assets/GithubLogo.png';
import Overleaf from '../../assets/Overleaf_Logo.jpg'

const works = () => {
  return (
   <section id="works">
    <h2 className='workstitle'>My Portfolio</h2>
    <span className='WorkDesc'>I take prife in making this website</span>
    <div className="worksImdgs">
        <img src={Overleaf} alt="Overleaf" className='OverleafLogo'/>
        <img src={Github} alt="Github" className='GithubLogo'/>
        <img src="" alt="" className=''/>
        <img src="" alt="" className=''/>
        <img src="" alt="" className=''/>
        <img src="" alt="" className=''/>    
    </div>
   </section>
  )
}

export default works
