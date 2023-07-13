import { render, screen } from '@testing-library/react';
import App from "../src/App";

describe('App', () => {
	it('renders headline', () => {
		render(<App />);
		const usernameLabel = screen.getByText("Username");
		const passwordLabel = screen.getByText("Password");
		expect(usernameLabel).toBeInTheDocument();
		expect(passwordLabel).toBeInTheDocument();
	});
});

