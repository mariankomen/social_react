const ADD_POST = "ADD-POST";
const UPDATE_TEXT = "UPDATE-TEXT";

let store = {
    _state: {
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
    },
    subscribe(observer) {
        this.Rerender = observer;
    },
    Rerender() {
        console.log('state changed');
    },

    GetState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                name: 'Kakashka',
                cont: action.postMessage,
                like: 0
            };
            this._state.PostComp.PostItems.push(newPost);
            this.Rerender(this._state);
        } else {

            if (action.type === UPDATE_TEXT) {
                this._state.PostComp.Textvalue = action.textValue;
                this.Rerender(this._state);
            }
        }
    }

}

export const AddPostActionCreator = (text) => {
    return {type: ADD_POST, postMessage: text}
}

export const UpdateTextActionCreator = (text) => {
    return {type: UPDATE_TEXT, textValue: text}
}

export default store;
