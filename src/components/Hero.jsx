import {useState} from 'react'

function Hero() {
  const [toDo,setToDo] = useState('')
  const [adder,setadder] = useState([])
  const [isCompleted,setisCompleted] = useState(false)

  const handleInputChange = (temp) => {
    setToDo(temp.target.value)
    console.log(toDo)
  }

  const Edit = () =>{

  }

  const Delete = () =>{

  }  
  const add = () =>{
    setadder([...adder,{toDo, isCompleted}])
    console.log(adder)
    console.log(isCompleted)
  }  

  const done = () =>{
    
  }
  return (
    <div className="bg-gray-600 mx-10 rounded-xl h-full">
        <h2 className="text-4xl text-white text-center">
            To-Do List 
        </h2>
        <div className="">
            <h2>  
            Add your To-Do Tasks
            </h2>
            <div>

                <input type="text" value={toDo} onChange={handleInputChange}/>
                <button type='submit' onClick={add}>
                    Add
                </button>
             
            </div>
        </div>

        <div className='text-white'>
          Your To-Do's
          <div>
            {adder.map((item, index) => (
              <div key={index} className='flex gap-10'>
                <div className={item.isCompleted?"line-through flex":"flex"}>  
                  <input type="checkbox" value={item.isCompleted} name="donedonadone" id="" />
                  {item.toDo}
                </div>
                <div className='w-30 h-10 gap-5 p-2 justify-evenly my-3 bg-black rounded-full flex'>
                  <button className='rounded-full px-3 bg-white text-black' onClick={Edit}>
                  Edit
                  </button>
                  <button onClick={Delete}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Hero
