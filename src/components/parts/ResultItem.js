import React from 'react';

const ResultItem = props => (
    <div className="search-result-item">
      <div className="name">
        {props.data.countryName}
      </div>
    </div>
);

export default ResultItem