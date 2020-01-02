import React from 'react'
import Input from 'components/Input'
import Container from 'components/Container'

class App extends React.Component {
  render () {
    console.log('App rendering')
    return (
      <div>
        Testing
        {[1, 2].map(item => {
          const input = <Input />
          return <Container key={item} input={input} />
        })}
      </div>
    )
  }
}

export default App
