/* Structure */
let state = {
    list: []
}
const subscribers = []

const dispatch = (newStateValue) => {
    state = newStateValue
    for (const func of subscribers) {
        func(state)
    }
}

const subscribe = (subscriberFunc) => {
    subscribers.push(subscriberFunc)
}

const DoubleCantal = {
    title: 'Double Cantal',
    price: 12.99
}

const SuperCremeux = {
    title: 'Super Crémeux',
    price: 14.20
}

const PouletCroquant = {
    title: 'Poulet Croquant',
    price: 16.44
}

const PRODUCT_LIST = {
    PouletCroquant,
    SuperCremeux,
    DoubleCantal
}

document.getElementById('addForm').addEventListener('submit', (event) => {
    event.preventDefault()
    const firstNameInput = event.currentTarget.firstName
    dispatch({
        owner: {
            firstName: firstNameInput.value
        }
    })
})

subscribe((state) => {
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
                ${item.title} <span>${item.price}</span>
            </div>
            `
            document.getElementById('command').appendChild(itemElement)
        }
    }
})

document.querySelectorAll('.orderButton').forEach(el => {
    el.addEventListener('click', (e) => {
        const productId = e.target.dataset['id']
        const productList = state.list
        productList.push(PRODUCT_LIST[productId])
        dispatch({
            list: productList,
        })
    })
})