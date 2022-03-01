<script>
    export let type = 'primary';
    export let flat = false;
    export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse}>
    <slot></slot>
</button>

<style>
    button {
        border: 0;
        border-radius: 6px;
        padding: 8px 12px;
        cursor: pointer;
        font-weight: bold;
        box-shadow: 1px 2px 3px(0,0,0,0.2);
    }
    .primary {
        background: brown;
        color: white;
    }
    .secondary {
        background: rgb(12, 92, 12);
        color: white;
    }
    .flat {
        box-shadow: none;
    }
    .inverse {
        color: brown;
        background: white;
        border: 2px solid brown;
    }
    .inverse {
        color:rgb(12, 92, 12);
        background: white;
        border: 2px solid rgb(12, 92, 12);
    }
</style>