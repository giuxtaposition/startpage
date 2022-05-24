<script lang="ts">
    import Section from './lib/stories/components/Section/Section.svelte'

    const sections = getLinkSectionsData()

    async function getLinkSectionsData() {
        const apiResponse = await fetch('./links.json')

        return await apiResponse.json()
    }
</script>

<main>
    {#await sections then sections}
        {#each sections as section}
            <Section
                title={section.section}
                links={section.links}
                color={section.color}
            />
        {/each}
    {/await}
</main>

<style lang="sass">
@use 'colors'
@import url("https://fonts.googleapis.com/css2?family=FiraCode&display=swap")

main
    width: 100vw
    height: 100vh
    background: url("/wallpaper.jpg") no-repeat fixed center
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    gap: 1.5rem
    font-family: Fira Code
</style>
