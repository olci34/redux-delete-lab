
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      debugger
      const band = {
        id: state.bands.length,
        name: action.payload
      }
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      return {bands: state.bands.filter(b => b.id !== action.id)}
    default:
      return state;
  }
};
