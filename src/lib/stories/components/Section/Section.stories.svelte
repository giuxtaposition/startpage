<script>
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
    import Section from './Section.svelte'
</script>

<Meta
    title="Components/Section"
    component={Section}
    argTypes={{
        title: {
            name: 'title',
            description: 'The title of the section',
            type: { name: 'string', required: true },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'section title' },
            },
            defaultValue: 'section title',
            control: {
                type: 'text',
            },
        },
        color: {
            name: 'color',
            description: 'The color theme of the section',
            type: { name: 'string', required: true },
            table: {
                type: { summary: 'blue | purple | red | orange' },
                defaultValue: { summary: 'blue' },
            },
            defaultValue: 'blue',
            control: {
                type: 'select',
                options: ['blue', 'red', 'purple', 'orange'],
            },
        },
        links: {
            name: 'links',
            description: 'The links shown in the section',
            type: { name: 'string', required: false },
            table: {
                type: { summary: 'array of {title: string, href: string}' },
                defaultValue: {
                    summary: 'a bunch of links',
                    detail: '[{title: "Link 1", href: "https://github.com/giuxtaposition/startpage"}, {title: "Link 2", href: "https://github.com/giuxtaposition/startpage"}, {title: "Link 3", href: "https://github.com/giuxtaposition/startpage"}]',
                },
            },
            defaultValue: [
                {
                    title: 'Link 1',
                    href: 'https://github.com/giuxtaposition/startpage',
                },
                {
                    title: 'Link 2',
                    href: 'https://github.com/giuxtaposition/startpage',
                },
                {
                    title: 'Link 3',
                    href: 'https://github.com/giuxtaposition/startpage',
                },
            ],
            control: 'object',
        },
    }}
/>

<Template let:args>
    <Section {...args} />
</Template>

<Story name="Section" />
