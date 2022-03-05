<script>
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import Footer from "./components/Footer.svelte";
	import Header from "./components/Header.svelte";
	import PollsList from "./components/PollsList.svelte";
	import Tabs from "./shared/Tabs.svelte";

	// Tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';

	const handleTabs = (e) => {
		activeItem = e.detail;
	}

	// Handle Add
	const handleAdd = (e) => {
		activeItem = 'Current-Polls';
	}

	// Handle Vote
	const handleVote = (e) => {
		
	}

</script>

<Header />
	<main>
		<Tabs {items} {activeItem} on:tabChange={handleTabs} />
		{#if activeItem === 'Current Polls'}
			<PollsList on:vote={ handleVote } />
		{:else if activeItem === 'Add New Poll'}
			<CreatePollForm on:add={handleAdd} />
		{/if}
	</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
		font-family: 'Montserrat', sans-serif;
	}
</style>