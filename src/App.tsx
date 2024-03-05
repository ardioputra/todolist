import { Routes, Route } from "react-router-dom";
import ToDoList from "./pages/home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/ToDoList/" element={<ToDoList />} />
      </Routes>
    </>
  );
}
