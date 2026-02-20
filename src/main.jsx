import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const people = [{ name: 'Arto Hellas', phone: '0 123 4567' }];

ReactDOM.createRoot(document.getElementById('root')).render(
    <App people={people} />
)
