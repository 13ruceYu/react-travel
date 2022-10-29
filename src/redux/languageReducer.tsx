export interface LanguageState {
  language: 'en' | 'zh';
  languageList: { name: string, code: string }[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    {
      name: '中文',
      code: 'zh'
    },
    {
      name: 'English',
      code: 'en'
    }
  ]
}

const languageReducer = (state = defaultState, action) => {
  if (action.type === 'change_language') {
    return { ...state, language: action.payload }
  }

  return state
}

export default languageReducer;