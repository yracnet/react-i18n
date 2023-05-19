import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18NProvider } from '../../src/main'
import App from './App'

const languageList = [
  {
    lang: "en",
    icon: "us",
    name: 'English'
  },
  {
    lang: "es",
    icon: "es",
    name: 'Español'
  },
  {
    lang: "fr",
    icon: "fr",
    name: 'Frances'
  },
  {
    lang: "ru",
    icon: "ru",
    name: 'Russian'
  },
  {
    lang: "du",
    icon: "de",
    name: 'Deutsch'
  },
]

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <I18NProvider
//       defaultLanguage="es"
//       languages={support}
//       resourceURL='/i18n/{0}.json?cache=no'
//     >
//       <App />
//     </I18NProvider>
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18NProvider
    defaultLanguage="es"
    languages={languageList}
    resourceURL='/i18n/{0}.json?cache=no'
  >
    <App />
  </I18NProvider>
  ,
)
