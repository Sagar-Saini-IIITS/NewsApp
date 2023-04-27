import React from 'react'
import { useEffect } from 'react';

const About = (props) => {
    useEffect(() => {
      props.setProgress(100);
    });
    
  return (
    <div className="text-center" style={{ paddingTop: "8rem",
    position: "relative",color:`${props.fcolor}`,backgroundColor:`${props.bcolor}`}}>
        <h3>
            Welcome to the about page ! <br/> <br/>Stay updated with latest events with the NewsApp.
        </h3>
    </div>
  )
}

export default About