import { useState } from 'react'
import './App.css'
import { FloatingLabel, Form, InputGroup } from 'react-bootstrap'



function App() {
  const [data, setData] = useState({ name: "", addr: "", contact: "", email: "", gender: "", dob: "", course: "" })


  return (
    <>

      <div className='d-flex flex-column'>
        <FloatingLabel controlId="floatingName" label="Name">
          <Form.Control type="text" placeholder="Name" />
        </FloatingLabel>

        <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

        <FloatingLabel controlId="floatingNumber" label="Phone Number">
          <Form.Control type="text" placeholder="Phone Number" />
        </FloatingLabel>


        <FloatingLabel controlId="floatingemail" label="Email">
          <Form.Control type="email" placeholder="Email" />
        </FloatingLabel>


      </div>


    </>
  )
}

export default App
