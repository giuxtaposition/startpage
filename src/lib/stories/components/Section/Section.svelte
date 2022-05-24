<script lang="ts">
    import type { Link } from '../../../types/Link'
    export let title: string
    export let links: Link[]
    export let color: 'blue' | 'purple' | 'red' | 'orange'
</script>

<section class={`links-section ${color}`}>
    <h1>{title}</h1>
    <ul class="links">
        {#each links as link}
            <li class="link">
                <a href={link.href}>{link.title}</a>
            </li>
        {/each}
    </ul>
</section>

<style lang="sass">
@use '../../../../colors'

.links-section
    padding: 1rem
    width: 15rem
    height: 20rem
    background-color: colors.$black-fading-soft
    border-radius: 0.5rem
    font-family: Fira Code

h1
    margin: 0
    text-align: center
    font-size: 1.25rem

.links
    list-style-type: none
    display: flex
    flex-direction: column
    align-items: center
    margin: 0.35rem 0 0 0
    padding: 0

.link
    padding: 0.05rem

.link a
    text-decoration: none
    color: colors.$white-soft

.links-section.blue
    h1
        color: colors.$blue
    .link a:hover
        color: colors.$blue-soft

.links-section.red
    h1
        color: colors.$red
    .link a:hover
        color: colors.$red-soft

.links-section.purple
    h1
        color: colors.$purple
    .link a:hover
        color: colors.$purple-soft

.links-section.orange
    h1
        color: colors.$orange
    .link a:hover
        color: colors.$orange-soft

</style>
