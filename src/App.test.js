import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const testing = screen.getByText(/Testing/i);
  expect(testing).toBeInTheDocument();
});
