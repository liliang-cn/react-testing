import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { RetailProvider } from './RetailContext';
import Retail from './Retail';

import fakeProducts from './mocks/fakeProducts';

test('A user can view product details', () => {
  render(
    <RetailProvider products={fakeProducts}>
      <Retail />
    </RetailProvider>
  );

  const firstProduct = fakeProducts[0];

  user.click(screen.getByRole('heading', { name: firstProduct.title }));

  expect(
    screen.getAllByRole('heading', { name: firstProduct.title }).length
  ).toEqual(2);
  expect(screen.getByText(firstProduct.description)).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: `$${firstProduct.price}` })
  ).toBeInTheDocument();
});
