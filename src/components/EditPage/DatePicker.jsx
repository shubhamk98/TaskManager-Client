import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useTaskStore from "../../Context/FormContext";

const DatePickerComponent = () => {
  const { setDueDate ,dueDate} = useTaskStore();
  const [startDate, setStartDate] = useState(dueDate);

  useEffect(() => {
    setStartDate(startDate); 
    setDueDate(startDate);
  }, [setDueDate, startDate]);





  const today = new Date();

  return (
    <DatePicker
      showYearDropdown
      selected={startDate}
      onChange={(date)=>setStartDate(date)}
      minDate={today}
      popperPlacement="bottom-start"
      className="bg-transparent p-2 border-[1px] rounded-md border-gray-600"
    />
  );
};

export default DatePickerComponent;
