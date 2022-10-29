import React from "react"

function Card(props) {
  return (
    <div className="card">
      <img src={props.item.image} className="card-img-top card--img" alt="..." />
      <p className="card--item--category"><i className={props.item.icon}></i> {props.item.category}</p>
      <div className="card-body">
        <button className="card--more"><i className="ri-more-fill"></i></button>
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">{props.item.text}</p>
        </div>
        <div className="card--footer--flex">
          <img src={props.item.photo} alt="Avatar Logo" className="rounded-pill card--user" />
          <span className="mx-auto card--user--name">{props.item.name}</span>
          <p className="card--views"><i className="ri-eye-line card--eye"></i> {props.item.views}</p>
          <button className="card--share"><i className="ri-share-line"></i></button>
      </div>
    </div>
  )
}

export default Card