import React, { useContext } from "react";
import noteContext from "../context/Notes/noteContext";
import NoteItems from "./NoteItems";

export default function Notes() {
  const { notes, useNotes } = useContext(noteContext);
  return (
    <div className="row my-3">
      <h2>You Notes</h2>
      {notes.map((note) => {
        return <NoteItems note={note} />;
      })}
    </div>
  );
}
