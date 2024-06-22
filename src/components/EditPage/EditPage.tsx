import React, { useState } from "react";
import DatePickerComponent from "./DatePicker";
import useTaskStore from "../../Context/FormContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

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
      title: title,
      description: description,
      details: details,
      dueDate: dueDate.toISOString(),
    };
    console.log(data);
    
    resetTask();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/newTask`,data);
      navigate('/');
    } catch (error) {
      console.error("Error editing task:", error);
      console.log('Error response:', error.response);
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
      <button className="btn btn-accent my-4" onClick={handelSaveBtn}>
        Save
      </button>
    </div>
  );
};

export default EditPage;
