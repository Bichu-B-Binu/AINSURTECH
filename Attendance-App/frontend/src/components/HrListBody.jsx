export default function HrListBody() {
  return (
    <>
      <td className="whitespace-nowrap  px-6 py-4 font-medium">
        <div className="text-center">
          <img
            className="h-14 w-14 rounded-full border-4 border-white dark:border-orange-500 mx-auto my-4"
            src=""
            alt="emp"
          />
        </div>
      </td>

      <td className="whitespace-nowrap  px-6 py-4 font-medium">AI001</td>
      <td className="whitespace-nowrap  px-6 py-4 font-medium">Mark</td>
      <td className="whitespace-nowrap  px-6 py-4 font-medium">Location</td>
      <td className="whitespace-nowrap  px-6 py-4 font-medium ">
        <div className="container">
          <p className="py-2">
            <span className="me-4 bg-green-600 px-1 py-1 rounded text-white hover:bg-green-400">
              IN
            </span>
            time
          </p>
          <span className="me-4 bg-red-600 px-1 py-1 rounded text-white hover:bg-red-400">
            OUT
          </span>
          time
        </div>
      </td>
    </>
  );
}
