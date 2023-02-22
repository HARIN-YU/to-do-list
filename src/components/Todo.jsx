import { useState } from 'react';
import { FaRegTimesCircle } from "react-icons/fa";
import styled from 'styled-components';

const DateH1= styled.h1`
    text-align: center;
    margin: 10px 10px 20px 10px;
    font-size: 20px;
    font-weight: bold;
`

const ToDoForm = styled.form`
    display: flex;
    justify-content: center;
`

const AddButton = styled.button`
    background-color: #485EC6;
    margin-left: 5px;
    padding: 2px;
    color: white;
    border: 1px solid #485EC6;
`
const ToDoLi = styled.li`
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
`

function Todo() {
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos(currentArray => [toDo, ...currentArray]);
        setToDo("");
    };
    const onClick = (event) => {
        const li = event.target.parentElement;
        li.remove();
    }
    return (
    <div>
        <DateH1>{`${new Date().getFullYear()}년 ${new Date().getMonth()+1}월 ${new Date().getDate()}일`}</DateH1>
        <ToDoForm onSubmit={onSubmit}>
            <input
                onChange={onChange}
                value={toDo}
                type="text"
                placeholder='Write your to do...'/>
            <AddButton>Add To Do</AddButton>
        </ToDoForm>
        <hr />
        <ul>
            {toDos.map((item, index) => (
                <ToDoLi key={index}>{item}&nbsp;
                    <button onClick={onClick}>❌</button>                    
                </ToDoLi>
            ))}
        </ul>
    </div>
    );
}

export default Todo;

