import React from 'react'
import './Subtitle.css';
const Subtitle = ({subtitle,className}) => {
   return (
      <div className = {className}>
         {subtitle.map((item,index) => {return (
            <div key = {index} className = 'card'>{item}</div>
         )})}
      </div>
   )
}

export default Subtitle;
