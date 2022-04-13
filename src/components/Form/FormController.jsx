import React from "react";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Spinner,
} from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";

export default function FormController({
  changeHandler,
  values,
  submitHandler,
  errors,
  hideSpinner,
  agreementHandler,
  isAgree,
}) {
  let { name, password, email, confirmedPassword } = values;
  console.log(errors);
  return (
    <Form className="mt-2" onSubmit={submitHandler}>
      <Form.Label className="fw-bold">User name</Form.Label>
      <InputGroup className=" p-0">
        <InputGroup.Text id="basic-addon1">
          <FaRegUserCircle />
        </InputGroup.Text>
        <FormControl
          type="text"
          placeholder="user name"
          aria-describedby="basic-addon1"
          onChange={changeHandler}
          value={name}
          name="name"
          isInvalid={errors && errors.name}
          // isValid={errors && !errors.name}
        />
      </InputGroup>
      {errors && errors.name && (
        <p className="m-0 text-start text-danger fw-bold">{errors.name}</p>
      )}
      <Form.Label className="fw-bold mt-3">Email</Form.Label>
      <InputGroup className="m-0">
        <InputGroup.Text id="basic-addon1">
          <MdMarkEmailRead />
        </InputGroup.Text>
        <FormControl
          type="text"
          placeholder="email"
          aria-describedby="basic-addon1"
          onChange={changeHandler}
          value={email}
          name="email"
          // isValid={errors && !errors.email}
        />
      </InputGroup>
      {errors && errors.email && (
        <p className="m-0 text-start text-danger fw-bold">{errors.email}</p>
      )}
      <Form.Label className="fw-bold mt-3">Password</Form.Label>
      <InputGroup>
        <InputGroup.Text id="basic-addon1">
          <RiLockPasswordFill />
        </InputGroup.Text>
        <FormControl
          type="password"
          placeholder="password have 8-16 characters "
          aria-describedby="basic-addon1"
          onChange={changeHandler}
          value={password}
          name="password"
          isInvalid={errors && errors.password}
          // isValid={errors && !errors.password}
        />
      </InputGroup>
      {errors && errors.password && (
        <p className="m-0 text-start text-danger fw-bold">{errors.password}</p>
      )}
      <Form.Label className="fw-bold mt-3">Confirm Password</Form.Label>
      <InputGroup>
        <InputGroup.Text id="basic-addon1">
          <GiConfirmed />
        </InputGroup.Text>
        <FormControl
          type="password"
          placeholder="confirm password"
          aria-describedby="basic-addon1"
          onChange={changeHandler}
          value={confirmedPassword}
          name="confirmedPassword"
          // isInvalid={errors && errors.confirmedPassword}
        />
      </InputGroup>
      {errors && errors.confirmedPassword && (
        <p className="m-0 text-start text-danger fw-bold">
          {errors.confirmedPassword}
        </p>
      )}
      <Form.Check type="checkbox" className="mt-4">
        <Form.Check.Input
          type="checkbox"
          checked={isAgree}
          onChange={agreementHandler}
        />
        <Form.Check.Label>
          <p>
            I agree to the <a href="">terms & condtion </a> and
            <a href="">privacy policy</a>
          </p>
        </Form.Check.Label>
      </Form.Check>

      <div className="d-grid gap-2 p-5 ">
        <Button type="submit" variant="success" disabled={!isAgree}>
          {!hideSpinner ? <Spinner animation="border" /> : "Sign Up"}
        </Button>
      </div>
    </Form>
  );
}
