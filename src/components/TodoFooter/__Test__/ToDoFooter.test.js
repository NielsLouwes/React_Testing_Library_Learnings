import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const MockToDoFooter = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter>
          <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    ) 
  }
describe("ToDofooter", () => {
  describe('task element', () => {
    it('should render multiple amount of incomplete tasks', () => {
        render(
          <MockToDoFooter
              numberOfIncompleteTasks={5} 
          />
        );
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
      });

      it('should one incomplete task', () => {
        render(
          <MockToDoFooter
              numberOfIncompleteTasks={1} 
          />
        );
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
      });
      })

    describe('follower footer element', () => {
      it('should render the link component showing followers' , () => {
        render(<MockToDoFooter />)

        const followerLinkElement = screen.getByRole("link", {name: /Followers/i})

        expect(followerLinkElement).toBeInTheDocument();
        screen.debug();
      })
      
    })
})


  //   //toBeVisible
  // it('should render multiple amount of incomplete tasks', () => {
  //   render(
  //     <MockToDoFooter
  //         numberOfIncompleteTasks={5} 
  //     />
  //   );
  //   const paragraphElement = screen.getByText(/5 tasks left/i);
  //   expect(paragraphElement).toBeVisible();
  // });

  // //toContainHTML -- you check if your element contains an html tag (h1, p, section etc.)
  // it('should render multiple amount of incomplete tasks', () => {
  //   render(
  //     <MockToDoFooter
  //         numberOfIncompleteTasks={5} 
  //     />
  //   );
  //   const paragraphElement = screen.getByText(/5 tasks left/i);
  //   expect(paragraphElement).toContainHTML("p");
  // });

  //   //toHaveTextContent -- check that your element has expected text content
  //   //useful if we get the element by screen.testID or screen.getByRole
  // it('should render multiple amount of incomplete tasks', () => {
  //   render(
  //     <MockToDoFooter
  //         numberOfIncompleteTasks={5} 
  //     />
  //   );
  //   const paragraphElement = screen.getByTestId("para");
  //   expect(paragraphElement).toHaveTextContent("5 tasks left");
  // });

  //   //textContent assertions - we can assert an element to have a certain value
  // it('should render multiple amount of incomplete tasks', () => {
  //   render(
  //     <MockToDoFooter
  //         numberOfIncompleteTasks={5} 
  //     />
  //   );
  //   const paragraphElement = screen.getByTestId("para");
  //   expect(paragraphElement.textContent).toBe("5 tasks left");
  // });


