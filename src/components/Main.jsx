import React from "react"
import Card from "./Card"
import Card2 from "./Card2"
import Card3 from "./Card3"
import data from "../data.js"
import data2 from "../data2.js"
import data3 from "../data3"

function Main() {
  const newData = data.map((item) => {
    return (
      <Card key={item.id} item={item} />
    )
  })

  const newData2 = data2.map((item2) => {
    return (
      <Card2 key={item2.id} item2={item2} />
    )
  })
  
  const newData3 = data3.map((item3) => {
    return (
      <Card3 key={item3.id} item3={item3} />
    )
  })

  return (
    <div className="row mx-auto">
      <div className="col-sm-12 main--nav">
        <div className="main--nav--items main--nav--first">All Posts(32)</div>
        <div className="main--nav--items">Article</div>
        <div className="main--nav--items">Event</div>
        <div className="main--nav--items">Education</div>
        <div className="main--nav--items main--nav--last">Job</div>
        <button className="main--nav--post">Write a Post<i className="ri-arrow-drop-down-line navbar--drop--arrow"></i></button>
        <button className="main--nav--group"><i class="ri-group-line"></i>Join Group</button>
      </div>
      <div className="col-sm-8">
        {newData}
        {newData2}
        {newData3}
      </div>
      <div className="col-sm-4">
        <div className="main--right">
          <p className="main--right--location"><i className="ri-map-pin-2-line main--right--location--icon"></i>Noida, India</p>
          <i className="ri-edit-2-line main--right--pen--icon"></i>
        </div>
        <div className="main--right--warning">
          <p><i class="ri-file-warning-line"></i> Your location will help us serve better and extend a personalised experience.</p>
        </div>
      </div>
    </div>
  )
}

export default Main