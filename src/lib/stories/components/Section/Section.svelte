<script lang="ts">
    import type { Link } from '../../../types/Link'
    import type { SectionColor } from '../../../types/Section'
    import SectionItem from '../SectionItem/SectionItem.svelte'
    export let title: string
    export let links: Link[]
    export let color: SectionColor
</script>

<section class={`links-section ${color}`}>
    <h1>{title}</h1>
    <ul class="links">
        {#each links as link}
            <SectionItem {...link} {color} />
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

.links-section.blue
    h1
        color: colors.$blue

.links-section.red
    h1
        color: colors.$red

.links-section.purple
    h1
        color: colors.$purple

.links-section.orange
    h1
        color: colors.$orange

</style>
