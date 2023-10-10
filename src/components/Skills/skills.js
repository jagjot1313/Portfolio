import React from 'react'
import './skills.css'
import UIDesign from '../../assets/UIUXLogo.png';
import DjangoLogo from '../../assets/DjangoLogo.png';
import Flutter from'../../assets/FlutterLogo.png';

const skills = () => {
  return (
   <section id='skills'>
         <span className="SkillTitle"><h1>What Do I Work On</h1></span>
         <span className="skillDesc">Worked on NFC technology to replace visiting cards to Digital Connect instead,<br/> a creative way to interact and connect in place of conventional cards.</span>
         <div className="skillBars">
                <div className="skillBar">
                     <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                <div className='skillBarText'>
                    <h2>
                        UI/UX Design
                    </h2>
                    <p>Write content    </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={DjangoLogo} alt="DjangoLogo" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>
                        Django Framework
                    </h2>
                    <p>Python edmbeded environmetn </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Flutter} alt="Flutter" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>
                        Flutter App
                    </h2>
                    <p>Flutter Development</p>
                </div>
            </div>
         </div>
   </section>
  )
}

export default skills
