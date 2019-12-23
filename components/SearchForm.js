import React from 'react';
import TextInput from './parts/TextInput';

class SearchForm extends React.Component {
    render() {
        return (
            <form id="searchForm" onSubmit="">
                <TextInput 
                    inputLabel="Search by Name"
                    inputVal="Search"
                    inputRef="nameSearch"
                    inputPlaceholder="Search by name..."
                />
                <input
                    type="submit"
                    value="Search"
                />
            </form>
        );
    }
}

export default SearchForm;