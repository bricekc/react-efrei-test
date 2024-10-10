import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useState } from 'react';
import { UserContext } from '../context/UserContext.jsx';

function Login() {
  const navigate = useNavigate();
  const { login } = useState(UserContext);
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={async (values) => {
        try {
          const postForm = await fetch('https://express-mongodb-k76a.onrender.com/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          });
          const data = await postForm.json();
          login(data.user.firstName);
          navigate('/', { replace: true });
        } catch (error) {
          console.log(error);
        }
      }}>
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="login">Login:</label>
            <Field className="form-control" type="email" name="email" />
            <ErrorMessage style={{ color: 'red' }} name="email" component="div" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <Field className="form-control" type="password" name="password" />
            <ErrorMessage style={{ color: 'red' }} name="password" component="div" />
          </div>
          <button className="btn btn-primary mt-3" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
