import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchForm from './SearchForm';
import userData from '../data/users.json';
import orgData from '../data/organizations.json';
import ticketData from '../data/tickets.json';

describe('ErrorDisplay', () => {
  it('should display an error if search results are empty', () => {
    const wrapper = mount(<SearchForm />);

    wrapper.setState({
      emptyResult: true
    });

    expect(wrapper.find('.alert').exists()).toBe(true);
  });

  it('should not display an error when there are search results', () => {
    const wrapper = mount(<SearchForm />);

    wrapper.setState({
      emptyResult: false
    });

    expect(wrapper.find('.alert').exists()).toBe(false);
  });
});

describe('SearchResultSummary', () => {
  it('should be displayed when there are results', () => {
    const wrapper = mount(<SearchForm />);

    wrapper.setState({
      results: [
        {
          tags: ['result1']
        },
        {
          tags: ['result2']
        }
      ]
    });

    expect(wrapper.find('.result-summary').exists()).toBe(true);
  });

  it('should not be displayed when there are no results', () => {
    const wrapper = mount(<SearchForm />);

    wrapper.setState({
      results: []
    });

    expect(wrapper.find('.result-summary').exists()).toBe(false);
  });
});

describe('SearchForm', () => {
  describe('constructor', () => {
    it('should set an initial state', () => {
      const wrapper = shallow(<SearchForm />);
      const expectedMock = {
        'user': userData,
        'organization': orgData,
        'ticket': ticketData,
      }

      const startingState = wrapper.state();

      expect(startingState.mockData).toEqual(expectedMock);
      expect(startingState.emptyResult).toEqual(false);
      expect(startingState.results.length).toEqual(0);
    });
  });

  describe('getInputTemplate', () => {
    it('should return a blank input state object', () => {
      const wrapper = mount(<SearchForm />);

      wrapper.setState({
        mockData: {
          'ticket': [
            {
              'field1': 0,
              'field2': 0,
            }
          ]
        }
      });

      const newInput = wrapper.instance().getInputTemplate();
      const expectedInput = {
        searchBy: 'ticket',
        searchField: 'field1',
        searchQuery: '',
        searchEmpty: false,
        availableFields: ['field1','field2'] 
      };

      expect(newInput).toEqual(expectedInput);
    });
  });

  describe('joinMockData', () => {
    it('should join object id to related data', () => {
      const wrapper = mount(<SearchForm />);
      const newMockData = {
        user: [{
          _id: '1',
          name: 'Fred',
        }],
        organization: [{
          _id: '1',
          name: 'Megacorp'
        }],
        ticket: [{
          _id: '123',
          subject: 'New ticket',
          organization_id: '1',
          assignee_id: '1',
          submitter_id: '1',
        }]
      };
      const expectedJoin = [{
        _id: '123',
        subject: 'New ticket',
        organization_id: '1',
        assignee_id: '1',
        submitter_id: '1',
        organization: {
          _id: '1',
          name: 'Megacorp'
        },
        assignee: {
          _id: '1',
          name: 'Fred',
        },
        submitter: {
          _id: '1',
          name: 'Fred',
        }
      }];

      wrapper.setState({
        mockData: newMockData
      });

      const results = wrapper.instance().joinMockData();

      expect(results).toEqual(expectedJoin);
    });
  });

  describe('fetchResultData', () => {
    it('filters results based on current input states', () => {
      const wrapper = mount(<SearchForm />);
      wrapper.setState({
        inputStates: [{
          searchBy: 'ticket',
          searchField: '_id',
          searchQuery: '1',
          searchEmpty: false,
          availableFields: ['_id']
        }]
      });

      const results = wrapper.instance().fetchResultData();

      expect(results.length).toEqual(12);
      expect(results[0].subject).toEqual('A Catastrophe in Micronesia');
    });
  });

  describe('searchFieldChange', () => {
    it('updates the input state when a field value changes', () => {
      const wrapper = mount(<SearchForm />);
      wrapper.setState({
        inputStates: [{
          searchBy: 'ticket',
          searchField: '_id',
          searchQuery: '1',
          searchEmpty: false,
          availableFields: ['_id']
        }]
      });

      wrapper.find('input').at(0).simulate('change', { target: { name: 'searchQuery_0', value: '123'}});

      const currentState = wrapper.state();
      
      expect(currentState.inputStates[0].searchQuery).toEqual('123');
    });
  });
});
