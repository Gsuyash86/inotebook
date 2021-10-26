/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "617726cc7c05099839c5c54e",
      user: "617726627c05099839c5c542",
      title: "Something",
      description: "My Titile book",
      tag: "Personal",
      date: "2021-10-25T21:51:08.679Z",
      __v: 0,
    },
    {
      _id: "617853884c613b609ad6de0f",
      user: "617726627c05099839c5c542",
      title: "My Other Notes",
      description: "Hard coding for now",
      tag: "Personal",
      date: "2021-10-26T19:14:16.963Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
