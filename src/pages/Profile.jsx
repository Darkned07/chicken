import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((user) => user.auth);

  console.log(user);
  return (
    <div>
      <div className="rounded-[10px] border border-black h-[500px] w-full flex flex-col px-[10px]  items-center pt-[30px]">
        <h2 className="sm:text-[20px] text-[12px] italic md:text-[25px] font-bold">
          Ro'yxatdan o'tgan sanangiz: {user.time}
        </h2>
        <div className="flex flex-col items-start mt-[20px] gap-[10px] ">
          <h2 className="text-[10px] sm:text-[15px] font-bold md:text-[20px] flex flex-row gap-[10px] items-center">
            ID: <span className="font-normal">{user.id}</span>
          </h2>
          <h2 className="text-[10px] font-bold sm:text-[15px] md:text-[20px] flex flex-row gap-[10px] items-center">
            Email: <span className="font-normal">{user.email}</span>
          </h2>
          <h2 className="text-[10px] font-bold sm:text-[15px] md:text-[20px] flex flex-row gap-[10px] items-center">
            Sotib olish Balans:
            <span className="font-normal">{user.balansone}</span>
          </h2>
          <h2 className="text-[10px] font-bold sm:text-[15px] md:text-[20px] flex flex-row gap-[10px] items-center">
            Chiqarib olish Balans:
            <span className="font-normal">{user.balanstwo}</span>
          </h2>
          <h2 className="text-[10px] font-bold sm:text-[15px] md:text-[20px] flex flex-row gap-[10px] items-center">
            Pul chiqargan: <span className="font-normal">{user.withdraw}</span>
          </h2>
          <h2 className="text-[10px] font-bold sm:text-[15px] md:text-[20px] flex flex-row gap-[10px] items-center">
            Taklif qilganni ID si :
            <span className="font-normal">{user.friend}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
