import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/click here for a surprise/i); // Adjust text matcher to match an existing element
  expect(linkElement).toBeInTheDocument();
});
