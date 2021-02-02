import React from 'react'

import ReactMinimalProgressSteps from 'react-minimal-progress-steps'
import 'react-minimal-progress-steps/dist/index.css'

const App = () => {
  const data = [
    { id: 1, content: 'A' },
    { id: 2, content: 'B' },
    { id: 3, content: 'C' },
    { id: 4, content: 'D' }
  ]
  return (
    <div style={{ width: 400, height: 400, margin: 40 }}>
      <ReactMinimalProgressSteps data={data} />
    </div>
  )
}

export default App
