import React from 'react';

function InputGroup(props) {
    return (
        <div className="form-group">
            <select className="search-type" id={"searchBy_"+props.inputIndex} onChange={props.changeFunc}>
                <option value="ticket">Tickets</option>
                <option value="user">Users</option>
                <option value="organization">Organization</option>
            </select> => 
            <select className="search-field" id={"searchField_"+props.inputIndex} onChange={props.changeFunc}>
                {props.availableFields.map((field, key) => <option value={field} key={key}>{field}</option>)}
            </select> =>
            <input type="text" className="search-query" id={"searchQuery_"+props.inputIndex} placeholder={"Search by "+props.searchField} value={props.searchValue} onChange={props.changeFunc} />
            Empty field?
            <input type="checkbox" className="search-empty" id={"searchEmpty_"+props.inputIndex} checked={props.searchEmpty} onChange={props.changeFunc} />
        </div>
    );
}

export default InputGroup;