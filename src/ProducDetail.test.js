import { render, screen } from '@testing-library/react';

import { RetailProvider } from './RetailContext';
import ProductDetail from './ProductDetail';

import fakeProducts from './mocks/fakeProducts';

describe('ProductDetail', () => {
  test('should display Placeholder given initial render', () => {
    render(
      <RetailProvider products={fakeProducts}>
        <ProductDetail />
      </RetailProvider>
    );
    expect(
      screen.getByRole('heading', { name: /retail store/i })
    ).toBeInTheDocument();
  });
});
