<script lang="ts">
    import type { SectionColor } from '../../../types/Section'

    export let href: string
    export let title: string
    export let color: SectionColor
</script>

<li class={`link ${color}`}>
    <a {href}>{title}</a>
</li>

<style lang="sass">
@use '../../../../colors'
.link
    padding: 0.05rem
    font-family: Fira Code

.link a
    text-decoration: none
    color: colors.$white-soft

.link.blue a:hover
        color: colors.$blue-soft
.link.red a:hover
        color: colors.$red-soft
.link.purple a:hover
        color: colors.$purple-soft
.link.orange a:hover
        color: colors.$orange-soft
</style>
