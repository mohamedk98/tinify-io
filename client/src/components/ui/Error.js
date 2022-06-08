import React from "react";
//Error message component
function Error(props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="/imgs/sad_baby.png" className={props.imgClasses} alt="error" />
      <p className={props.messageClasses}>{props.message}</p>
      <p className={props.submessageClasses} onClick={() => props.onClick()}>
        {props.submessage}
      </p>
    </div>
  );
}

export default Error;
