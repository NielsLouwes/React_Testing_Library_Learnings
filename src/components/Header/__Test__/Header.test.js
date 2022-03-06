import { render, screen } from '@testing-library/react';
import Header from '../Header';

//two methods to render the header
// 1. one of by text of the header
// 2. 2nd is by accessing its role 'heading"
it('renders the title passsed into Header with props', () => {
  render(<Header title="My header"/>);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

//testing the h1 header "My header"
it('renders the title passsed into Header with props', () => {
    render(<Header title="My header" />);
    const headingElement = screen.getByRole('heading', {name: "My header"});
    expect(headingElement).toBeInTheDocument();
  });

  // Testing the h3 heading "Cats"
it('renders the h3 title on page', () => {
    render(<Header title="My header"/>);
    const headingElement = screen.getByRole('heading', {name: "Cats"});
    expect(headingElement).toBeInTheDocument();
  });

  //semantic title - getByTitle
  it('renders the title passsed into Header with props', () => {
    render(<Header />);
    const headingElement = screen.getByTitle('Header');
    expect(headingElement).toBeInTheDocument();
  });

  //renderby testID
  it('renders the title passsed into Header with props', () => {
    render(<Header />);
    const headingElement = screen.getByTestId("header-2");
    expect(headingElement).toBeInTheDocument();
  });

  //FIND BY
  it('renders the title passsed into Header with props', async () => {
    render(<Header title="My header"/>);
    const headingElement = await screen.findByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });

  //QUERY BY
  it('renders the title passsed into Header with props', async () => {
    render(<Header title="My header"/>);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
  });

  //getbyAllRoles
  //search on heading
  //expect headingElements.length to be something
  it('renders the title passsed into Header with props', async () => {
    render(<Header title="My header"/>);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
  });


