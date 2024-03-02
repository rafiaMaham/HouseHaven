import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center font-montserrat my-7 text-maroon">
        Profile
      </h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 "
          alt="profilepic"
        />
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-maroon text-white font-montsrrat p-3  rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
};

export default Profile;
