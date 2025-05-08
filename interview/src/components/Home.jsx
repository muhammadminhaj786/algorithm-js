import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/counterSlice'

const Home = () => {
  // const [count,setCount] = useState(0)
  const count = useSelector((state)=>state.counter.value)
  console.log(count)
  const dispatch = useDispatch()

  // const incement = ()=> {
  //   setCount(count => count  +1)
    
  // }
  return (
    <div>Home
      
      <button onClick={()=>dispatch(increment())} className='p-2 bg-green-500 w-[120px] h-[45px] rounded-lg m-4'>
        add
      </button>
      <div>
        {count}
      </div>
    </div>
  )
}

export default Home