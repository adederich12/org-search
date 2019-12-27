import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders a header component', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/simple search app for zendesk/i);
    expect(headerElement).toBeInTheDocument();
  });
  
  it('renders a search form component', () => {
    const { getByText } = render(<App />);
    const formElement = getByText(/please enter search criteria/i);
    expect(formElement).toBeInTheDocument();
  });
});
