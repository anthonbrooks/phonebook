import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const people = [{ name: 'Arto Hellas' }];

ReactDOM.createRoot(document.getElementById('root')).render(
    <App people={people} />
)
