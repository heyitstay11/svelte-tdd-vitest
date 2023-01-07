<script>
    let selectedIndex = 0;
    const changeTab = (index) => {
        selectedIndex = index;
    }
</script>


<div class="vertical-tab-container">
    <ul class="vertical-tab">
        <li class:selected={selectedIndex == 0}  on:click={() => changeTab(0)}>First Tab</li>
        <li class:selected={selectedIndex == 1}  on:click={() => changeTab(1)}>Second Tab</li>
        <li class:selected={selectedIndex == 2}  on:click={() => changeTab(2)}>Third Tab</li>
    </ul>
    <div class="vertical-tab-content">
        {#if selectedIndex == 0}
        <h1>First Tab Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium.</p>     
      {:else if selectedIndex == 1}
        <h1>Second Tab Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium.</p>
      {:else if selectedIndex == 2}
        <h1>Third Tab Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium.</p>
        {/if}
    </div>
</div>


<style>
    .vertical-tab-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid gray;
        border-radius: 1rem;
    }

    .vertical-tab {
        margin: 0px;
        padding: 3rem;
        list-style: none;
        border-right: 1px solid gray
    }

    .vertical-tab li {
        margin: 2rem 0;
    }

    .vertical-tab-content {
        flex:1
    }

    .selected {
        color: blue;
    }
</style>