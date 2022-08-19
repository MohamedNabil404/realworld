import Link from "next/link";
import LoginForm from "../LoginForm/LoginForm";

const MainLoginSection = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="min-w-[540px] flex flex-col justify-center items-center">
        <h1 className="text-[40px] mt-4 ">Sign in</h1>
        <Link href="">
          <a className="text-pgreen mb-4 ">Need an account?</a>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
};

export default MainLoginSection;
