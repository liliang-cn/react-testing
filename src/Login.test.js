import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

import Login from './Login';

test('should enable submit button given credentials', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  document.body.appendChild(div);

  const username = screen.getByRole('textbox', { name: /username/i });
  const password = screen.getByLabelText(/password/i);
  const rememberMe = screen.getByRole('checkbox');
  const loginBtn = screen.getByRole('button', { name: /login/i });

  const fakeData = {
    username: 'test user',
    password: '123password',
  };

  expect(loginBtn).toBeDisabled();

  fireEvent.change(username, { target: { value: fakeData.username } });
  fireEvent.change(password, { target: { value: fakeData.password } });
  fireEvent.click(rememberMe);

  expect(loginBtn).not.toBeDisabled();

  expect(screen.getByTestId('form')).toHaveFormValues({
    username: fakeData.username,
    password: fakeData.password,
    rememberMe: true,
  });
});
