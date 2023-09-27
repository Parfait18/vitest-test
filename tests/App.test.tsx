import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect } from "vitest";
import App from "../src/App";

describe('App', () => {
	it('should render properly', () => {
		render(<App />);
		const usernameLabel = screen.getByText("Username");
		const passwordLabel = screen.getByText("Password");
		const title = screen.getByText("Connexion");
		expect(usernameLabel).toBeInTheDocument();
		expect(passwordLabel).toBeInTheDocument();
		expect(title).toBeInTheDocument();
	});


	test('renders the form inputs', () => {
		render(<App />);

		expect(screen.getByLabelText('Username')).toBeInTheDocument();
		expect(screen.getByLabelText('Password')).toBeInTheDocument();
	});

	test('displays an error message for empty username', async () => {
		render(<App />);

		fireEvent.click(screen.getByTestId('sign-in'));
		expect(await screen.findByText(/Please choose a username/i)).toBeInTheDocument();
	});


	test('displays an error message for empty password', async () => {
		render(<App />);

		fireEvent.change(screen.getByLabelText('Username'), {
			target: { value: 'testuser' },
		});
		fireEvent.click(screen.getByText('Sign In'));

		expect(await screen.findByText(/Please choose a password/)).toBeInTheDocument();
	});

	test('submits the form with valid username and password', () => {
		 render(<App />);
		fireEvent.change(screen.getByLabelText('Username'), {
			target: { value: 'testuser' },
		});
		fireEvent.change(screen.getByLabelText('Password'), {
			target: { value: 'testpassword' },
		});
		fireEvent.click(screen.getByText('Sign In'));

		//Test if onSubmit function is called once
		expect(console.log).toHaveBeenCalledWith({
			username: 'testuser',
			password: 'testpassword',
		});
	});
});


	
