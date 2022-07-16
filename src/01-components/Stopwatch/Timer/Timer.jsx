import React from "react";

export const Timer = (props) => {

    return (<div>
             <span>
        {("0" + Math.floor((props.time / 1440000) % 240)).slice(-2)}:
      </span>
      <span>
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
            <span>
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
      </span>
        </div>
    );
}