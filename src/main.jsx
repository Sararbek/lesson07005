import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import SuspenseContainer from './utils/Index'
import { Provider } from 'react-redux'
import { store } from './redux'
const App = lazy(() => import("./App"))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <SuspenseContainer>
        <App />
      </SuspenseContainer>
    </BrowserRouter>
  </Provider>
)
