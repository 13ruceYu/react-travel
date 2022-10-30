import i18n from 'i18next'

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
    i18n.changeLanguage(action.payload)
    return { ...state, language: action.payload }
  }

  return state
}

export default languageReducer;