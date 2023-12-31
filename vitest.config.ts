import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		setupFiles: ['./tests/setup.ts'],
		testMatch: ['./tests/**/*.test.tsx'],
		globals: true,
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
		},
	}
})
