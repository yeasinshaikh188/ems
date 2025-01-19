import Header from "../ExtraOther/Header"
import TaskListNumber from "../ExtraOther/TaskListNumber.JSX"
import Tasklist from "../TaskList.jsx/Tasklist"

function EmployeeDashboard() {
  return (
    <div className="p-10 h-screen bg-[#1C1C1C]">
        <Header/>
        <TaskListNumber/>
        <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard