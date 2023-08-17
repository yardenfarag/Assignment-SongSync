
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import App from './App.tsx'
import DarkModeProvider from './DarkModeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </Provider>
)
