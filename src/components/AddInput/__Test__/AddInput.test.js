import { render, screen , fireEvent} from '@testing-library/react';
import AddInput from '../AddInput';

const mockSetTodo = jest.fn();

describe("AddInput", () => {

  it('should render input element', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo}/>);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to change input when typing', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo}/>);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: {value: "Go grocery shopping"} })
    expect(inputElement.value).toBe("Go grocery shopping");
  });

  it('should have empty input when add button is clicked', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo}/>);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const addButtonElement =  screen.getByRole('button', {name: /Add/i})

    fireEvent.change(inputElement, { target: {value: "Go grocery shopping"} })
    fireEvent.click(addButtonElement);
    
    expect(inputElement.value).toBe("");
  });
})