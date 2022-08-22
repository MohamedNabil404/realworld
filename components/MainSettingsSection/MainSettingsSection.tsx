import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoginForm from "../LoginForm/LoginForm";
import SettingsForm from "../SettingsForm/SettingsForm";

const MainSettingsSection = () => {
  const [token, setToken] = useState<string | null | undefined>(null);
  const router = useRouter();
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  function logoutHandler() {
    localStorage.removeItem("token");
    router.push("/");
  }

  if (!token) {
    return <span>You're not signed in!</span>;
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="min-w-[570px] flex flex-col justify-center items-center">
        <h1 className="text-[40px] mt-4 ">Sign in</h1>
        <Link href="">
          <a className="text-pgreen mb-4 ">Need an account?</a>
        </Link>
        <SettingsForm />
        <button className="mt-10 text-red-500" onClick={logoutHandler}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default MainSettingsSection;
