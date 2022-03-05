<script>
    import PollDetails from "./PollDetails.svelte";
    import PollStore from '../stores/PollStore';
    import { onDestroy, onMount } from "svelte";

    // export let polls = [];

    // const unSubs = PollStore.subscribe(data => {
    //     polls = data;
    // })

    // onMount(() => {
    //     console.log('onMount Components')
    // })

    // onDestroy(() => {
    //     console.log('onDestroy components')
    //     unSubs();
    // })
</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <div>
            <PollDetails {poll} on:vote />
        </div>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>