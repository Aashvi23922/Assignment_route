import React, { useState } from 'react'
import { userAuth } from '../../Auth/Auth';
import "./Log_in.css"
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'


export default function Log_in() {

  let [user, setUser] = useState({
    name: "",
    password: ""
  });

  let Auth = userAuth();

  function addData() {
    Auth.login(user);
  }

  return (
    <>
      <Form style={{border:".5px solid gray",width:"40%",marginLeft:"590px",marginTop:"90px"}}>
        <FormGroup style={{ display: "flex", justifyContent: "center",alignItems:"center",marginTop:"50px" }}>
          <Label
            for="exampleName"
            hidden
          >
            Name
          </Label>
          <Input
            id="exampleName"
            name="name"
            placeholder="Name"
            type="text"
            value={user?.name}
            onChange={(e) => setUser({ ...user, name: e?.target?.value })}
          />
        </FormGroup>
        {' '}
        <FormGroup style={{ display: "flex", justifyContent: "center" }}>
          <Label
            for="examplePassword"
            hidden
          >
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            value={user?.password}
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
          />
        </FormGroup>
        {' '}
        <FormGroup style={{ display: "flex", justifyContent: "center",marginTop:"40px"}}>
          <Button onClick={() => addData()} outline variant="success">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </>
  )
}
