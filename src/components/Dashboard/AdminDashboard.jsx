import AllTask from "../ExtraOther/AllTask"
import CreateTask from "../ExtraOther/CreateTask"
import Header from "../ExtraOther/Header"


function AdminDashboard() {
  return (
    <div className="w-full h-screen p-10">
        <Header/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard
