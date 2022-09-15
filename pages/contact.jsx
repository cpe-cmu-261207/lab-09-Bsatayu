import React from 'react'
import Navbar from '../components/Navbar'

export default function contact() {
  return (
  <div>
    <Navbar />
    <div
      className="border border-2 rounded-3 p-2 my-4 bg-white shadow"
      style={{ marginLeft: "10rem", marginRight: "10rem" }}
    >
      
      <h2 className="text-center mt-2 mb-4">Contact Me</h2>
      <div className="p-2 mx-auto mb-4" style={{ maxWidth: "50rem"}}>
        <div className="d-flex flex-row align-items-center">
          <img
            src="images/1.png"
            style={{ objectFit: "cover" }}
            className="rounded-circle shadow"
            width="150"
            height="150"
          />
          <div className="ms-3">
            <div className="container">
              <div className="row row-cols-2">
                <div className="col fw-bold">Name</div>
                <div className="col">Satayu Settakit</div>
                <div className="col fw-bold">Nickname</div>
                <div className="col">Boat</div>
                <div className="col fw-bold">Address</div>
                <div className="col"> City/Town	Avalon
            State/Province/Region	California
            Zip/Postal Code	90704
            Phone Number	(310) 510-1623
            Country	United States </div>
                <div className="col fw-bold">Facebook</div>
                <a target="_blank">
                  <div className="col">https://www.facebook.com/stayu.settakit</div>
                </a>
                <div className="col fw-bold">Email</div>
                <a href="mailto:satayu_s@cmu.ac.th">
                  <div className="col">satay_s@cmu.ac.th</div>
                </a>
                <div className="col fw-bold">Phone</div>
                <div className="col">094-6300-913</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}