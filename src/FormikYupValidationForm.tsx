import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialFormValues = {
    email: "",
    username: "",
    password: "",
    color: "red",
    bio: "",
};

const formSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    username: Yup.string()
        .required()
        .min(6, "Username is too short - should be 6 chars minimum"),
    password: Yup.string()
        .required()
        .min(6, "Password is too short - should be 6 chars minimum"),
    color: Yup.string()
        .oneOf(["red", "blue", "green"])
        .required("Color is required."),
    bio: Yup.string().required("Bio is required"),
});

export const FormikYupValidationForm = () => {
    const submitHandler = (
        values: typeof initialFormValues,
        { resetForm }: { resetForm: () => void }
    ) => {
        console.log(values);
        resetForm();
    };

    return (
        <div>
            <h2 className="form__title">Formik Yup Validation Form</h2>
            <Formik
                initialValues={initialFormValues}
                onSubmit={submitHandler}
                validationSchema={formSchema}
                validateOnChange={false}
                validateOnBlur={false}
            >
                <Form className="form">
                    <div className="form__group">
                        <label htmlFor="email" className="form__label">
                            Email
                        </label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            className="form__input"
                        />
                        <ErrorMessage name="email" className="error" component="small" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="username" className="form__label">
                            Username
                        </label>
                        <Field
                            type="text"
                            id="username"
                            name="username"
                            className="form__input"
                        />
                        <ErrorMessage name="username" className="error" component="small" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="password" className="form__label">
                            Password
                        </label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            className="form__input"
                        />{" "}
                        <ErrorMessage name="password" className="error" component="small" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="color" className="form__label">
                            Favorite Color?
                        </label>
                        <Field as="select" name="color" id="color" className="form__select">
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </Field>{" "}
                        <ErrorMessage name="color" className="error" component="small" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="bio" className="form__label">
                            Bio
                        </label>
                        <Field
                            as="textarea"
                            name="bio"
                            id="bio"
                            className="form__textarea"
                        ></Field>{" "}
                        <ErrorMessage name="bio" className="error" component="small" />
                    </div>
                    <button className="button" type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};