import { useRef } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function UserRefs() {
  const { user, ref } = useSelector((use) => use.auth);
  const textElementRef = useRef(null);
  const textSilka = useRef(null);

  const handleCopyClick = async () => {
    try {
      if (textElementRef.current) {
        await navigator.clipboard.writeText(textElementRef.current.innerText);
        toast.success(
          `Nusxa olindi. endi do'stlaringizni chaqirishingiz mumkun.`
        );
      }
    } catch (error) {
      console.error("nusxa olishda xatolik yuz berdi:", error);
    }
  };

  const handleCopySite = async () => {
    try {
      if (textSilka.current) {
        await navigator.clipboard.writeText(textSilka.current.innerText);
        toast.success(
          `Nusxa olindi. endi do'stlaringizni chaqirishingiz mumkun.`
        );
      }
    } catch (error) {
      console.error("nusxa olishda xatolik yuz berdi:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[18px] text-center sm:text-[22px] md:text-[28px] font-bold italic">
          Referal havola
        </h2>
        <div className="flex flex-col items-center gap-[10px] border  border-black rounded-[10px] py-[20px] px-[10px]">
          <p className="flex flex-row gap-[5px] text-[15px] font-bold">
            Sayt silkasi:
            <span
              className="font-medium cursor-pointer"
              ref={textSilka}
              onClick={handleCopySite}
            >
              https://chicken-farm.netlify.app/
            </span>
          </p>

          <p className="flex flex-row gap-[5px] text-[15px] font-bold">
            Ref kalitingiz:
            <span
              className="font-medium cursor-pointer"
              ref={textElementRef}
              onClick={handleCopyClick}
            >
              {user.id}
            </span>
          </p>
        </div>
        <div>
          <h2 className="text-center my-[20px] text-[18px] sm:text-[22px] md:text-[28px] font-bold italic">
            Siz chaqirgan odamlar: <span>{ref && ref.length}</span>
          </h2>
          {ref.length <= 0 && (
            <h3 className="text-center text-[20px] font-semibold sm:text-[25px] md:text-[30px]">
              siz hali bironta ham dostizni taklif qilmagansiz :(
            </h3>
          )}
          {ref.length >= 1 && (
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <thead>
                  <tr>
                    <th className="md:text-[25px] underline font-bold">Name</th>
                    <th className="md:text-[25px] underline font-bold">
                      Email
                    </th>
                    <th className="md:text-[25px] underline font-bold">
                      Register Day
                    </th>
                    <th className="md:text-[25px] underline font-bold">
                      Withdraw
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ref &&
                    ref.length >= 1 &&
                    ref.map((res) => {
                      return (
                        <tr key={res.id}>
                          <td className="md:text-[20px] italic font-medium">
                            {res.name}
                          </td>
                          <td className="md:text-[20px] italic font-medium">
                            {res.email}
                          </td>
                          <td className="md:text-[20px] italic font-medium">
                            {res.time}
                          </td>
                          <td className="md:text-[20px] italic font-medium">
                            {res.withdraw}$
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
                <tfoot>
                  <tr>
                    <th className="md:text-[25px] underline font-bold">Name</th>
                    <th className="md:text-[25px] underline font-bold">
                      Email
                    </th>
                    <th className="md:text-[25px] underline font-bold">
                      Register Day
                    </th>
                    <th className="md:text-[25px] underline font-bold">
                      Withdraw
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserRefs;
