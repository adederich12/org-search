import React from 'react';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

const Index = () => {
    return (
        <div>
            <Header />
            <p>Perform a search using the input below!</p>
            <SearchForm />
        </div>
    );
};

export default Index;