import React from 'react'

function TodoList(props){
    return <React.Fragment key={props.key}>
        <li>{props.text}</li>
        <button onClick={props.delete}>delete</button>
    </React.Fragment>
}

export default TodoList