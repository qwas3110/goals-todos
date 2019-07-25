import React from 'react';


export default function List(props) {
    return (
        <ul>
            {
                props.item.map((item) => (
                    <li key={item.id}>
                        <span
                            onClick={() => props.toggle && props.toggle(item.id)}
                            style={{textDecoration: item.complete ? 'line-through' : 'none'}}
                            >
                        </span>
                        <button onClick={() => props.remove(item)}>X</button>
                    </li>
                ))
            }
        </ul>
    )
}
