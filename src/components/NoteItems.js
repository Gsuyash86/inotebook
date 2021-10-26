/* eslint-disable react/style-prop-object */
import React from "react";

const NoteItems = ({ note }) => {
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description} yes yesyesyesyesyesyesyes yes yesyesyesyesyes
            yesyes yesyes yes yesyes yesyes yes yesyesyes yes yesyes yesyes
            yesyes yesyes yes yes yes yesyesyesyesyes yes yes yes yesyes yes yes
            yes yes yesyesyes yes yesyes yesyes yes
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItems;
