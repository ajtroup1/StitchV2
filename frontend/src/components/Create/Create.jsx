import { useState } from "react";
import "../../css/Create.css";

function Create() {
  return (
    <div className="create-main">
      <div className="top-create">
        <div className="top-create-left">
          <p>Title</p>
          <input
            type="text"
            className="form-control create-title-input"
            placeholder="Enter title..."
          />
          <div className="top-create-left-inner">
            <p style={{ paddingTop: "20px" }}>Private: </p>
            <input type="checkbox" className="form-check-input" />
          </div>
        </div>
        <div className="top-create-right">
          <p>Description</p>
          <textarea
            type="text"
            className="form-control create-description-input"
          />
        </div>
      </div>
      <div className="create-divider"></div>
      <div className="appending-create">
        <p>Existing story</p>
        <textarea type="text" className="form-control create-story-input" />
      </div>
      <div className="create-divider"></div>
      <div className="appending-create">
        <p>Enter your story here</p>
        <textarea type="text" className="form-control create-story-input" />
      </div>
    </div>
  );
}

export default Create;
