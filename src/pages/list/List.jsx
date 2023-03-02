import "./list.scss"
import Sidebar from "../../conponents/sidebar/Sidebar"
import Navbar from "../../conponents/navbar/Navbar"
import Datatable from "../../conponents/datatable/Datatable"
const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List