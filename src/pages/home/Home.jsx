import React from 'react'
import Chart from '../../conponents/chart/Chart'
import Fetured from '../../conponents/featured/Fetured'
import Navbar from '../../conponents/navbar/Navbar'
import Sidebar from '../../conponents/sidebar/Sidebar'
import Widget from '../../conponents/widget/Widget'
import Table from '../../conponents/table/Table'
import "./home.scss"


function Home() {
  return (
    <div className='home'>   
        <Sidebar/>
        <div className="homeContainer"> 
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Fetured/>
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table/>
          </div>
        </div>
       
    </div>
  )
}

export default Home
