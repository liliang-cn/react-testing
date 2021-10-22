import { render, screen } from '@testing-library/react';
import faker from 'faker';
import { RetailProvider } from './RetailContext';

import Product from './Product';

describe('Product', () => {
  test('should render to screen given product properties', () => {
    const product = {
      id: faker.datatype.uuid(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.fashion(),
    };
    render(
      <RetailProvider products={[]}>
        <Product {...product} />
      </RetailProvider>
    );

    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
  });
});
