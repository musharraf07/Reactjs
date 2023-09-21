import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// };


const reactElement = React.createElement(
  'a',
  {href:'https://www.linkedin.com', target:'_blank'},
  'visit linkedin',
 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />
    reactElement
 
)
