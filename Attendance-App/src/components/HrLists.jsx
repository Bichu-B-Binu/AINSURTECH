import HrListBody from "./HrListBody";

export default function HrLists() {
  return (
    <>
      <div className="flex flex-col">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-0">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light text-surface dark:text-white">
              <thead className="border-b border-neutral-200 bg-[#237dde] font-medium text-white dark:border-white/10">
                <tr>
                  <th scope="col" className=" px-4 py-4">
                    Time
                  </th>
                  <th scope="col" className=" px-4 py-4">
                    Employee ID
                  </th>
                  <th scope="col" className=" px-4 py-4">
                    Employee Name
                  </th>
                  <th scope="col" className=" px-4 py-4">
                    Location
                  </th>
                  <th scope="col" className=" px-4 py-4">
                    Attendance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b text-zinc-950 border-neutral-200 dark:border-white/10">
                  <HrListBody />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
