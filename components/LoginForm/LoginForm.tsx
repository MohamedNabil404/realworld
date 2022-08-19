import { login, getCurrentUser } from "../../lib/api";
import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { isErrorType } from "../../lib/helpers";

const LoginForm = () => {
  const router = useRouter();
  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .max(50, "Too Long!")
      .required("Password is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const { mutate, error, isError, isSuccess, data } = useMutation(login, {
    onSuccess(d, v, c) {
      localStorage.setItem("token", d?.user?.token);
      router.push("/");
    },
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        mutate({ email: values.email, password: values.password });
      }}
    >
      {({ touched, isSubmitting }) => (
        <>
          {isErrorType(error) ? (
            <p className="mb-3 text-red-600 self-start">
              Username or password are invalid
            </p>
          ) : null}
          <Form className="flex flex-col w-full">
            <Field
              name="email"
              type="email"
              className=" mb-2 py-3 px-6 text-xl rounded border border-[#00000026] "
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="mb-4 text-red-400"
            />

            <Field
              name="password"
              type="password"
              className="mb-2 py-3 px-6 text-xl rounded border border-[#00000026] "
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="mb-4  text-red-400"
            />
            <div className=" bg-pgreen py-3 px-6 w-fit ml-auto text-white rounded text-xl">
              <button type="submit">Submit</button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
