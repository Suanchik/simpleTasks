const initial = {
    items:  {
        0: {
            name: 'Задачи на месяц', 
            item: [
                {name: "Английский", done: false},
                {name: "спорт", done: false},
                {name: "Программирование", done: false},
                {name: "медитация", done: false}
            ]
        },
        1: {
            name: 'Задачи на день', 
            item: [
                {name: "турник", done: true},
                {name: "анжуманья", done: true},
                {name: "прэс качат", done: false},
                {name: "бег", done: true},
                {name: "пратеин купит", done: false}
            ]
        }  
    }
}


const penal = (state = initial, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {
                ...state,
                items: {...state.items, [action.el]: {...state.items[action.el], item: [...state.items[action.el].item, {name: action.text}]},},   
            }
        case 'ADD_NEW_LIST':
            debugger;
            return {
                ...state,
                items: {...state.items, [action.newName]: action.obj}
            }
        case 'DELETE_ALL_CARD':
            const newItems = {
                ...state.items
            }
            delete newItems[action.elementName]
            return {
                ...state,
                items: newItems
            }
        case 'ADD_NEW_NAME':
            const newItems2 = {
                ...state.items
            }
            newItems2[action.element].name = action.newName
            return {
                ...state,
                items: newItems2
            }
        case 'DELETE_ONE_LIST_OF_CARD': 
        const newItems3 = {
            ...state.items
        }
        delete newItems3[action.elementName].item[action.elemIndex]
        return {
            ...state,
            items: newItems3
        }
        case 'CHENGE_DONE':
            // const itemPenal = {...state.items[action.penalname]}
            const newItems4 = {...state.items};
            const newIArr = newItems4[action.penalname].item.map(el => {return {...el}});
            newIArr[action.indexOfTaskDone].done = !newIArr[action.indexOfTaskDone].done;
            newItems4[action.penalname].item = newIArr;
            console.log(newItems4)
            return {
                ...state,
                items: newItems4
            }
        default:
           return state;
    }
};

export const addNewCardItem = (el, text) => {
    return {
        type: "ADD_CARD", el, text
    }
};

export const addNewListItem = (obj, newName) => {
    return {
        type: "ADD_NEW_LIST", obj, newName
    }
}

export const dalateAllItem = (elementName) => {
    return {
        type: "DELETE_ALL_CARD", elementName
    }
}

export const addNewName = (element, newName) => {
    return {
        type: "ADD_NEW_NAME", element, newName
    }
}

export const deleteOneListofcard = (element, elemIndex) => {
    return {
        type: "DELETE_ONE_LIST_OF_CARD", elementName: element, elemIndex
    }
}

export const taskDoneAC = (penalname, indexOfTaskDone) => {
    return {
        type: "CHENGE_DONE", penalname, indexOfTaskDone
    }
}

export default penal;