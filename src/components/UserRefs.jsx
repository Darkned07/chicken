import { useRef } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function UserRefs() {
  const { user } = useSelector((use) => use.auth);
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
            Siz chaqirgan odamlar: 1
          </h2>
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Register Day</th>
                  <th>Withdraw</th>
                  <th>Deposit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>test</td>
                  <td>test@gmail.com</td>
                  <td>Mon March 11 2024</td>
                  <td>100$</td>
                  <td>100$</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Register Day</th>
                  <th>Withdraw</th>
                  <th>Deposit</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRefs;
