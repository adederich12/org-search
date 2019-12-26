import React from 'react';
import _ from 'lodash';
import ResultItem from './parts/ResultItem';
import InputGroup from './parts/InputGroup';
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
        inputCount: 0,
        inputStates: [],
        emptyResult: false,
        results: [],
    };

    this.searchFieldChange = this.searchFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this just puts together a starting input group object
  getInputTemplate() {
    const ticketKeys = Object.keys(this.state.mockData['ticket'][0]);
    return {
      searchBy: "ticket",
      searchField: ticketKeys[0],
      searchQuery: "",
      searchEmpty: false,
      availableFields: ticketKeys 
    }
  }

  // this will join the mock data on fields that could be considered foreign keys in a relational database
  joinMockData() {
    const userSet = [];
    const joinedSet = [];

    this.state.mockData['user'].forEach(user => {
      user.organization = _.find(this.state.mockData['organization'], { '_id': user.organization_id });
      userSet.push(user);
    });

    this.state.mockData['ticket'].forEach(ticket => {
      ticket.submitter = _.find(userSet, { '_id': ticket.submitter_id });
      ticket.assignee = _.find(userSet, { '_id': ticket.assignee_id });
      ticket.organization = _.find(this.state.mockData['organization'], { '_id': ticket.organization_id });

      joinedSet.push(ticket);
    });

    return joinedSet;
  }

  // if i were using API calls instead of mock JSON data, that would be happening here =)
  fetchResultData() {
    let resultSet = this.joinMockData();

    this.state.inputStates.forEach(searchCondition => {
      const emptySearch = searchCondition.searchEmpty;
      
      // run through the search criteria and filter out the list of results
      resultSet = _.filter(resultSet, function(resultItem) {
        switch(searchCondition.searchBy) {
          case 'ticket':
            if (emptySearch) {
              return resultItem[searchCondition.searchField] === "" || resultItem[searchCondition.searchField] === undefined;
            }
            return resultItem[searchCondition.searchField].toLowerCase().startsWith(searchCondition.searchQuery);
          case 'user':
            // yuck, this is a bit longer than i'd like
            let subMatch = resultItem.submitter && resultItem.submitter[searchCondition.searchField].toLowerCase().startsWith(searchCondition.searchQuery);
            // haha
            let assMatch = resultItem.assignee && resultItem.assignee[searchCondition.searchField].toLowerCase().startsWith(searchCondition.searchQuery);
            return subMatch || assMatch;
          case 'organization':
            let orgMatch = resultItem.organization && resultItem.organization[searchCondition.searchField].toLowerCase().startsWith(searchCondition.searchQuery);
            return orgMatch;
          default: 
            return false;
        }
      });
    });

    return resultSet;
  }

  searchFieldChange(event) {
    const targetInput = event.target;
    const updatedStates = this.state.inputStates;
    // this identity will be the field name and input group index
    const inputIdentity = targetInput.id.split('_');
    const isCheckbox = (targetInput.type === 'checkbox');

    // lets check if the available fields need to be updated
    if (inputIdentity[0] === 'searchBy') {
      updatedStates[inputIdentity[1]]['availableFields'] = Object.keys(this.state.mockData[targetInput.value][0]);
    }

    // if this input group index is already present in the input states
    if (updatedStates[inputIdentity[1]]) {
      updatedStates[inputIdentity[1]][inputIdentity[0]] = isCheckbox ? targetInput.checked : targetInput.value;
    } else { //otherwise we need to add it along with the new field values
      const newInput = {};
      newInput[inputIdentity[0]] = isCheckbox ? targetInput.checked : targetInput.value;
      updatedStates[inputIdentity[1]] = newInput;
    }

    console.log(updatedStates);

    this.setState({
        inputStates: updatedStates
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const resultSet = this.fetchResultData();

    this.setState({
      emptyResult: (resultSet.length < 1),
      results: resultSet
    });
  }

  componentDidMount() {
    this.setState({
      inputStates: [this.getInputTemplate()]
    })
  }

  render() {
    return (
      <div className="search-form">
        <ErrorDisplay empty={this.state.emptyResult} />
        <h4>Please enter search criteria</h4>
        <form onSubmit={this.handleSubmit}>
          {this.state.inputStates.map((inputGroup, index) => 
                                                    <InputGroup 
                                                      {...inputGroup} 
                                                      changeFunc={this.searchFieldChange.bind(this)}
                                                      inputIndex={index}
                                                      key={index} />
                                                    )}
          <div className="form-group">
              <input type="submit" value="Search" />
          </div>
        </form>
        <SearchResultSummary data={this.state.results} />
        <div className="search-result">
          {this.state.results.map((resultItem, index) => <ResultItem {...resultItem} key={index} />)}
        </div>
      </div>
    );
  }
}

export default SearchForm;