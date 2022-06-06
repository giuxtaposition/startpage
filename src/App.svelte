<script lang="ts">
    import { onMount } from "svelte"
    import Section from "./lib/stories/components/Section/Section.svelte"
    import type { Section as SectionType } from "./lib/types/Section"

    let sections: SectionType[] = []

    onMount(async () => {
        const apiResponse = await fetch("./links.json")
        sections = await apiResponse.json()
    })
</script>

<main>
    {#each sections as section}
        <Section
            title={section.title}
            links={section.links}
            color={section.color}
        />
    {/each}
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
