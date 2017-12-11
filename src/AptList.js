import React from 'react';

const AptList = (props) => {
  let handleDelete = () => {
    props.onDelete(props.index);
  }
  return (
    <li className="pet-props.data media" >  
    <div className="media-left">
      <button className="pet-delete btn btn-xs btn-danger" onClick={handleDelete}>
        <span className="glyphicon glyphicon-remove"></span>
      </button>
    </div>  
    <div className="pet-info media-body">
      <div className="pet-head">
        <span className="pet-name">{props.data.petName}</span>
        <span className="apt-date pull-right">{props.data.aptDate}</span>
      </div>
      <div className="owner-name">
        <span className="label-props.data">Owner:</span> {props.data.ownerName}
      </div>
      <div className="apt-notes">{props.data.aptNotes}</div>
    </div>
    </li>

  )
}

export default AptList;
