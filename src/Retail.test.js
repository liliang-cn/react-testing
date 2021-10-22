import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from 'react-error-boundary';

import Retail from './Retail';

test('Retail must be rendered within Context Provider', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  const ErrorFallback = ({ error }) => error.message;

  render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Retail />
    </ErrorBoundary>
  );

  const errorMessage = screen.getByText(
    /must be used within the RetailProvider/i
  );
  expect(errorMessage).toBeInTheDocument();
  expect(console.error).toHaveBeenCalled();
  console.error.mockRestore();
});
