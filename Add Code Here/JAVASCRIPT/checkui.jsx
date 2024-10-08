// src/components/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extra matchers like "toBeInTheDocument"
import Button from './Button';
import Header from './Header';

test('checks if the Header component is present', () => {
  render(<Header />);
  const headerElement = screen.getByText(/Welcome to the App!/i);
  expect(headerElement).toBeInTheDocument();
});

test('checks if the Button component is rendered with the correct label', () => {
  render(<Button label="Click Me" />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});
