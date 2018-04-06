import ShortUniqueId from 'short-unique-id'
const uid = new ShortUniqueId()

const topicsDefault = [
  { title: 'General', icon: 48 },
  { title: 'Food', icon: 16 },
  { title: 'Snack', icon: 10 },
  { title: 'Transport', icon: 3 },
  { title: 'Shopping', icon: 20 },
  { title: 'Clothes', icon: 7 },
  { title: 'Digital', icon: 15 },
  { title: 'Payment', icon: 31 },
  { title: 'Rental', icon: 0 },
  { title: 'Drink', icon: 1 },
  { title: 'Coffee', icon: 5 },
  { title: 'Car', icon: 4 },
  { title: 'Pets', icon: 14 },
  { title: 'Smoking', icon: 0 },
  { title: 'Love', icon: 9 },
  { title: 'Travel', icon: 42 },
  { title: 'Games', icon: 8 },
  { title: 'Education', icon: 49 },
]
topicsDefault.forEach(topic => (topic.id = uid.randomUUID(8)))

const initialState = {
  spendings: [],
  topics: topicsDefault,
}

export function spendings(state = initialState.spendings, action) {
  switch (action.type) {
    case 'INIT':
      return action.data
    case 'GET_SPENDINGS':
      return state
    case 'ADD_SPENDING':
      action.spending.id = new Date().getTime() + Math.floor(Math.random() * 10)
      return [...state, action.spending]
    case 'DELETE_SPENDING':
      const newState = [...state]
      const index = newState.findIndex(el => el.id === action.id)
      newState.splice(index, 1)
      return newState
    default:
      return state
  }
}

export function topics(state = initialState.topics, action) {
  switch (action.type) {
    case 'CLEAN_TOPICS':
      const newState = state.filter(item => item !== null)
      return newState
    case 'GET_TOPICS':
      return state
    case 'SAVE_CATEGORY':
      return [...state, action.category]
    case 'DELETE_CATEGORY':
      const categories = state.filter(category => category.id !== action.id)
      return categories
    default:
      return state
  }
}
