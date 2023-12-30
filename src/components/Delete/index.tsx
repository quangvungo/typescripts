import React, { SetStateAction } from "react";
import "./style.scss";

type TProps = {
  setOpenDelete: React.Dispatch<SetStateAction<boolean>>;
  deleteMethod: () => void;
}

function Delete({setOpenDelete, deleteMethod}:TProps) {
  
  return (
    <div className="Delete">
      <div className="Delete__TaskList">
        <div className="Delete__TaskList__Title">
          Are you sure you want to delete this task?
        </div>
        <div className="Delete__TaskList__btn">
          <button onClick={()=>{deleteMethod()}} className="Delete__TaskList__btn__Delete">Delete</button>
          <button
            onClick={() => {setOpenDelete(false)}}
            className="Delete__TaskList__btn__Cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
