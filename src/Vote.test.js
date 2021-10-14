import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Vote from './Vote';

test('increases total likes by one', () => {
  render(<Vote totalGlobalLikes={10} />);

  expect(screen.getByText(10)).toBeInTheDocument();

  user.click(screen.getByRole('button', { name: /thumbs up/i }));
  expect(screen.getByText(11)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /thumbs up/i })).toHaveStyle(
    'background: green'
  );
});

test('should only vote once', () => {
  render(<Vote totalGlobalLikes={10} />);
  const thumbsUpBtn = screen.getByRole('button', { name: /thumbs up/i });
  const thumbsDownBtn = screen.getByRole('button', { name: /thumbs down/i });

  expect(screen.getByText(10)).toBeInTheDocument();
  user.click(thumbsUpBtn);
  user.click(thumbsUpBtn);

  expect(screen.getByText(11)).toBeInTheDocument();

  user.click(thumbsDownBtn);
  expect(screen.getByText(11)).toBeInTheDocument();
});

test('should decrease total likes by one', () => {
  render(<Vote totalGlobalLikes={10} />);

  expect(screen.getByText(10)).toBeInTheDocument();

  user.click(screen.getByRole('button', { name: /thumbs down/i }));
  expect(screen.getByText(9)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /thumbs down/i })).toHaveStyle(
    'background: red'
  );
});
