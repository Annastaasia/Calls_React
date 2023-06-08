import React from "react";
import "./progress.scss";

export default function Progress(props) {
  return (
    <div className="bar">
      <div className={`progress ${props.theme.progress}`}></div>
    </div>
  );
}
