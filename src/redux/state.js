let Rerender = () => {
    console.log('state changed');
}

let state = {
    DialogComp: {
        DialogData: [
            {id: '1', name: 'Kykareky'},
            {id: '2', name: 'MC PETYA'},
            {id: '3', name: 'Vaskiv'},
            {id: '4', name: 'Pedro'},
            {id: '5', name: 'Misha'}
        ],
        Messagess: [
            {id: '1', message: 'helo vasia'},
            {id: '2', message: 'helo vasia'},
            {id: '3', message: 'how are you?'},
            {id: '4', message: 'm fine and you'},
            {id: '5', message: 'm fine and you'}
        ]
    },
    PostComp: {
        PostItems: [
            {name: 'Oleg', cont: 'Heloo, i hgave big pig', like: '2'},
            {name: 'Sasha', cont: 'My news topic is very bad', like: '41'},
            {name: 'Stepan', cont: 'React js slishkom slojno', like: '12'},
            {name: 'Stepan', cont: 'React js slishkom slojno', like: '12'},
            {name: 'Stepan', cont: 'React js slishkom slojno', like: '12'}
        ],
        Textvalue: 'write here: '
    },
    NewsComp: {
        NewsItems: [
            {NewsID: '1', Content: 'Ybili cheloveka'},
            {NewsID: '2', Content: 'Ybili cheloveka'},
            {NewsID: '3', Content: 'Ybili cheloveka'},
            {NewsID: '4', Content: 'Ybili cheloveka'}
        ]
    }
}

export let UpdateText = (textValue) => {
    state.PostComp.Textvalue = textValue;
    Rerender(state);
}

export let AddPost = (postMessage) => {
    let newPost = {
        name: 'Kakashka',
        cont: postMessage,
        like: 0
    };
    state.PostComp.PostItems.push(newPost);
    Rerender(state);
}

export let subscribe = (observer) => {
    Rerender = observer;
}
// hello git

export default state;
