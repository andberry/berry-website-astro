import { useState } from "react";
import { Switch } from "@headlessui/react";

export const ThemeSwitch = () => {
  const [themeIsDark, setThemeIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const themeSwitchCallBack = (val) => {
    if (val === true) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setThemeIsDark(val);
  };

  return (
    <Switch
      checked={themeIsDark}
      onChange={themeSwitchCallBack}
      className={`${
        themeIsDark ? "bg-raisingBlack" : "bg-white border-2 border-[black0]"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={`${
          themeIsDark ? "translate-x-6 bg-pink2" : "translate-x-1 bg-purple"
        } inline-block h-4 w-4 transform rounded-full transition duration-1000`}
      />
    </Switch>
  );
};
