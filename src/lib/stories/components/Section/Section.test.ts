import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/svelte'
import Section from './Section.svelte'

describe('Section tests', () => {
    test('renders correctly', () => {
        render(Section, {
            props: {
                title: 'Section title',
                links: [
                    {
                        title: 'Link 1',
                        href: 'link1.com',
                    },
                ],
                color: 'blue',
            },
        })

        expect(screen.getByText('Section title').parentNode).toHaveClass('blue')
        expect(screen.getByText('Link 1')).toHaveAttribute('href', 'link1.com')
    })

    test('renders with no links', () => {
        render(Section, {
            props: {
                title: 'Section title',
                links: [],
                color: 'blue',
            },
        })

        expect(screen.getByText('Section title')).toBeDefined()
    })
})
