/* eslint-disable no-unused-vars */
import { RiDeleteBin5Line } from "react-icons/ri";
import useTaskStore from "../Context/FormContext";
import axios from "axios";
import toast from "react-hot-toast";

const Modal = () => {
  const { isModalOpen, closeModal, taskId } = useTaskStore();

  const handelDeleteTask = async (taskId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/dropTask/${taskId}`
      );
      toast.success("Task has been removed!");
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Something went Wrong");
    } finally {
      closeModal();
      window.location.reload();
    }
  };

  return (
    <div>
      <dialog open={isModalOpen} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <p className="py-4 font-semibold">
            Are you sure you want to delete this task? This action is permanent
            and cannot be undone.
          </p>
          <div className="modal-action ">
            <form method="dialog " className="flex flex-row gap-4">
              <button className="btn " onClick={closeModal}>
                Close
              </button>
            </form>
            <button
              className="btn btn-error"
              onClick={() => handelDeleteTask(taskId)}
            >
              <RiDeleteBin5Line size={21} />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
