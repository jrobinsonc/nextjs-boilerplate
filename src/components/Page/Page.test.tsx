import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './Page';

test('render page', () => {
  render(<Page title="Page Title">Page Content</Page>);

  expect(screen.getByText('Page Title').tagName).toBe('H1');
  expect(screen.getByText('Page Content').tagName).toBe('MAIN');
});
