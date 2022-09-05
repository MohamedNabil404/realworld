import Link from "next/link";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { addCommentToArticle } from "../../lib/api";

const AddComment = ({ refetch }: any) => {
  const CommentSchema = Yup.object().shape({
    comment: Yup.string().required("Password is required"),
  });

  const { query } = useRouter();
  const [token, setToken] = useState<string | null | undefined>(null);
  const { mutate, error, isError, isSuccess, data } = useMutation(
    addCommentToArticle,
    {
      onSuccess(d, v, c) {
        refetch();
      },
    }
  );

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  if (!token) {
    return (
      <div className="mr-auto mb-4">
        <Link href="/user/login">
          <a className="text-pgreen"> Sign in </a>
        </Link>
        or{" "}
        <Link href="/user/register">
          <a className="text-pgreen">Sign Up</a>
        </Link>{" "}
        to Add comments on this article
      </div>
    );
  }
  return (
    <Formik
      initialValues={{
        comment: "",
      }}
      onSubmit={(values, actions) => {
        mutate({ slug: query.slug, comment: values.comment, token: token });
        actions.resetForm({
          values: {
            comment: "",
          },
        });
      }}
      validationSchema={CommentSchema}
      // onSubmit={(values) => {
      //   mutate({ email: values.email, password: values.password });
      // }}>
    >
      {({ touched, isSubmitting }) => (
        <Form>
          <div className="flex flex-col mb-3">
            <Field
              as="textarea"
              key="comment"
              id="comment"
              name="comment"
              rows={3}
              className="w-full border border-gray-300 p-5 "
            ></Field>
            <div className="w-full h-full bg-gray-100 py-3 px-6 flex border border-gray-300">
              <button
                type="submit"
                name="submit"
                className="ml-auto  bg-pgreen border-pgreen text-white py-1 px-2 rounded-md"
              >
                Post comment
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddComment;
