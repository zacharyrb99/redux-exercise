const INITIAL_STATE = { mood: ':)' };

const moodReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "BORED":
            return { mood: "ಠ_ಠ" };

        case "EXCITED":
            return { mood: "(⊙ꇴ⊙)" };
        
        case "ANGRY":
            return { mood: "ಠ╭╮ಠ" };

        case "SHOCKED":
            return { mood: "o.O" };

        case "HUNGRY":
            return { mood: "ꉨڡꉨ" };

        case "RESET":
            return { mood: ':)' };

        default:
            return state;
    }
}

const store = Redux.createStore(moodReducer);