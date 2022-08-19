import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import MainLoginSection from "../../components/MainSigninSection/MainLoginSection";
const Login = () => {
  return (
    <div className="flex min-h-screen flex-col w-full font-titillium">
      <Navbar />
      <MainLoginSection />
    </div>
  );
};

export default Login;
