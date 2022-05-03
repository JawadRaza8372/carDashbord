import React from "react";
import "./ButtonsDiv.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function ButtonsDiv({ deltFun, morefunct }) {
  return (
    <div className="btnsDivs">
      {deltFun && (
        <button onClick={deltFun}>
          <DeleteIcon className="iconclas" />
        </button>
      )}
      {morefunct && (
        <button onClick={morefunct}>
          <MoreHorizIcon className="iconclas" />
        </button>
      )}
    </div>
  );
}

export default ButtonsDiv;
