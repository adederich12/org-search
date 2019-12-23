import React from 'react';
import ResultItem from './parts/ResultItem';
import userData from '../data/users.json';
import orgData from '../data/organizations.json';
import ticketData from '../data/tickets.json';

function ErrorDisplay(props) {
  if (!props.validation && !props.empty) {
    return null;
  }

  return (
    <div className="alert alert-danger">
      There were no search results
    </div>
  );
}

function SearchResultSummary(props) {
  if (props.data.length < 1) {
    return null;
  }

  return (
    <div className="result-summary">
      <div className="result-count">
        Total results found: {props.data.length}
      </div>
    </div>
  );
}

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    // normally we'd be fetching data from API, but for this task I've got some static JSON
    const mockData = {
        'user': userData,
        'organization': orgData,
        'ticket': ticketData
    }

    this.state = {
        mockData: mockData,
        searchType: 'ticket',
        searchField: "",
        searchValue: null,
        availableFields: [],
        invalidInput: false,
        emptyResult: false,
        results: [],
    };

    this.searchTypeChange = this.searchTypeChange.bind(this);
  }

  fetchResultData() {
    // if i were using API calls instead of mock JSON data, that would be happening here =)
    this.setState({
        results: []
    });
  }

  searchTypeChange(event) {
    this.setState({
        availableFields: Object.keys(this.state.mockData[event.target.value][0])
    });
  }

  searchFieldChange(event) {
    this.setState({
        searchField: Object.keys(this.state.mockData[event.target.value][0])
    });
  }

  componentDidMount() {
        // make sure values are set once the app is loaded
        const fieldKeys = Object.keys(this.state.mockData['ticket'][0]);
        this.setState({
            availableFields: fieldKeys,
            searchField: fieldKeys[0]
        });
  }

  render() {
    return (
      <div className="search-form">
        <ErrorDisplay empty={this.state.emptyResult} />
        <h4>Please enter search criteria</h4>
        <form>
            <div className="form-group">
                <select id="searchBy" onChange={this.searchTypeChange}>
                    <option value="ticket">Tickets</option>
                    <option value="user">Users</option>
                    <option value="organization">Organization</option>
                </select>
            </div>
            <div className="form-group">
                <select id="searchField" onChange={this.searchFieldChange}>
                    {this.state.availableFields.map(field => <option value={field}>{field}</option>)}
                </select>
            </div>
            <div className="form-group">
                <input type="text" id="searchQuery" placeholder={"Search by "+this.state.searchField} value={this.state.searchValue} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <input type="submit" value="Search" />
            </div>
        </form>
        <div className="search-result">
          {this.state.results.map(result => <ResultItem data={result} />)}
        </div>
        <SearchResultSummary data={this.state.results} />
      </div>
    );
  }
}

export default SearchForm;