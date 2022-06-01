import React, { useState } from 'react'
import ListDisplay from './ListDisplay'

const Main = () => {

    const [task, setTask] = useState('')
    const [category, setCategory] = useState('')
    const [list, setList] = useState([])

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setList([...list, {task: task, category: category}])
        setTask('')
    }

    return (
        <div id='main'>
            <form id='item-form' onSubmit={(e) => handleSubmit(e)}>
               <div id='input'>
                <input type='text' placeholder='task' onChange={handleChange} value={task}></input>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option defaultValue disabled selected>category</option>
                    <option value='chores'>Chores</option>
                    <option value='errands' >Errands</option>
                    <option value='work'>Work</option>
                </select>
               </div>
                <button type='submit'>Add</button>
            </form>
            <ListDisplay list={list} setList={setList}/>
        </div>
    )
}

export default Main