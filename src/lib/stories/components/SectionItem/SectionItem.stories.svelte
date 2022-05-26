<script>
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
    import SectionItem from './SectionItem.svelte'
    import SectionItemDecorator from './SectionItemDecorator.svelte'
</script>

<Meta
    title="Components/SectionItem"
    component={SectionItem}
    argTypes={{
        title: {
            name: 'title',
            description: 'The text of the link',
            type: { name: 'string', required: true },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'link title' },
            },
            control: {
                type: 'text',
            },
        },
        href: {
            name: 'href',
            description: 'The url of the link',
            type: { name: 'string', required: true },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'link url' },
            },
            control: {
                type: 'text',
            },
        },
        color: {
            name: 'color',
            description: 'The color theme of the link',
            type: { name: 'string', required: true },
            table: {
                type: { summary: 'blue | purple | red | orange' },
                defaultValue: { summary: 'blue' },
            },
            control: {
                type: 'select',
                options: ['blue', 'red', 'purple', 'orange'],
            },
        },
    }}
/>

<Template let:args>
    <SectionItemDecorator>
        <SectionItem {...args} />
    </SectionItemDecorator>
</Template>

<Story
    name="Blue"
    args={{
        title: 'link text',
        href: 'https://github.com/giuxtaposition/startpage',
        color: 'blue',
    }}
/>

<Story
    name="Red"
    args={{
        title: 'link text',
        href: 'https://github.com/giuxtaposition/startpage',
        color: 'red',
    }}
/>

<Story
    name="Orange"
    args={{
        title: 'link text',
        href: 'https://github.com/giuxtaposition/startpage',
        color: 'orange',
    }}
/>

<Story
    name="Purple"
    args={{
        title: 'link text',
        href: 'https://github.com/giuxtaposition/startpage',
        color: 'purple',
    }}
/>
