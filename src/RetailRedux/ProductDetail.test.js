import ProductDetail from './ProductDetail';
import { fakeStore, render, screen } from '../utils/test-utils';

test('商品详情, 第一次渲染时显示展位组件', () => {
  render(<ProductDetail />, { initialState: fakeStore });

  expect(
    screen.getByRole('heading', { name: /retail store/i })
  ).toBeInTheDocument();
});
