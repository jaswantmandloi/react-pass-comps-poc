import React from 'react'
import Input from 'components/Input'
import Container from 'components/Container'
import Form from 'components/Form'

class App extends React.Component {
  render () {
    console.log('App rendering')
    return (
      <>
        <div>
        Testing
          {[1].map(item => {
            const input = <Input />
            return <Container key={item} input={input} />
          })}
        </div>
        <div>===============================</div>
        <div>
          <Form />
        </div>
      </>
    )
  }
}

export default App
