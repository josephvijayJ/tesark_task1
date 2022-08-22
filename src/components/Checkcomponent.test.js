import Checkcomponent from './Checkcomponent';
import { screen, render } from '@testing-library/react';

test('should first', () => {
  render(<Checkcomponent />);
  const sum = screen.getByTestId('sum');
  expect(sum.textContent).toBe('7');
});
