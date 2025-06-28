import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/TOP HEADLINES/i);
  expect(linkElement).toBeInTheDocument();
  
  const titleElement = screen.getByText(/No articles found/i);
  expect(titleElement).toBeInTheDocument();
});
