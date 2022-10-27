import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('让旅游更幸福', () => {
  render(<App />);
  const linkElement = screen.getByText(/让/i);
  expect(linkElement).toBeInTheDocument();
});
