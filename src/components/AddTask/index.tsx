import "../AddTask/style.scss";
import React, { SetStateAction, useEffect, useState } from "react";
import cancel from "../../assets/imager/Cancel.svg";
import { TTaskList } from "../../utils/types/appTypeList";

type TProps = {
  closeModal: React.Dispatch<SetStateAction<boolean>>;
  setAppTask: React.Dispatch<SetStateAction<TTaskList[] | []>>;
  appTask: TTaskList[] | [];
};
//a
function AddTask({ closeModal, setAppTask, appTask }: TProps) {
  const [task, setTask] = useState<TTaskList | null>(null);

  const [taskName, setTaskName] = useState<string | null>(null);
  const [priority, setPriority] = useState<"High" | "Medium" | "Low" | null>(
    null
  );
  useEffect(() => {
    setTask({
        taskName: taskName!,
        priority: priority!,
        status: 'To do',
        statusProcess: 'To do'
    })
  }, [taskName, priority])

  const handleAddTask = () => {
    //noited
   if(task && task.priority && task.taskName) {
    setAppTask([...appTask, task]);
    closeModal(false);
   } else {
    alert('Task name and Task Priority is required!')
   }
  }

  return (
    <div className="AddTask">
      <div className="AddTask__TaskList">
        <div className="AddTask__TaskList__Title">
          <div className="AddTask__TaskList__Title__addTask">Add Task</div>
          <button
            onClick={() => closeModal(false)}
            className="AddTask__TaskList__Title__btn"
          >
            <img
              src={cancel}
              alt=""
              className="AddTask__TaskList__Title__btn__X"
            />
          </button>
        </div>
        <div className="AddTask__TaskList__Body">
          <div className="AddTask__TaskList__Body__writing">Task</div>
          <div className="">
            <input
              type="text"
              name=""
              id=""
              placeholder="Task Name"
              className="AddTask__TaskList__Body__input"
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
        </div>
        <div className="AddTask__TaskList__Priority">
          <div className="AddTask__TaskList__Priority__title">Priority</div>
          <div className="AddTask__TaskList__Priority__btn">
            <button
              className="AddTask__TaskList__Priority__btn__High"
              style={{
                backgroundColor: priority === "High" ? "#F73446" : "#FFF",
                color: priority === "High" ? "#fff" : "#F73446",
              }}
              onClick={() => setPriority("High")}
            >
              High
            </button>
            <button
              className="AddTask__TaskList__Priority__btn__Medium"
              style={{
                backgroundColor: priority === "Medium" ? "#FFBD21" : "#FFF",
                color: priority === "Medium" ? "#fff" : "#FFBD21",
              }}
              onClick={() => setPriority("Medium")}
            >
              Medium
            </button>
            <button
              className="AddTask__TaskList__Priority__btn__Low"
              style={{
                backgroundColor: priority === "Low" ? "#0AC947" : "#FFF",
                color: priority === "Low" ? "#fff" : "#0AC947",
              }}
              onClick={() => setPriority("Low")}
            >
              Low
            </button>
          </div>
        </div>
        <div className="AddTask__TaskList__button">
          <button className="AddTask__TaskList__button__Add"
            onClick={() => handleAddTask()}
          >Add</button>
          <button
            onClick={() => closeModal(false)}
            className="AddTask__TaskList__button__Cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
