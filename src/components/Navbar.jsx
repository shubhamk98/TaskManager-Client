import { IoMdAddCircleOutline } from "react-icons/io";
import { SiGoogletagmanager } from "react-icons/si";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div >
      <div className="navbar bg-base-100 px-0 md:px-6 border-b-[1px] ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-colo" onClick={()=>{navigate('/')}}>
            <SiGoogletagmanager color="yellow" size={26}/>
            TaskManager</a>
        </div>
        <div  onClick={()=>console.log('add new task')}>
          <a className="tab hover:bg-gray-600 rounded-md h-12">
            <IoMdAddCircleOutline color="yellow" size={24}/>
            {" "}
            <p className="px-2 font-semibold text-base hidden md:block">Add new task</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
