import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('render elements without any problem', () => {
    render(<App />);
    const wrapper = screen.getByTestId('app-wrapper');
    expect(wrapper).toBeInTheDocument();

    const input = screen.getByTestId('app-input');
    expect(input).toBeInTheDocument();
  });
})
