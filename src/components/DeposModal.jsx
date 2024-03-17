import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function DeposModal({ sel, val }) {
  const [hamyon, setHamyon] = useState(null);
  const navigate = useNavigate();
  const handleStore = () => {
    if (hamyon) {
      toast.success(
        `siz ${val}$ shuncha miqdorda pul kiritdingiz adminlar pulni tasdiqlashi bilan hisobingizga pulni tashlaymiz :)`
      );
      navigate("/");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-[5px]">
        <h2 className="text-[15px] sm:text-[22px] md:text-[30px]">
          siz kiritmoqchi bolgan summa:{" "}
          <span className="font-bold">{val}$</span>
        </h2>
        <h2 className="text-[15px] sm:text-[22px] md:text-[30px]">
          siz <span className="font-bold uppercase">{sel}</span> tolov turini
          tanladingiz
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center mt-[20px]">
        <h2 className="text-[15px] sm:text-[22px] md:text-[30px]">
          Tolov qilishingiz kerak!
        </h2>
        <div>
          <h2>{sel == "payeer" && <span>P1081517853</span>}</h2>
          <h2>
            {sel == "uzbcard" && <span className="">9860 2301 0863 3077</span>}
          </h2>
        </div>
        <div className="mt-[10px]">
          <h2 className="text-[15px] ">
            Tolov qilgan hamyon yoki kartangizni nomerini yozib o'ting
          </h2>
          {sel == "payeer" && (
            <label className="input input-bordered flex items-center gap-2">
              Payeer
              <input
                onChange={(e) => {
                  setHamyon(e.target.value);
                }}
                type="text"
                className="grow"
                placeholder="P1081517853"
              />
            </label>
          )}
          {sel == "uzbcard" && (
            <label className="input input-bordered flex items-center gap-2">
              Uzbcard
              <input
                onChange={(e) => {
                  setHamyon(e.target.value);
                }}
                type="text"
                className="grow"
                placeholder="9860 2301 0863 3077"
              />
            </label>
          )}
        </div>

        <button onClick={handleStore} className="btn btn-secondary mt-[20px]">
          To'lov qildim
        </button>
      </div>
    </div>
  );
}

export default DeposModal;
