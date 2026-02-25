import React from 'react'

const RenderTodos = (todos) => {
  return todos?.todos.map(item => {
    return (
      <div key={`${item?.todo}${item?.id}`} className='todos'>
        <p className='todos__id'>{item?.id}</p>
        <h2 className='todos__title'>
          {item?.todo}
        </h2>
        <p className='todos__comp'>{`${item?.completed}`}</p>
      </div>
    )
  })
}

export default RenderTodos