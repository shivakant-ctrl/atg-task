import React from "react"

function Card2(props) {
  return (
    <div className="card">
      <img src={props.item2.image} className="card-img-top card--img" alt="..." />
      <p className="card--item--category"><i className={props.item2.icon}></i> {props.item2.category}</p>
      <div className="card-body">
        <button className="card--more"><i className="ri-more-fill"></i></button>
        <h5 className="card-title">{props.item2.title}</h5>
        <p className="card-text">{props.item2.text}</p>
        </div>
        <div className="card2--properties">
          <p className="card2--date"><i className="ri-calendar-event-line card2--date--icon"></i>{props.item2.date}</p>
          <p className="card2--location"><i className="ri-map-pin-2-line card2--location--icon"></i>{props.item2.location}</p>
        </div>
        <button className="card2--button" type="button">Visit Website</button>
        <div className="card--footer--flex">
          <img src={props.item2.photo} alt="Avatar Logo" className="rounded-pill card--user" />
          <span className="mx-auto card--user--name">{props.item2.name}</span>
          <p className="card--views"><i className="ri-eye-line card--eye"></i> {props.item2.views}</p>
          <button className="card--share"><i className="ri-share-line"></i></button>
      </div>
    </div>
  )
}

export default Card2