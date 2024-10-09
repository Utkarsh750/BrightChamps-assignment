import './App.css'
import { jsQuizz } from './constants'
import Quiz from './Quiz'

function App() {

  return (
    <>
      <Quiz questions={jsQuizz.questions} />
    </>
  )
}

export default App
