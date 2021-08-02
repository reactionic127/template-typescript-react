import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";

describe('<App />', () => {
    test('render elements without any problem', () => {
        render(<App />);
        const wrapper = screen.getByTestId('app-wrapper');
        expect(wrapper).toBeInTheDocument();
    });

    test('text content is wrong', () => {
        render(<App />);
        const input = screen.getByTestId('app-input');
        expect(input).toBeInTheDocument();

        fireEvent.change(input, { target: { value: "test1" } })
        expect(input).toHaveValue('test');
    });
})
