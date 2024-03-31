import { NavLink, Outlet } from "react-router-dom"

const DashBoard = () => {
  return (
    <div className="flex ">
      
      <div className="w-[20%] shadow-2xl bg-slate-800 text-white text-xl">
        <ul>
          <li>
            <NavLink to={'/dashboard'}  className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-700 text-white" : ""
                }>DashBoard</NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard/profile'}  className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-700 text-white" : ""
                }>Profile</NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard/editprofile'}  className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-700 text-white" : ""
                }>Edit Profile</NavLink>
          </li>
        </ul>
        
      </div>
      <div className="w-[80%]"><Outlet></Outlet></div>
    </div>
  )
}

export default DashBoard;