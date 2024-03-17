import { useState } from "react";
import { toast } from "react-toastify";

function Withdraw() {
  const [withVal, setWithVal] = useState(null);
  const [numWith, setNumWith] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (withVal.length >= 5 && numWith.length >= 1) {
      console.log({
        payeer: withVal,
        money: numWith + "$",
      });
      toast.success(
        "tez orada adminlar pulni hisobingziga tushirib berishadi :)"
      );
    } else {
      toast.error("siz malumot kiritishda xatolikga yo'l qoydingiz!");
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[600px] w-full  border rounded-md px-[15px] py-[20px]">
        <div>
          <h2 className="text-center text-[20px] sm:text-[25px] md:text-[30px] font-medium mb-[20px]">
            withdraw money :)
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-[20px]"
          >
            <label className="input input-bordered flex items-center gap-2">
              Payeer
              <input
                onChange={(e) => {
                  setWithVal(e.target.value);
                }}
                type="text"
                className="grow"
                placeholder="P1081517853"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              $
              <input
                type="number"
                className="grow"
                placeholder="writing withdraw 10$"
                onChange={(e) => {
                  setNumWith(e.target.value);
                }}
              />
            </label>
            <button className="btn btn-outline btn-secondary">withdraw</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
