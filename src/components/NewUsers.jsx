import { useSelector } from "react-redux";

function NewUsers() {
  const { users } = useSelector((use) => use.auth);
  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[18px] sm:text-[25px] md:text-[30px] font-bold text-center ">
          New users
        </h2>
        <div className="overflow-auto h-[180px]">
          <table className="table table-xs">
            <thead>
              <tr>
                <th className="md:text-[25px] underline font-bold">Name</th>
                <th className="md:text-[25px] underline font-bold">Email</th>
                <th className="md:text-[25px] underline font-bold">
                  Register day
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td className="md:text-[20px] italic font-medium">
                        {user.name}
                      </td>
                      <td className="md:text-[20px] italic font-medium">
                        {user.email.slice(0, 4)} *** @gmail.com
                      </td>
                      <td className="md:text-[20px] italic font-medium">
                        {user.time}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
              <tr>
                <th className="md:text-[25px] underline font-bold">Name</th>
                <th className="md:text-[25px] underline font-bold">Email</th>
                <th className="md:text-[25px] underline font-bold">
                  Register day
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default NewUsers;
