import { useEffect, useState } from "react";
import icon from "../../image/Icon.jpeg";
import { useSelector } from "react-redux";

export default function EmployeeScreen() {
  const [btns, setBtns] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve and parse data from localStorage
    const storedData = localStorage.getItem("persist:root");
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      // Extract and parse user data
      const userString = parsedData.user;
      if (userString) {
        const userObject = JSON.parse(userString);
        setUserData(userObject.currentUser);
      }
    }
  }, []);

  // useEffect(() => {
  //   const storedData = localStorage.getItem("persist:root");
  //   if (storedData) {
  //     try {
  //       const parsedData = JSON.parse(storedData);
  //       const userString = parsedData.user;
  //       if (userString) {
  //         const userObject = JSON.parse(userString);
  //         setUserData(userObject.currentUser);
  //       } else {
  //         console.error("No user data found in localStorage.");
  //       }
  //     } catch (error) {
  //       console.error("Error parsing localStorage data:", error);
  //     }
  //   } else {
  //     console.error("No data found in localStorage.");
  //   }
  // }, []);
  // console.log(userData);
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
            {/* {userData.empName} */}
            name
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
                {/* {userData.empId} */}
                id
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
