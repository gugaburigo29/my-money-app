import React from 'react'

export default props => (
    <li>
        <a href={props.path.toString()}>
            <i className={`fa fa-${props.icon}`}/>
            {props.label}
        </a>
    </li>
)
