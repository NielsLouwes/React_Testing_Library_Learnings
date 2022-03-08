import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockToDo = () => {
    return (
    <BrowserRouter>
        <Todo />
    </BrowserRouter>
    )
}

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
  const buttonElement = screen.getByRole('button', { name: /Add/i});
  tasks.forEach( task => {
     fireEvent.change(inputElement, {target : {value: task}});
     fireEvent.click(buttonElement);
  } )
}

describe("Todo", () => {
  // it('information entered input element shows up in task list after pressing add button', () => {
  //   render(<MockToDo />);
  //   addTask("Go grocery shopping")

  //   const divElement = screen.getByText(/Go grocery shopping/i)

  //   expect(divElement).toBeInTheDocument();
  // });

  it('when three tasks are entered as input, should render multiple todo div items', () => {
    render(<MockToDo />);
    addTask(["Go grocery shopping", "Clean my room", "Take my dog for a walk"]);

    const divElement = screen.getAllByTestId("task-container");
    
    expect(divElement.length).toBe(3);
  });

  it('task should not have completed class when initially rendered', () => {
    render(<MockToDo />);
    addTask(["Go grocery shopping"]);

    const divElement = screen.getByText(/Go grocery shopping/i)
    
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it('task is greyed out and lined out when clicked on', () => {
    render(<MockToDo />);
    addTask(["Go grocery shopping"]);

    const divElement = screen.getByText(/Go grocery shopping/i)
    fireEvent.click(divElement);
    
    expect(divElement).toHaveClass("todo-item-active");
  });
})