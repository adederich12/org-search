import React from 'react';

const TextInput = props => (
    <label>
        {props.inputLabel}
        <input
            type="text"
            value={props.inputVal}
            ref={props.inputRef}
            placeholder={props.inputPlaceholder}
        />
    </label>
);

export default TextInput