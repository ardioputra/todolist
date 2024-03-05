import React, { useState } from "react";
import "/src/App.css";

export default function ToDoList() {
    const [doneCount, setDoneCount] = useState(0);
  
    function addTask() {
      const inputBox = document.getElementById("input-box") as HTMLInputElement;
      const listContainer = document.getElementById(
        "list-container"
      ) as HTMLInputElement;
  
      if (!inputBox) {
        alert("Input box not found");
        return;
      }
  
      if (inputBox?.value === "") {
        alert("There is no task to add");
      } else {
        const li = document.createElement("li");
  
        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
  
        // Create a separate span element for the text content
        const textElement = document.createElement("span");
        textElement.textContent = inputBox?.value;
  
        // Create a button for removing the task
        const removeButton = document.createElement("button");
        removeButton.textContent = "\u00d7";
        removeButton.addEventListener("click", () => removeTask(li));
  
        // Append elements to the list item
        li.appendChild(input);
        li.appendChild(textElement);
        li.appendChild(removeButton);
  
        // Append the list item to the list container
        listContainer?.appendChild(li);
  
        input.addEventListener("change", handleCheckboxChange);
      }
  
      inputBox.value = "";
      updateDoneCount(); // Update the Done count after adding a task
    }
  
    function handleCheckboxChange() {
      updateDoneCount();
    }
  
    function updateDoneCount() {
      const checkboxes = document.querySelectorAll(
        'input[type="checkbox"]'
      ) as NodeListOf<HTMLInputElement>;
      let count = 0;
  
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          count++;
        }
      });
  
      setDoneCount(count);
    }
  
    function removeTask(li: Node) {
      const listContainer = document.getElementById("list-container");
      listContainer?.removeChild(li);
      updateDoneCount(); // Update the Done count after removing a task
    }
  
    function handleEnterKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
      if (event.key === "Enter") {
        addTask();
      }
    }
  
    return (
      <>
        <h1 className="p-6">To Do List</h1>
        <ul id="list-container">
          {/* List items will be dynamically added here */}
        </ul>
        <hr />
        <h2 className="text-bold text-2xl p-6"> Count: {doneCount} </h2>
        <div className="text-left">
          <p>Add ToDo</p>
          <input
            id="input-box"
            type="text"
            className="border border-gray-300 block w-full p-2"
            onKeyDown={handleEnterKeyPress}
          />
          <button id="addTask" onClick={addTask}>
            Add Task
          </button>
        </div>
      </>
    );
  }