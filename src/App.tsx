import { useState } from 'react'
import './App.css'
import {Main} from "./view/main/Main.tsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./app-routes.tsx";

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
