import { login, register } from "../../lib/api";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { getCurrentUser } from "../../lib/api";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const SettingsForm = () => {
  const router = useRouter();
  const SettingsSchema = Yup.object().shape({
    username: Yup.string(),
    email: Yup.string().email("Invalid email"),
    password: Yup.string().max(50, "Too Long!"),
  });

  const [token, setToken] = useState<string | null | undefined>(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const { data, error } = useQuery(
    ["username", token],
    () => getCurrentUser(token),
    { enabled: token ? true : false }
  );

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={SettingsSchema}
      onSubmit={(values) => {}}
    >
      {({ touched, isSubmitting }) => (
        <>
          <Form className="flex flex-col w-full">
            <Field
              name="username"
              type="text"
              className=" mb-2 py-3 px-6 text-xl rounded border border-[#00000026] "
              placeholder="Username"
            />

            <Field
              name="email"
              type="email"
              className=" mb-2 py-3 px-6 text-xl rounded border border-[#00000026] "
              placeholder="Email"
            />

            <Field
              name="password"
              type="password"
              className="mb-2 py-3 px-6 text-xl rounded border border-[#00000026] "
              placeholder="Password"
            />

            <div className=" bg-pgreen py-3 px-6 w-fit ml-auto text-white rounded text-xl">
              <button type="submit">Update Settings</button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default SettingsForm;
