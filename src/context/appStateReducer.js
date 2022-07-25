const AppStateReducer = (state, action) => {
  switch (action.type) {
    case 'getElections': {
      return {
        ...state,
      };
    }
    case 'getCandidates': {
      return {
        ...state,
      };
    }

    case 'LIGHT': {
      return {
        ...state,
        isDarkMode: false,
      };
    }
    case 'DARK': {
      return {
        ...state,
        isDarkMode: true,
      };
    }
    case 'TOGGLE': {
      let isDarkMode = !state.isDarkMode;

      isDarkMode
        ? window.localStorage.setItem('smartVotingTheme', 'DARK')
        : window.localStorage.setItem('smartVotingTheme', 'LIGHT');

      return {
        ...state,
        isDarkMode,
      };
    }

    default:
      return state;
  }
};

export default AppStateReducer;
