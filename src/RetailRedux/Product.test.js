import faker from 'faker';
import Product from './Product';
import { render, screen } from '../utils/test-utils';

test('给定产品数据，正确渲染', () => {
  const product = {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.fashion(),
    id: faker.datatype.uuid(),
  };

  render(
    <Product
      title={product.title}
      price={product.price}
      image={product.image}
      id={product.id}
    />
  );

  expect(screen.getByText(product.title)).toBeInTheDocument();
  expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
});
