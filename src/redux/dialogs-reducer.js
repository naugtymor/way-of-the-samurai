const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    messages: [
        {id: 1, message: 'Lets go cs'},
        {id: 2, message: 'I want energy-drink'},
        {id: 3, message: 'Im eblan'},
        {id: 4, message: 'Check direct'},
    ],
    dialogs: [
        {
            id: 1,
            name: 'Dimazavr',
            img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-19_880366.jpg'
        },
        {
            id: 2,
            name: 'Hahhah-kayo',
            img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-24_066300.jpg'
        },
        {
            id: 3,
            name: 'Ecce-homora',
            img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-25_959615.jpg'
        },
        {
            id: 4,
            name: 'Shotahappens',
            img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-32_611609.jpg'
        },
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            let body = state.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push({id: state.messages.length + 1, message: body});
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;