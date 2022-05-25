import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
    verbose: true,
    clearMocks: true,
    transform: {
        '^.+\\.stories\\.svelte$':
            '<rootDir>node_modules/@storybook/addon-svelte-csf/dist/cjs/jest-transform',
        '^.+.svelte$': [
            'svelte-jester',
            {
                preprocess: true,
            },
        ],
        '^.+.ts$': 'ts-jest',
        '^.+.js$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!(@storybook/(svelte|addon-svelte-csf))/)',
    ],
    moduleFileExtensions: ['js', 'ts', 'svelte', 'json'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testEnvironment: 'jsdom',
}
export default config
