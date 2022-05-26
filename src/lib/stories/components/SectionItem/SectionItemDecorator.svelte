<ul>
    <slot />
</ul>

<style lang="sass">
@use '../../../../colors'
ul
    list-style-type: none
    background-color: colors.$black-fading-soft
    padding: 1rem
    width: fit-content
    border-radius: 0.5rem
</style>
