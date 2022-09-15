
import React from 'react'
import Navbar from '../components/Navbar'

export default function exp() {
  return (
    <div>
        <Navbar />
        <div
        className="border border-2 rounded-3 p-2 my-4 bg-white shadow"
        style={{ marginLeft: "10rem", marginRight: "10rem" }}
        >
        <h2 className="text-center mt-2 mb-4">My Experience</h2>
        <div className="d-flex flex-row gap-3 mx-auto mb-3" style={{maxWidth: "36rem"}}>
            <div className="card shadow" style={{width: "18rem"}}>
            <img src="images/5.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">261102 Project</h5>
                <p className="card-text">
                in freshmen year im group up with my friends to do a project in 
              261102 Computer Programming it's a Game like Tetris but make by our own
                </p>
            </div>
            </div>

            <div className="card shadow" style={{width: "18rem"}}>
            <img src="images/6.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Electric wheelchair Project</h5>
                <p className="card-text">
                In high school i and classmate just invented Electric wheechair for disability person ours project got winning the 1st prize
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}