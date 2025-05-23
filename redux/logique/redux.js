/* Global variables */
const SUPER_CREMEUX = 'Super Crémeux'
const DOUBLE_CANTAL = 'Double Cantal'
const POULET_CROQUANT = 'Poulet Croquant'
const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const APPLY_VAUCHER = 'APPLY_VAUCHER'
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME'

/* Products */
const DoubleCantal = {
    title: DOUBLE_CANTAL,
    price: 12.99
}

const SuperCremeux = {
    title: SUPER_CREMEUX,
    price: 14.20
}

const PouletCroquant = {
    title: POULET_CROQUANT,
    price: 16.44
}

const PRODUCT_LIST = {
    PouletCroquant,
    SuperCremeux,
    DoubleCantal
}

/* Structure */
let state = {
    value: null,
    list: []
}

/* Reducer */
const reducer = (currentState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const listWithNewProduct = [...currentState.list, {...action.payload}]
            return {...currentState, list: listWithNewProduct}

        case REMOVE_PRODUCT:
            const listWihtoutOneProduct = currentState.list.filter((product, index) => index !== action.payload)
            return {...currentState, list: listWihtoutOneProduct}

        case APPLY_VAUCHER:
            const withVoucherList = currentState.list.map(
                product => product.title === SUPER_CREMEUX
                    ? {...product, price: action.payload.price}
                    : product
            )
            return {...currentState, list: withVoucherList}

        case UPDATE_FIRSTNAME:
            const newState = {...currentState}
            return {newState, owner: action.payload}

        default:
            return currentState
    }
}

/* Store */
const store = window.RTK.configureStore({
    preloadedState: state,
    reducer: reducer
})

store.subscribe(() => {
    const state = store.getState()
    if (state.owner) {
        document
            .getElementById('header')
            .textContent = `Le nouveau proprio du resto est ${state.owner.firstName}`
    }
    if (state.list) {
        document
            .getElementById('command')
            .innerHTML = `<h2>Vous avez sélectionné les produits suivants : </h2>`

        for (let item of state.list) {
            const itemElement = document.createElement('div')
            itemElement.innerHTML = `
            <div>
                ${item.title} <span>${item.price}</span> <button>Remove</button>
            </div>
            `
            document.getElementById('command').appendChild(itemElement)
        }
    }
})

/* Gestion des él du DOM */
document.getElementById('addForm').addEventListener('submit', (event) => {
    event.preventDefault()
    const firstNameInput = event.currentTarget.firstName
    store.dispatch({
        type: UPDATE_FIRSTNAME,
        payload: firstNameInput.value
    })
})

document.querySelectorAll('.orderButton').forEach(el => {
    el.addEventListener('click', (e) => {
        const productId = e.target.dataset['id']
        store.dispatch({
            type: ADD_PRODUCT,
            payload: PRODUCT_LIST[productId],
        })
    })
})

document.getElementById('voucher').addEventListener('click', (e) => {
    store.dispatch({
        type: APPLY_VAUCHER,
        payload: { price: 2.00 }
    })
})