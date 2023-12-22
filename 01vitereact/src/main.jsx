import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom app</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visist Google</a>
)

const anotheruser = 'chai or React teachingz'

const reactElement = React.createElement(
   'a',
   {href: 'https://google.com', target: '_blank'},
   'click me to visit google',
   anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(

   <App />
)
