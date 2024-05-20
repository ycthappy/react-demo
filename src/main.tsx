import ReactDOM from 'react-dom/client'
import App from './App'
import '@/assets/css/u-main.less'

import {AppStateContext} from '@/pages/appState'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppStateContext>
    <App />
  </AppStateContext>
  
  
)
