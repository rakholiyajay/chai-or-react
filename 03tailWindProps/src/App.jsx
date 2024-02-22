import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  //passing the value in the props
  //pass the object
  let myObj = {
    userName: "jay",
    age: 21,
  };
  //pass the array
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card
        userName="chaiaurcode"
        btntext="clickMe"
        img="https://images.unsplash.com/photo-1696176559416-ef8d7115e3ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        userName="Jay"
        img="https://images.unsplash.com/photo-1696176559269-c944fb2ec40f?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </>
  );
}

export default App;
