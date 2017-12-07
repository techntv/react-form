import React from 'react';

const AptList = ({data,index}) => {
    return (
    <li className="pet-props.data media" key={index}>     
    <div className="pet-info media-body">
      <div className="pet-head">
        <span className="pet-name">{data.petName}</span>
        <span className="apt-date pull-right">{data.aptDate}</span>
      </div>
      <div className="owner-name">
        <span className="label-props.data">Owner:</span> {data.ownerName}
      </div>
      <div className="apt-notes">{data.aptNotes}</div>
    </div>
    </li> 
    )
}

export default AptList;
