import Link from "next/link";
import { useState, useEffect } from "react";

const AddComment = () => {
  const [token, setToken] = useState<string | null | undefined>(null);

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
    <div className="flex flex-col mb-3">
      <textarea
        id="comment"
        name="comment"
        rows={3}
        className="w-full border border-gray-500 p-5 "
      ></textarea>
      <div className="w-full h-full bg-gray-100 py-3 px-6 flex border border-gray-500">
        <button className="ml-auto  bg-pgreen border-pgreen text-white py-1 px-2 rounded-md">
          Post comment
        </button>
      </div>
    </div>
  );
};

export default AddComment;
