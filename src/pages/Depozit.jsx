import { useRef, useState } from "react";
import DeposModal from "../components/DeposModal";
import { toast } from "react-toastify";

function Depozit() {
  const [md, setMd] = useState(false);
  const [selVal, setSelVal] = useState("null");
  const [depNum, setDepNum] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (depNum.length >= 1 && depNum >= 1) {
      if (selVal == "null") {
        toast.error("siz tolov turini tanlamadingiz :(");
      } else {
        setMd(true);
        document.getElementById("my_modal_1").showModal();
      }
    } else {
      toast.error("siz deposit qilmoqchi bolgan summa mavjud emas");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <h2 className="text-[20px] p-[10px] border   rounded-md max-w-[400px] border-slate-600 sm:text-[25px] md:text-[30px] text-center font-bold">
          Balansni to'ldirish :)
        </h2>
      </div>
      <div className="md:mt-[50px] sm:mt-[30px] mt-[25px] flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[20px] w-full max-w-[500px] "
        >
          <div className="flex flex-col gap-[20px] ">
            <input
              onChange={(e) => {
                setDepNum(e.target.value);
              }}
              type="number"
              placeholder="Writing deposit summa 10$"
              className="input input-bordered input-warning w-full "
            />
            <select
              onChange={(e) => {
                setSelVal(e.target.value);
              }}
              className="select select-warning w-full "
            >
              <option disabled selected value="null">
                Qaysi tolov turini tanlasyiz
              </option>
              <option value="payeer">Payeer</option>
              <option value="uzbcard">Uzb card</option>
            </select>
          </div>
          <button className="btn btn-outline">Deposit</button>
        </form>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          {md && <DeposModal val={depNum} sel={selVal} />}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Depozit;
