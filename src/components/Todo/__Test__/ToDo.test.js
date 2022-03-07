import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockToDo = () => {
    return (
    <BrowserRouter>
        <Todo />
    </BrowserRouter>
    )
}

describe("Todo", () => {
  it('information entered input element shows up in task list after pressing add button', () => {
    render(<MockToDo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole('button', { name: /Add/i})
    fireEvent.change(inputElement, {target : {value: "Go grocery shopping"}});
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go grocery shopping/i)
    expect(divElement).toBeInTheDocument();
    // const headingElement = screen.getByText(/my header/i);
    // expect(headingElement).toBeInTheDocument();
  });
})