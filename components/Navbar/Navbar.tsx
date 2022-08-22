import Link from "next/link";
import { useAppSelector } from "../../hooks/hooks";
import { FaPenSquare } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../lib/api";
import { useEffect, useState } from "react";
const Navbar = () => {
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
    <div className="flex items-center w-full custom-container  self-center py-3 px-4 ">
      <Link href="/">
        <a className="text-2xl text-pgreen font-bold"> conduit</a>
      </Link>

      <div className="flex ml-auto ">
        <ul className="">
          <Link href="/" className=" ">
            <a className="text-gray-400 text-base hover:text-gray-600   w-fit h-fit pr-3 ">
              Home
            </a>
          </Link>

          {token ? (
            <Link href="" className="">
              <a className="text-gray-400 text-base hover:text-gray-600  w-fit h-fit pr-3">
                New Post
              </a>
            </Link>
          ) : (
            <Link href="/user/login" className="">
              <a className="text-gray-400 text-base hover:text-gray-600  w-fit h-fit pr-3">
                Sign in
              </a>
            </Link>
          )}
          {token ? (
            <Link href="/user/settings" className="">
              <a className="text-gray-400 text-base hover:text-gray-600  w-fit h-fit pr-3">
                Settings
              </a>
            </Link>
          ) : (
            <Link href="/user/register" className="">
              <a className="text-gray-400 text-base hover:text-gray-600  w-fit h-fit pr-3">
                Sign up
              </a>
            </Link>
          )}
          {token && data ? (
            <Link href="" className="">
              <a className="text-gray-400 text-base hover:text-gray-600  w-fit h-fit pr-3">
                {data?.user?.username}
              </a>
            </Link>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
