<script>
    import Card from "../shared/Card.svelte";
    import PollStore from '../stores/PollStore';

    export let poll;
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor(100 / totalVotes * poll.votesA);
    $: percentB = Math.floor(100 / totalVotes * poll.votesB);

    // Handle Votes
    const handleVote = (option, id) => {
        PollStore.update(currentPolls => {
            let copiedPoll = [...currentPolls];
            let updatePoll = copiedPoll.find((poll) => poll.id == id);

            if (option === 'a') {
                updatePoll.votesA++;
            }
            if (option === 'b') {
                updatePoll.votesB++;
            }

            return copiedPoll;
        })
    }
</script>

<Card >
    <div class="poll">
        <h3> {poll.question} </h3>
        <p> Total Votes: {totalVotes} </p>
        <div class="answer" on:click={() => handleVote('a', poll.id)}>
            <div class="percent percent-a" style="width: {percentA}%" ></div>
            <span>  {poll.answerA} ({poll.votesA}) </span>
        </div>
        <div class="answer" on:click={() => handleVote('b', poll.id)}>
            <div class="percent percent-b" style="width: {percentB}%" ></div>
            <span> {poll.answerB} ({poll.votesB}) </span>
        </div>
    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color:rgb(51, 51, 51);
    }
    p {
        margin-top: 6px;
        font-size: 14px;
        color: rgb(49, 49, 49);
        margin-bottom: 30px;
    }
    .answer {
        background: rgb(169, 155, 169);
        cursor: pointer;
        margin: 10px auto;
        position: relative;
        transition: all cubic-bezier(0.86, 0, 0.07, 1);
    }
    .answer:hover {
        background: purple;
        color:white;
    }
    span {
        display: inline-block;
        padding: 10px 20px;
    }
    .percent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }
    .percent-a {
        background: rgb(223, 128, 34);
        opacity: 50%;
        border-left: 4px solid rgb(72, 21, 21);
    }
    .percent-b {
        background: red;
        opacity: 50%;
        border-left: 4px solid rgb(28, 28, 28);
    }
</style>