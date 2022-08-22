import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
test('clicking customer button should redirect to new page ', () => {
  render(
    <Router>
      {' '}
      <Sidebar />
    </Router>
  );
  const newPage = screen.getByTestId('customerPage');
  userEvent.click(newPage);

  expect(newPage).toBeInTheDocument();
});
