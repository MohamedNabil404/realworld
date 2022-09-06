import { login, register } from "../../lib/api";
import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { isErrorType } from "../../lib/helpers";
import { RegisterType } from "../../lib/api";
import { CustomError } from "../../lib/helpers";
import { useState } from "react";

const RegisterForm = () => {
  const router = useRouter();
  const [newError, setNewError] = useState("");
  const RegisterSchema = Yup.object().shape({
    username: Yup.string().required("Username can't be blank"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email can't be blank "),
    password: Yup.string()
      .max(50, "Too Long!")
      .required("Password can't be blank"),
  });

  // const { mutate, error, isError, isSuccess, data } = useMutation(login, {
  //   onSuccess(d, v, c) {
  //     localStorage.setItem("token", d?.user?.token);
  //     router.push("/");
  //   },
  // });

  const {
    mutate: mutateRegister,
    error: errorRegister,
    isError: isErrorRegister,
    isSuccess: isSuccessRegister,
    data: dataRegister,
  } = useMutation<any, CustomError, RegisterType, unknown>(register, {
    onSuccess(d, v, c) {
      localStorage.setItem("token", d?.user?.token);
      router.push("/");
    },
    onError(error, variables, context) {
      console.log(error?.response?.data?.errors);
      setNewError(error?.response?.data?.errors);
    },
  });

  console.log(newError);

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values) => {
        console.log(values);
        mutateRegister({
          username: values.username,
          email: values.email,
          password: values.password,
        });
      }}
    >
      {({ touched, isSubmitting }) => (
        <>
          {Object.entries(newError).map((element, index, array) => {
            return <li className="text-red-600 mb-3">{element}</li>;
          })}
          <Form className="flex flex-col w-full">
            <Field
              name="username"
              type="text"
              className=" mb-2 py-3 px-6 text-xl rounded border border-[#00000026] "
              placeholder="Username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="mb-4 text-red-400"
            />
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
              <button type="submit">Sign up</button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default RegisterForm;
