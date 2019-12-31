import React from 'react'

const Container = ({ input }) => {
  console.log('Container rendering')
  return (
    <>
      <div>Container Header</div>
      <div>
        Container Body
        {input && input}
      </div>
    </>
  );
}

export default Container
