import React from 'react'
import Navbar from './Navbar'

export default function Profile() {
  return (
    <div>
    <Navbar />
    <div
      className="border border-2 rounded-3 p-2 my-4 bg-white shadow"
      style={{ marginLeft: "10rem", marginRight: "10rem" }}
    >
      <div
        className="border-start border-5 border-primary p-2 mx-auto my-3 shadow-sm"
        style={{ maxWidth: "50rem", backgroundColor: "rgb(94, 182, 220)" }}
      >
        <div className="d-flex flex-row align-items-center">
          <img
            src="images/1.png"
            style={{objectFit: "cover"}}
            className="rounded-circle"
            width="150"
            height="150"
          />
          <div className="ms-3">
            <h3>Satayu Settakit</h3>
            <span>
            Hello My name is Satayu Settakit my nickname is Boat and im 20 years old
        This is my Resume Website
            </span>
          </div>
        </div>
      </div>

      <h2 className="text-center">My Skills</h2>
      <div className="card mt-3 mx-auto shadow" style={{maxWidth: "40rem"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="images/2.jpg" className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Programming</h5>
              <p className="card-text">
              C++ is my first code language to learn when i come to this
            university so my first skill is C++ Programming
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-3 mx-auto shadow" style={{maxWidth: "40rem"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="images/3.jpg" className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Gaming Skill</h5>
              <p className="card-text">
              Gaming is very fun it's helps me to relaxed from whether work or
            school and somethings makes me exhausted
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card my-3 mx-auto shadow" style={{maxWidth: "40rem"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="images/4.jpg" className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Playing Chess</h5>
              <p className="card-text">Chess is one of my skill. In my opinion chess are improve my logic
            and strategy thinking and it's so excited and challenge to win</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}