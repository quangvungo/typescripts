import React, { SetStateAction } from "react";
import "../TaskItem/style.scss";
import loadingTaskZero from "../../assets/icons/loadingzero.svg";
import loadingTaskHalf from "../../assets/icons/loadinghalf.svg";
import loadingTaskFull from "../../assets/icons/loadingfull.svg";
import editTask from "../../assets/imager/edit_icon.svg";
import deleteTask from "../../assets/imager/delete_icon.svg";
import { TTaskList } from "../../utils/types/appTypeList";
import { useState } from "react";
import EditTask from "../EditTask";
import Delete from "../Delete";

type TProps = {
  setSelectedTaskItem: React.Dispatch<SetStateAction<TTaskList | null>>;
  value: TTaskList;
  index: number;
  taskItemIndex: number;
  setAppTask: React.Dispatch<SetStateAction<TTaskList[] | []>>;
  appTask: TTaskList[];
};

function TaskItem({ value, index, appTask, setAppTask,taskItemIndex }: TProps) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleDeleteItem = (itemIndex: number) => {
    const afterDeleted = appTask.filter((_item, index) => itemIndex !== index);
    setAppTask(afterDeleted);
    setOpenDelete(false);
  };
  const toggleStatus = (value: TTaskList) => {
    let newProgress: string;
  
    if (value.status === 'To do') {
      newProgress = 'In Process';
    } else if (value.status === 'In Process') {
      newProgress = 'Done';
    } else if (value.status === 'Done') {
      newProgress = 'To do';
    } else {
      newProgress = 'To do';
    }
  
    const updatedTaskListProgress: TTaskList[] = appTask.map((item: TTaskList, index: number) =>
      index === taskItemIndex ? { ...item, status: newProgress } : item
    );
    
    setAppTask(updatedTaskListProgress);
  };
  console.log(toggleStatus)
  return (
    <div className="item__Container">
      <div className="item__Task__Left">
        <div className="item__Task__Left__Task">
          <p className="item__Task__Left__Task__Name">Task</p>
          <p className="item__Task__Left__Task__Value">{value.taskName}</p>
        </div>
        <div className="item__Task__Priority">
          <p>Priority</p>
          <h3
            className="item__Task__Priority__High"
            style={{
              color:
                value.priority.toLowerCase() === "high"
                  ? "#F73446"
                  : value.priority.toLowerCase() === "medium"
                  ? "#FFBD21"
                  : "#0AC947",
            }}
          >
            {value.priority}
          </h3>
        </div>
      </div>
      <div className="item__Task__Right">
        <div className="item__Task__Status">
          <p onClick={() => toggleStatus(value)}>{value.status}</p>
        </div>
        <div className="item__Task__SubStatus">
          <img
            src={
              value.status.toLowerCase() === "to do"
                ? loadingTaskZero
                : value.status.toLowerCase() === "in process"
                ? loadingTaskHalf
                : loadingTaskFull
            }
            alt="loading"
          />
        </div>
        <div className="item__Task__Edit">
          <img onClick={() => setOpenEdit(true)} src={editTask} alt="edit" />
        </div>
        <div onClick={() => setOpenDelete(true)} className="item__Task__Delete">
          <img src={deleteTask} alt="delete" />
        </div>
      </div>

      {openDelete && (
        <Delete
          setOpenDelete={setOpenDelete}
          deleteMethod={() => handleDeleteItem(index)}
        ></Delete>
      )}
      {openEdit && 
        <EditTask
          setOpenEdit={setOpenEdit}
          value={value}
          taskItemIndex={index}
          setAppTask={setAppTask}
          appTask={appTask}
        ></EditTask>}
    </div>
  );
}

export default TaskItem;
