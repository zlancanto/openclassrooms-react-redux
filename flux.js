/* Structure */

let state = {}
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

/* Implémentation */

subscribe((state) => {
    if (state.owner) {
        console.log('Propriétaire ', state.owner, ' ajouté avec succès !')
        document.getElementById('header').textContent = `Le nouveau proprio du resto est ${state.owner.firstName}`
    }
})

dispatch({
    company : {
        name: 'Burger du Pré'
    }
})

document.getElementById('addForm').addEventListener('submit', (event) => {
    event.preventDefault()
    const firstNameInput = event.currentTarget.firstName
    dispatch({
        company : {
            name: 'Burger du Pré'
        },
        owner: {
            firstName: firstNameInput.value
        }
    })
})