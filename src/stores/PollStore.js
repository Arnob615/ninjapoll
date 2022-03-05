import { writable } from "svelte/store";

const PollStore = writable([
    {
        id: 1,
        question: 'JavaScript or Java',
        answerA: 'JavaScript',
        answerB: 'Java',
        votesA: 5,
        votesB: 7,
    }
])

export default PollStore;