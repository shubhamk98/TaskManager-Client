import React, { useState } from "react";
import DatePickerComponent from "./DatePicker";
import useTaskStore from "../../Context/FormContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    title,
    setTitle,
    description,
    setDescription,
    details,
    setDetails,
    dueDate,
    resetTask,
  } = useTaskStore();

  const handelSaveBtn = async () => {
    const data = {
      taskId: id,
      title: title,
      description: description,
      details: details,
      dueDate: dueDate instanceof Date ? dueDate.toISOString() : dueDate,
    };

    resetTask();
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/editTask`,
        data
      );
      navigate("/");
    } catch (error) {
      console.error("Error editing task:", error);
      console.log("Error response:", error.response);
    }
  };

  const handelAddNewTask = async () => {
    const data = {
      taskId: id,
      title: title,
      description: description,
      details: details,
      dueDate: dueDate instanceof Date ? dueDate.toISOString() : dueDate,
    };

    resetTask();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/newTask`,
        data
      );
      navigate("/");
    } catch (error) {
      console.error("Error editing task:", error);
      console.log("Error response:", error.response);
    }
  };

  return (
    <div className="mx-2 md:mx-10">
      <h1 className="text-2xl font-semibold my-6">Edit Task</h1>
      <div className="flex flex-col gap-4 ">
        <textarea
          placeholder="Title"
          className="textarea textarea-bordered textarea-base w-full max-w-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        <DatePickerComponent />
        <textarea
          placeholder="Descrption"
          className="textarea textarea-bordered textarea-base w-full max-w-lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <textarea
          placeholder="About"
          disabled={false}
          className="textarea textarea-bordered textarea-base w-full max-w-lg"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </div>
      {id ? (
        <button className="btn btn-accent my-4" onClick={handelSaveBtn}>
          Save
        </button>
      ) : (
        <button className="btn btn-accent my-4" onClick={handelAddNewTask}>
          Add
        </button>
      )}
    </div>
  );
};

export default EditPage;
