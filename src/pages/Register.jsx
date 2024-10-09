import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        login: '',
        password: '',
        confirmPassword: ''
      }}
      onSubmit={async (values) => {
        const postForm = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          data: values
        });
        const data = await postForm.json();
        console.log(data);
        navigate('/');
      }}>
      <Form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <Field className="form-control" type="name" name="name" />
          <ErrorMessage style={{ color: 'red' }} name="name" component="div" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <Field className="form-control" type="email" name="email" />
          <ErrorMessage style={{ color: 'red' }} name="email" component="div" />
        </div>
        <div className="form-group">
          <label htmlFor="login">Login:</label>
          <Field className="form-control" type="login" name="login" />
          <ErrorMessage style={{ color: 'red' }} name="login" component="login" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <Field className="form-control" type="password" name="password" />
          <ErrorMessage style={{ color: 'red' }} name="password" component="div" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">confirmPassword:</label>
          <Field className="form-control" type="password" name="confirmPassword" />
          <ErrorMessage style={{ color: 'red' }} name="confirmPassword" component="div" />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default Register;
