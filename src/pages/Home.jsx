import NewUsers from "../components/NewUsers";
import ProfileComp from "../components/ProfileComp";
import UserRefs from "../components/UserRefs";

function Home() {
  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        <h2 className="md:text-[30px] font-bold italic text-center sm:text-[25px] text-[15px]">
          Xush kelibsiz chicken farm saytiga :)
        </h2>
        <ProfileComp />
        <NewUsers />
        <UserRefs />
      </div>
    </div>
  );
}

export default Home;
