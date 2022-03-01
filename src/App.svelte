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

	// Add Poll
	let polls = [
		{
			id: 1,
			question: 'JavaScript or Java',
			answerA: 'JavaScript',
			answerB: 'Java',
			votesA: 9,
			votesB: 15
		},
	]

	// Handle Add
	const handleAdd = (e) => {
		const poll = e.detail;
		polls = [poll, ...polls];
		activeItem = 'Current-Polls';
	}

</script>

<Header />
	<main>
		<Tabs {items} {activeItem} on:tabChange={handleTabs} />
		{#if activeItem === 'Current Polls'}
			<PollsList {polls} />
		{:else if activeItem === 'Add New Poll'}
			<CreatePollForm on:add={handleAdd}/>
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