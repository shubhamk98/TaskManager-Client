import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiMessageSquareEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOpenInNew } from "react-icons/md";
import useTaskStore from "../../Context/FormContext";

const Table = () => {
  const navigate = useNavigate();
  const { setTitle, setDescription, setDetails, setDueDate } = useTaskStore();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(tasks);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/all`);

      setTasks(response.data.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleEditBtn = (taskId, title, des, about, date) => {
    setTitle(title);
    setDescription(des);
    setDetails(about);
    setDueDate(date);
    navigate(`/edit/${taskId}`);
  };

  const handelDeleteTask = async (taskId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/dropTask/${taskId}`
      );
      console.log(response);
      getData();
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handelViewComplete = ( title, des, about, date)=>{
    setTitle(title);
    setDescription(des);
    setDetails(about);
    setDueDate(date);
    navigate(`/ViewComplete`);
  }

  return (
    <div>
      {!isLoading ? (
        <div className="flex flex-wrap gap-6 mt-12">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="w-full lg:w-[405px] bg-base-200 shadow-xl cursor-pointer rounded-lg"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
                <div className="badge bg-yellow-400 text-gray-900 font-semibold mb-2">
                  {task.dueDate.split("T")[0]}
                </div>
                <p className="mb-4">{task.description}</p>
                <div className="flex justify-end gap-4">
                  <button
                    className="btn btn-accent mr-2"
                    onClick={() =>
                      handleEditBtn(
                        task._id,
                        task.title,
                        task.description,
                        task.details,
                        task.dueDate
                      )
                    }
                  >
                    <BiMessageSquareEdit size={21} />
                  </button>
                  <button className="btn btn-accent">
                    <RiDeleteBin5Line
                      size={21}
                      onClick={() => handelDeleteTask(task._id)}
                    />
                  </button>
                  <button className="btn btn-accent">
                    <MdOpenInNew size={21} 
                     onClick={() => handelViewComplete(
                      task.title,
                      task.description,
                      task.details,
                      task.dueDate)}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Table;
