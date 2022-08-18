import { screen, render } from '@testing-library/react';
import Topbar from './Topbar';
test('Hotel title should be present inside topbar ', () => {
  render(<Topbar />);
  const title = screen.getByText(/hotel team/i);
  expect(title).toBeInTheDocument();
});

test('Hotel logo image should be present inside topbar ', () => {
  render(<Topbar />);
  const logoImage = screen.getByRole('img');
  expect(logoImage).toBeInTheDocument();
});
