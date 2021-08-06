import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './App';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";

describe('String Calculator', () => {
    test('Given the user input is empty when calculating the sum then it should return zero.', () => {
        const calculator = new Calculator();
        const expected = 0;
        const result = calculator.sum();
        expect(result).toBe(expected);
    });
    test('Given the user input is one number when calculating the sum then it should return the same number. (example "3" should equal 3)', () => {
        const calculator = new Calculator();
        const expected = 3;
        const result = calculator.sum("3");
        expect(result).toBe(expected);
    });
    test('Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3)', () => {
        const calculator = new Calculator();
        const expected = 3;
        const result = calculator.sum("1,2");
        expect(result).toBe(expected);
    });
    test('Given the user input is an unknown amount of numbers when calculating the sum then it should return the sum of all the numbers. (example "1,2,3" should equal 6)', () => {
        const calculator = new Calculator();
        const expected = 6;
        const result = calculator.sum("1,2,3");
        expect(result).toBe(expected);
    });
    test('Given the user input is multiple numbers with new line and comma delimiters when calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" should equal 6)', () => {
        const calculator = new Calculator();
        const expected = 6;
        const result = calculator.sum("1\n2,3");
        expect(result).toBe(expected);
    });
    test('Given the user input is multiple numbers with a custom single-character delimiter when calculating the sum then it should return the sum of all the numbers. (example “//;\n1;2” should return 3)', () => {
        const calculator = new Calculator();
        const expected = 3;
        const result = calculator.sum("//;\n1;2");
        expect(result).toBe(expected);
    });
    test('Given the user input contains one negative number when calculating the sum then it should throw an exception "negatives not allowed: x" (where x is the negative number).', () => {
        const calculator = new Calculator();
        expect(() => calculator.sum("1,-2,3")).toThrow('negatives not allowed: -2')
    });
    test('Given the user input contains multiple negative numbers mixed with positive numbers when calculating the sum then it should throw an exception "negatives not allowed: x, y, z" (where x, y, z are only the negative numbers)', () => {
        const calculator = new Calculator();
        expect(() => calculator.sum("1,-2,3,-4,6,-6")).toThrow('negatives not allowed: -2, -4, -6')
    });
})
