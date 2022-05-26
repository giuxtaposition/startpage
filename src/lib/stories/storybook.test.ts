import initStoryshots, {
    multiSnapshotWithOptions,
    Stories2SnapsConverter,
} from '@storybook/addon-storyshots'

initStoryshots({
    framework: 'svelte',
    stories2snapsConverter: new Stories2SnapsConverter({
        storiesExtensions: ['.svelte'],
        snapshotsDirName: '../../../../../__snapshots__',
    }),
    test: multiSnapshotWithOptions({}),
})
