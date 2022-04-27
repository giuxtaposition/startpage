import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        '^.+.svelte$': [
            'svelte-jester',
            {
                preprocess: true,
            },
        ],
        '^.+.ts$': 'ts-jest',
        '^.+.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'ts', 'svelte'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testEnvironment: 'jsdom',
}
export default config
