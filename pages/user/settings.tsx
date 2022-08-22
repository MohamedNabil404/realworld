import Link from "next/link";
import { useState, useEffect } from "react";
import MainSettingsSection from "../../components/MainSettingsSection/MainSettingsSection";
import Navbar from "../../components/Navbar/Navbar";

const Settings = () => {
  const [token, setToken] = useState<string | null | undefined>(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  if (!token) {
    return <span>You're not signed in!</span>;
  }
  return (
    <div className="flex min-h-screen flex-col w-full font-titillium">
      <Navbar />
      <MainSettingsSection />
    </div>
  );
};

export default Settings;
