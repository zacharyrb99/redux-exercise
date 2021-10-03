const h1 = document.querySelector('h1');
const boredButton = document.querySelector('#bored');
const excitedButton = document.querySelector('#excited');
const angryButton = document.querySelector('#angry');
const shockedButton = document.querySelector('#shocked');
const hungryButton = document.querySelector('#hungry');
const resetButton = document.querySelector('#reset');

boredButton.addEventListener('click', () => {
    store.dispatch({ type: "BORED" });
    let state = store.getState();
    h1.innerText = state.mood;
});

excitedButton.addEventListener('click', () => {
    store.dispatch({ type: "EXCITED" });
    let state = store.getState();
    h1.innerText = state.mood;
});

angryButton.addEventListener('click', () => {
    store.dispatch({ type: "ANGRY" });
    let state = store.getState();
    h1.innerText = state.mood;
});

shockedButton.addEventListener('click', () => {
    store.dispatch({ type: "SHOCKED" });
    let state = store.getState();
    h1.innerText = state.mood;
});

hungryButton.addEventListener('click', () => {
    store.dispatch({ type: "HUNGRY" });
    let state = store.getState();
    h1.innerText = state.mood;
});

resetButton.addEventListener('click', () => {
    store.dispatch({ type: "RESET" });
    let state = store.getState();
    h1.innerText = state.mood;
});