import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import FollowersList from '../FollowersList';

const MockFollowerList = () => {
    return (
    <BrowserRouter>
        <FollowersList />
    </BrowserRouter>
    )
}

describe("FollowerList", () => {
  it('renders one follower card', async () => {
    render(<MockFollowerList/>);

    const followerDivElement = await screen.findByTestId("follower-item-0");
    screen.debug(undefined, 300000);
    expect(followerDivElement).toBeInTheDocument();
  });

  it('renders all five follower cards', async () => {
    render(<MockFollowerList/>);

    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    
    expect(followerDivElements.length).toBe(5);
  });

  it('renders the go back button', () => {
    render(<MockFollowerList/>);

    const backButtonElement = screen.getByRole('link', {name: /Go Back/i})

    expect(backButtonElement).toBeInTheDocument();
  });
})

