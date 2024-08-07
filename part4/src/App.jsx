// props = read-only properties that are shared between components
//         A parent component can send data to a child component
//         <Component key=value
import Student from "./Students"
function App() {

  return (
    <>
      <Student name="Giorgi" age={16} isStudent={true ? "Yes" : "No"}/>
      <Student name="Gela" age={17} isStudent={true ? "Yes" : "No"}/>
    </> 
  )
}

export default App
