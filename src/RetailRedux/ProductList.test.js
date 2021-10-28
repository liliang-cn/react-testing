import ProductList from './ProductList';
import { fakeStore, render, screen } from '../utils/test-utils';

test('给定数据，可以渲染全部列表', () => {
  render(<ProductList />, { initialState: fakeStore });

  const actual = screen
    .getAllByTestId('product-title')
    .map((product) => product.textContent);
  const expected = fakeStore.retail.products.map((product) => product.title);

  expect(actual).toEqual(expected);
});
