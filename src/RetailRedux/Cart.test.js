import React from 'react';
import Cart from './Cart';
import { render, screen, fakeStore } from '../utils/test-utils';

test('第一次渲染后，购物车应该是空的', () => {
  render(<Cart />, { initialState: fakeStore });
  expect(screen.getByText(/0 items/i)).toBeInTheDocument();
  expect(screen.getByText(/\$0\.00/i)).toBeInTheDocument();
});
