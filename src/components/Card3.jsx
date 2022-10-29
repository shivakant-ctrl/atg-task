import React from "react"

function Card3(props) {
  return (
    <div className="card">
      <p className="card--item--category"><i className={props.item3.icon}></i> {props.item3.category}</p>
      <div className="card-body">
        <button className="card--more"><i className="ri-more-fill"></i></button>
        <h5 className="card-title">{props.item3.title}</h5>
        <p className="card-text">{props.item3.text}</p>
        </div>
        <div className="card3--properties">
          <p className="card3--company"><i className="ri-briefcase-line card3--company--icon"></i>{props.item3.company}</p>
          <p className="card3--location"><i className="ri-map-pin-2-line card3--location--icon"></i>{props.item3.location}</p>
        </div>
        <button className="card3--button" type="button">Apply on Timesjobs</button>
        <div className="card--footer--flex">
          <img src={props.item3.photo} alt="Avatar Logo" className="rounded-pill card--user" />
          <span className="mx-auto card--user--name">{props.item3.name}</span>
          <p className="card--views"><i className="ri-eye-line card--eye"></i> {props.item3.views}</p>
          <button className="card--share"><i className="ri-share-line"></i></button>
      </div>
    </div>
  )
}

export default Card3