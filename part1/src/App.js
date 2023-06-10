const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old !</p>
    </div>
  )
}

const App = () => {
  const name = 'Romain'
  const age = 23
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Claire' age={23+5} />
      <Hello name={name} age={age} />
    </div>
  )
}

// const App2 = function()
// {
//   return(<div>
//     <p>Hello world!</p>
//   </div>)
// }

export default App;
