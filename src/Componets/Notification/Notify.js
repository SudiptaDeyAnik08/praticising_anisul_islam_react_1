import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Notify =()=>{

    const handleAddNewTodo=()=>{
        toast("New todo is addes")
    }

    return(
        <div>
            <h2>Todo App</h2>
            <button onClick={handleAddNewTodo}>Add new Todo</button>

            <ToastContainer> </ToastContainer>
        </div>
    )
}

export default Notify;