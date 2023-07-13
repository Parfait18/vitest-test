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

	test('displays an error message for empty username', () => {
		render(<App />);

		fireEvent.click(screen.getByText('Sign In'));

		expect(screen.getByText('Please choose a username.')).toBeInTheDocument();
	});

	test('displays an error message for empty password', () => {
		render(<App />);

		fireEvent.change(screen.getByLabelText('Username'), {
			target: { value: 'testuser' },
		});
		fireEvent.click(screen.getByText('Sign In'));

		expect(screen.getByText('Please choose a password.')).toBeInTheDocument();
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

		// Replace the console.log with your desired assertion or mock function
		expect(console.log).toHaveBeenCalledWith({
			username: 'testuser',
			password: 'testpassword',
		});
	});
});



