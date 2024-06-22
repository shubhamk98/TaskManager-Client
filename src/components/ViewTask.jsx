import useTaskStore from "../Context/FormContext";

const ViewTask = () => {
  const { title, description, details, dueDate } = useTaskStore();
  return (
    <div className="mx-2 md:mx-10 flex flex-col gap-4 mb-8">
      <h1 className="text-4xl text-yellow-400 font-semibold mt-4">{title}</h1>
      <p className="badge bg-yellow-400 text-gray-900 font-semibold p-4 mb-2">{dueDate.split("T")[0]}</p>
      <p className="text-xl bg-gray-700 p-6 rounded-md">{description}</p>
      <pre className="text-xl text-wrap font-sans bg-gray-700 p-6 rounded-md ">{details}</pre>
    </div>
  );
};

export default ViewTask;
