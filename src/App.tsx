import { useState } from "react";
import "./App.scss";
import plusIcon from "./assets/icons/plus_icon.svg";
import TaskItem from "./components/TaskItem";
import { TTaskList } from "./utils/types/appTypeList";
import AddTask from "../src/components/AddTask";

function App() {
  //fake data
  // const taskList: TTaskList[] = [
  //   {
  //     taskName: "Go to Gym1",
  //     priority: "High",
  //     status: "To do",
  //     statusProcess: "To do",
  //   },
  //   {
  //     taskName: "Go to Gym2",
  //     priority: "Medium",
  //     status: "In Process",
  //     statusProcess: "In Process",
  //   },
  //   {
  //     taskName: "Go to Gym3",
  //     priority: "Low",
  //     status: "Done",
  //     statusProcess: "Done",
  //   },
  // ];
  const [appTasks, setAppTask] = useState<TTaskList[]>([]);

  const [selectedTaskItem, setSelectedTaskItem] = useState<TTaskList | null>(
    null
  );

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="app">
      <div className="app__Container">
        <div className="app__Header">
          <div className="app__Header__Title">
            <h1>Task List</h1>
          </div>
          <div className="app_Header__AddBtn">
            <button
              onClick={() => setOpenModal(true)}
              className="app__Header__AddBtn__Btn"
            >
              <div className="app__Header__AddBtn__Btn__model">
                <img
                  src={plusIcon}
                  alt="plusIcon"
                  className="app__Header__AddBtn__Btn__image"
                />
              </div>
              <span className="app__Header__AddBtn__Text">Add task</span>
            </button>
          </div>
        </div>
        <div className="app__TaskBody">
          {appTasks.map((item: TTaskList, index: number) => (
            <TaskItem
               taskItemIndex={index}
              setSelectedTaskItem={setSelectedTaskItem}
              value={item}
              index={index}
              setAppTask={setAppTask}
              key={index}
              appTask={appTasks}
            />
          ))}
        </div>
        {openModal && (
          <AddTask closeModal={setOpenModal} setAppTask={setAppTask} appTask={appTasks}></AddTask>
        )}
      </div>
    </div>
  );
}

export default App;
