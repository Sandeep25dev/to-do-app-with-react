"use client";

import React, { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState<any>([]);

  function handleSubmit(event: any) {
    event.preventDefault();
    setMainTask([...mainTask, { title, description }]);
    setTitle("");
    setDescription("");
  }
  function handleCloseBtn(taskIndex: any) {
    let copyTask = [...mainTask];
    copyTask.splice(taskIndex, 1);
    setMainTask(copyTask);
  }

  let renderTask = <h2 className="font-semibold">No task available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t: any, i: number) => {
      return (
        <li key={i}>
          <div className="flex justify-between mb-5">
            <h2 className="text-xl font-semibold">
              {i + 1}. {t.title}
            </h2>
            <h3 className="text-xl font-semibold">{t.description}</h3>
            <button
              onClick={() => handleCloseBtn(i)}
              className="text-xxl cursor-pointer"
            >
              ❌
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="heading bg-black text-white p-5 text-5xl font-bold text-center">
        Todo List
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="input"
          className="text-2xl border-zinc-800 border-2 rounded-xl m-5 py-3 px-4"
          placeholder="Enter your task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="text"
          id="input"
          className="text-2xl border-zinc-800 border-2 rounded-xl m-5 pt-3 pb-20 px-4"
          placeholder="Enter description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button className="bg-black text-white font-bold border-black-100 rounded-xl border-2  p-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-10 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}
