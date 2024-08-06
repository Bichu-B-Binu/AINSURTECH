import { useState } from "react";
import icon from "../../image/Icon.jpeg";
export default function EmployeeScreen() {
  const [btns, setBtns] = useState(false);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="ainsurtek"
            src="https://ainsurtek.com/wp-content/themes/ainsurtech/img/logo.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome
          </h2>
        </div>

        <div className="px-4 pb-6">
          <div className="text-center my-4">
            <img
              className="h-32 w-32 rounded-full border-4 border-white dark:border-orange-500 mx-auto my-4"
              src={icon}
              alt=""
            />
            <div className="py-2">
              <h3 className="font-bold text-2xl text-gray-800 dark:text-gray mb-1">
                Full Name
              </h3>
            </div>
          </div>
        </div>

        <div className="px-4 pb-6">
          <div className="text-center my-4">
            <button
              className={`${
                btns ? "dark:border-blue-500" : "dark:border-green-500"
              } h-24 w-24 rounded-full border-4 border-white mx-auto my-4`}
              onClick={() => setBtns(!btns)}
            >
              {btns ? "Check In" : "Check Out"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
