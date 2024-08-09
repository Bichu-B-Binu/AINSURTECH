import { useState } from "react";
import HrLists from "../components/HrLists";
import NewMemberAdd from "../components/NewMemberAdd";

export default function HrScreen() {
  const [ActionBtn, setActionBtn] = useState(false);
  const date = new Date();
  const formattedDate = date.toLocaleDateString();

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-5">
        <img
          alt="ainsurtek"
          src="https://ainsurtek.com/wp-content/themes/ainsurtech/img/logo.png"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          ATTENDANCE REGISTER
        </h2>
      </div>

      <div className="m-2 text-blue-500 font-medium flex justify-between">
        <h4>{`Date:${formattedDate}`}</h4>
        <div className="">
          <button
            onClick={() => setActionBtn(true)}
            className=" me-4 bg-green-600 px-6 py-1 rounded text-white hover:bg-green-400"
          >
            Add
          </button>
          <button className=" me-2 bg-red-600 px-6 py-1 rounded text-white hover:bg-red-400">
            Delete
          </button>
        </div>
      </div>

      <div>
        {ActionBtn ? (
          <NewMemberAdd setActionBtn={setActionBtn} />
        ) : (
          <div className="container mx-auto">
            <HrLists />
          </div>
        )}
      </div>
      <div className=" mt-52 text-center">
        <p>{date.getFullYear()}</p>
      </div>
    </>
  );
}
