import Header from "../ExtraOther/Header"


function AdminDashboard() {
  return (
    <div className="w-full h-screen p-10">
        <Header/>
        <div className="mt-5">
        <form className="flex bg-[#1c1c1c] px-11 py-5 flex-wrap w-full items-center bg-black-200 justify-between">
            <div className="w-[60%]">
            <div className="space-y-4">
                <div>
                <h3>Task Title</h3>
                <input className="w-[60%] text-white font-semibold px-2 bg-transparent border border-gray rounded" type="text" placeholder="Make UI design"/>
                </div>
                <div>
                <h3>Date</h3>
                <input className="w-[60%] text-white font-semibold px-2 bg-transparent border border-gray rounded"  type="date" />
            </div>
            <div>
                <h3>Assign to</h3>
                <input className="w-[60%] text-white font-semibold px-2 bg-transparent border border-gray rounded"  type="text" placeholder="employe name"/>
            </div>
            <div>
                <h3>Category</h3>
                <input className="w-[60%] text-white font-semibold px-2 bg-transparent border border-gray rounded"  type="text" placeholder="design, dev, etc"/>
            </div>
            </div>
            </div>

            <div className="w-[40%] flex flex-col">
                <h3>Description</h3>
                <textarea className="bg-transparent border border-gray text-white" name="" id="" rows="10" cols="50"></textarea><br />
                <button className="w-full bg-green-400 text-xl py-2">Create Task</button>
            </div>
            
            
        </form>
        </div>
    </div>
  )
}

export default AdminDashboard
