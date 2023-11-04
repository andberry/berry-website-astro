import { useState } from "react";
import { Switch } from "@headlessui/react";

export const ThemeSwitch = () => {
  const [enabled, setEnabled] = useState(true);
  const switchCB = (val) => {
    console.log("switchCB: ", val);
    if (val === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setEnabled(val);
  };

  return (
    <div className="flex gap-2 items-center">
      <span className="text-xs">Light</span>

      <Switch
        checked={enabled}
        onChange={switchCB}
        className={`${
          enabled ? "bg-raisingBlack" : "bg-black0"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-greenyellow transition`}
        />
      </Switch>
      <span className="text-xs">Dark</span>
    </div>
  );
};
