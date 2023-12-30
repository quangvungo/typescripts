import React, { SetStateAction, useState } from "react";
import cancel from "../../assets/imager/Cancel.svg";
import "../EditTask/style.scss";
import { TTaskList } from "../../utils/types/appTypeList";

type TProps = {
  setOpenEdit: React.Dispatch<SetStateAction<boolean>>;
  setAppTask: React.Dispatch<SetStateAction<TTaskList[] | []>>;
  value: TTaskList;
  taskItemIndex: number;
  appTask: TTaskList[];
};

function EditTask({ setOpenEdit, value, taskItemIndex, setAppTask, appTask }: TProps) {

  const [editState, setEditState] = useState<TTaskList>(value);

  const handleUpdateEditedTaskToAppTask = () => {
    //map appTask
    const newList = appTask.map((item:TTaskList, index:number) => {
      //check dieu kien cho nay
      if(index === taskItemIndex) {
        item.taskName = editState.taskName,
        item.priority = editState.priority
      }
      return {
        ...item,
      }

    })

    setAppTask([...newList]);
    setOpenEdit(false);

    //
  } 

  return (
    <div className="EditTask">
      <div className="EditTask__TaskList">
        <div className="EditTask__TaskList__Title">
          <div className="EditTask__TaskList__Title__addTask">Edit</div>
          <button onClick={() => {setOpenEdit(false)}} className="EditTask__TaskList__Title__btn">
            <img
              src={cancel}
              alt=""
              className="EditTask__TaskList__Title__btn__X"
            />
          </button>
        </div>
        <div className="EditTask__TaskList__Body">
          <div className="EditTask__TaskList__Body__writing">Task</div>
          <div className="">
            <input
              type="text"
              name=""
              id=""
              placeholder="Task Name"
              className="EditTask__TaskList__Body__input"
              value={editState.taskName}
              onChange={(event) => setEditState((prevState) => ({
                ...prevState,
                taskName: event.target.value, //oke
              }))}
            />
          </div>
        </div>
        <div className="EditTask__TaskList__Priority">
          <div className="EditTask__TaskList__Priority__title">Priority</div>
          <div className="EditTask__TaskList__Priority__btn">
            <button
              className="EditTask__TaskList__Priority__btn__High"
              style={{
                color: editState.priority === 'High' ? '#fff' : '#f73446',
                backgroundColor: editState.priority === 'High' ? '#f73446' : '#fff'
              }}
              onClick={() => setEditState((prevState) => {
                return {
                  ...prevState,
                  priority: 'High'
                }
              })}
            >
              High
            </button>
            <button
              className="EditTask__TaskList__Priority__btn__Medium"
              style={{
                color: editState.priority === 'Medium' ? '#fff' : '#ffbd21',
                backgroundColor: editState.priority === 'Medium' ? '#ffbd21' : '#fff'
              }}
              onClick={() => setEditState((prevState) => {
                return {
                  ...prevState,
                  priority: 'Medium'
                  
                }
              })}
            >
              Medium
            </button>
            <button
              className="EditTask__TaskList__Priority__btn__Low"
              style={{
                color: editState.priority === 'Low' ? '#fff' : '#0ac947',
                backgroundColor: editState.priority === 'Low' ? '#0ac947' : '#fff'
              }}
              onClick={() => setEditState((prevState) => {
                return {
                  ...prevState,
                  priority: 'Low'

                }
              })}
            >
              Low
            </button>
          </div>
        </div>
        <div className="EditTask__TaskList__button">
          <button className="EditTask__TaskList__button__Add"
            onClick={() => handleUpdateEditedTaskToAppTask()}
          >Edit</button>
          <button
            onClick={() => {setOpenEdit(false)}}
            className="EditTask__TaskList__button__Cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTask;
