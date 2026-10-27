export const STORAGE_KEY = 'celebrare-favourites'

export function favouritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      if (state.includes(action.id)) {
        return state.filter((id) => id !== action.id)
      }
      return [...state, action.id]

    default:
      return state
  }
}

export function loadFavourites() {
  try {
    const savedFavourites = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(savedFavourites) ? savedFavourites : []
  } catch {
    return []
  }
}
