import { render, screen } from '@testing-library/react';
import Jumbotron from './Jumbotron';

it('display the heading', () => {
  render(<Jumbotron />);
  expect(
    screen.getByRole('heading', { name: /Welcome to our site!/i })
  ).toBeInTheDocument();
});
