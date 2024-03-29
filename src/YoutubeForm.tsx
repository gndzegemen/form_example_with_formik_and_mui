import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

// Shape of form values
interface FormValues {
    email: string;
    password: string;
}

interface OtherProps {
    message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting, message } = props;
    return (
        <Form>
            <h1>{message}</h1>
            <Field type="email" name="email" />
            {touched.email && errors.email && <div>{errors.email}</div>}

            <Field type="password" name="password" />
            {touched.password && errors.password && <div>{errors.password}</div>}

            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </Form>
    );
};

// The type of props MyForm receives
interface MyFormProps {
    initialEmail?: string;
    message: string;
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
        return {
            email: props.initialEmail || '',
            password: '',
        };
    },

    // Add a custom validation function (this can be async too!)
    validate: (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {};
        if (!values.email) {
            errors.email = 'Required';
        }
        return errors;
    },

    handleSubmit: () => {
        // do submitting things
    },
})(InnerForm);

// Use <MyForm /> wherever
const YoutubeForm = () => (
    <div>
        <h1>My App</h1>
        <p>This can be anywhere in your application</p>
        <MyForm message="Sign up" />
    </div>
);

export default YoutubeForm;
