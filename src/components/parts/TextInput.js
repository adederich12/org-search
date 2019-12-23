import React from 'react';

const TextInput = props => (
    <label>
        {props.inputLabel}
        <input
            type="text"
            name={props.inputName}
            value={props.inputVal}
            placeholder={props.inputPlaceholder}
        />
    </label>
);

export default TextInput