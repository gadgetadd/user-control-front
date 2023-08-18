import { Container, Form, Field, Button, Message } from './UserForm.styled';
import { useState } from 'react';
import { API } from '../../service/api';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  const clearMessage = () => {
    setError(null);
    setSuccess(null);
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log('unsupported input name');
    }
    clearMessage();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, password } = e.currentTarget.elements;
    const newUser = {
      name: name.value.trim(),
      email: email.value.trim(),
      password: password.value,
    };
    try {
      setLoading(true);
      const res = await API.createUser(newUser);
      setSuccess(res);
      clearForm();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Field
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
        />
        <Field
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
        />
        <Field
          value={password}
          onChange={handleChange}
          type="text"
          name="password"
          placeholder="Password"
        />
        <Button disabled={isLoading} type="submit">
          Create User
        </Button>
      </Form>
      {success && <Message>{success}</Message>}
      {error && <Message variant="error">{error}</Message>}
    </Container>
  );
};

export default UserForm;
