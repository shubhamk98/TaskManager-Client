/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiMessageSquareEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOpenInNew } from "react-icons/md";
import useTaskStore from "../../Context/FormContext";
import Modal from "../Modal";

const Table = () => {
  const navigate = useNavigate();
  const {
    setTitle,
    setDescription,
    setDetails,
    setDueDate,
    openModal,
    setTaskId,
    isModalOpen,
  } = useTaskStore();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const handelViewComplete = (title, des, about, date) => {
    setTitle(title);
    setDescription(des);
    setDetails(about);
    setDueDate(date);
    navigate(`/ViewComplete`);
  };

  const handleOpenModal = (taskId) => {
    setTaskId(taskId);
    openModal();
  };

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
                    className="btn btn-info mr-2"
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
                  <button className="btn btn-error" onClick={()=>handleOpenModal(task._id)}>
                    <RiDeleteBin5Line size={21} />
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      handelViewComplete(
                        task.title,
                        task.description,
                        task.details,
                        task.dueDate
                      )
                    }
                  >
                    <MdOpenInNew size={21} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 mt-12">
          <div className="flex flex-col gap-4 w-full lg:w-[405px]">
            <div className="skeleton h-80 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-[405px]">
            <div className="skeleton h-80 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-[405px]">
            <div className="skeleton h-80 w-full"></div>
          </div>
        </div>
      )}
      {isModalOpen && <Modal />}
    </div>
  );
};

export default Table;
