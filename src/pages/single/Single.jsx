import React from 'react'
import Chart from '../../conponents/chart/Chart'
import Navbar from '../../conponents/navbar/Navbar'
import Sidebar from '../../conponents/sidebar/Sidebar'
import List from '../../conponents/table/Table'
import "./single.scss"
function Single() {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>

        <div className="top">
          <div className="left">
            <div className="editButtom">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
            <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane China</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jhan234@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+088 01783 238 475</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Uttara, Dhaka</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 /1 } title="User Speding (lase 6 Months) "/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Tranactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
