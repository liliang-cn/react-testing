import user from '@testing-library/user-event';
import Retail from './Retail';
import { fakeStore, render, screen } from '../utils/test-utils';

describe('集成: 电商页面', () => {
  function addFirstItemToCart() {
    const firstProduct = fakeStore.retail.products[0];
    const firstProductTitle = screen.getByRole('heading', {
      name: firstProduct.title,
    });

    user.click(firstProductTitle);
    user.click(screen.getByRole('button', { name: /add to cart/i }));
  }
  describe('产品详情', () => {
    test('given selected product, details displayed', () => {
      render(<Retail />, { initialState: fakeStore });

      const firstProduct = fakeStore.retail.products[0];

      user.click(
        screen.getByRole('heading', {
          name: firstProduct.title,
        })
      );

      expect(
        screen.getAllByRole('heading', { name: firstProduct.title }).length
      ).toEqual(2);
      expect(screen.getByText(firstProduct.description)).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: `$${firstProduct.price}` })
      ).toBeInTheDocument();
    });

    test('收藏指定的商品', () => {
      render(<Retail />, { initialState: fakeStore });

      const firstProduct = fakeStore.retail.products[0];

      user.click(
        screen.getByRole('heading', {
          name: firstProduct.title,
        })
      );

      user.click(screen.getByRole('button', { name: /add to favorites/i }));

      expect(
        screen.getByRole('button', { name: /added to favorites/i })
      ).toBeInTheDocument();
    });
  });

  describe('购物车', () => {
    test('可以添加到购物车', () => {
      render(<Retail />, { initialState: fakeStore });

      addFirstItemToCart();

      expect(screen.getByText(/1 items/i)).toBeInTheDocument();
    });

    test('购物车中的数量可以改变', () => {
      render(<Retail />, { initialState: fakeStore });
      addFirstItemToCart();
      const quantityInput = screen.getByRole('spinbutton');

      user.clear(quantityInput);
      user.type(quantityInput, '10');
      user.click(screen.getByRole('button', { name: /add to cart/i }));

      expect(screen.getByText(/qty:10/i)).toBeInTheDocument();
    });

    test('数量超过10时，变更无效', () => {
      render(<Retail />, { initialState: fakeStore });
      addFirstItemToCart();
      const quantityInput = screen.getByRole('spinbutton');

      user.clear(quantityInput);
      user.type(quantityInput, '11');
      user.click(screen.getByRole('button', { name: /add to cart/i }));

      expect(screen.getByText(/qty:1/i)).toBeInTheDocument();
    });

    test('数量小于0时，变更无效', () => {
      render(<Retail />, { initialState: fakeStore });
      addFirstItemToCart();
      const quantityInput = screen.getByRole('spinbutton');

      user.clear(quantityInput);
      user.type(quantityInput, '0');
      user.click(screen.getByRole('button', { name: /add to cart/i }));

      expect(screen.getByText(/qty:1/i)).toBeInTheDocument();
    });
  });
});
