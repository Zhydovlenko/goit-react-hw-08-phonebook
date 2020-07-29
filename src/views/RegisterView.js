import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import styles from './Views.module.css';

class RegisterView extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().min(5, 'Name must be at least 5 characters'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        })}
        onSubmit={this.props.onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h2 className={styles.title}>Sign Up</h2>

            <label className={styles.formLabel}>
              Name
              <Field name="name" type="text" className={styles.input} />
            </label>
            {errors.name && touched.name ? (
              <div className={styles.error}>{errors.name}</div>
            ) : null}

            <label className={styles.formLabel}>
              Email
              <Field name="email" type="text" className={styles.input} />
            </label>
            {errors.email && touched.email ? (
              <div className={styles.error}>{errors.email}</div>
            ) : null}

            <label className={styles.formLabel}>
              Password
              <Field name="password" type="password" className={styles.input} />
            </label>
            {errors.password && touched.password ? (
              <div className={styles.error}>{errors.password}</div>
            ) : null}

            <label className={styles.formLabel}>
              Confirm Password
              <Field
                name="confirmPassword"
                type="password"
                className={styles.input}
              />
            </label>
            {errors.confirmPassword && touched.confirmPassword ? (
              <div className={styles.error}>{errors.confirmPassword}</div>
            ) : null}

            <button className={styles.btn} type="submit">
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default connect(null, { onSubmit: authOperations.register })(
  RegisterView,
);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { authOperations } from '../redux/auth';

// import styles from './Views.module.css';

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister({ ...this.state });
//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div>
//         <h2 className={styles.title}>Sign Up</h2>

//         <form onSubmit={this.handleSubmit} className={styles.form}>
//           <label className={styles.formLabel}>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//               className={styles.input}
//             />
//           </label>

//           <label className={styles.formLabel}>
//             Email
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//               className={styles.input}
//             />
//           </label>

//           <label className={styles.formLabel}>
//             Password
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//               className={styles.input}
//             />
//           </label>

//           <button className={styles.btn} type="submit">
//             Sign up
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default connect(null, { onRegister: authOperations.register })(
//   RegisterView,
// );
