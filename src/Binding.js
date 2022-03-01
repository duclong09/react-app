import { useState } from "react";

//reponse from API
const courses = [
    {
        id: 1,
        name: 'HTML,CSS'
    },
    {
        id: 2,
        name: 'Javascript',
    },
    {
        id: 3,
        name: 'Reactjs'
    }
]


function Binding() {
//   const [name, setName] = useState("");
//   const [email,setEmail] = useState("")

    const [checked, setChecked] = useState(2)
    const [checked1, setChecked1] = useState([])
    
    console.log(checked1)


  const handleSubmit = () => {
    //console.log({id: checked})
    console.log({id: checked1})
  }
  

  const handleCheck =(id)=>{
    setChecked1(prev => {
       const isChecked = checked1.includes(id)
       if(!isChecked) return [...prev,id]
       if(isChecked) return checked1.filter(item => item !== id)
       
    })
  }

  return (
    <div style={{ padding: 32 }}>
        
        {courses.map(course => (
            <div key={course.id}>
                <input type="radio" 
                checked={checked === course.id}
                onChange={()=> setChecked(course.id)}
                />
                {course.name}
            </div>
        ))}

        {courses.map(course => (
            <div key={course.id}>
                <input style={{margin: 30}} type="checkbox" 
                checked={checked1.includes(course.id)}
                onChange={() => handleCheck(course.id)}
                />
                {course.name}
            </div>
        ))}
      {/* <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} /> */}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
export default Binding;
