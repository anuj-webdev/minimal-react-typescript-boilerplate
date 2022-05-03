import * as ReactDOM from 'react-dom/client'
import App from './App'

// Create a root.
const rootElement = document.getElementById('root')
// With typescript this check is required, because rootElement may empty.
if (!rootElement) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootElement as HTMLElement)

// Initial render
root.render(<App />)
