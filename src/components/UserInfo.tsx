import { useState } from "react";

const UserInfo = () => {
  const [user, setUser] = useState({ name: "", age: "0", hobbies: [] });
  console.log(user);

  return (
    <form>
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        className="border border-purple-300 m-10"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <input
        onChange={(e) => setUser({ ...user, age: e.target.value })}
        className="border border-purple-300 m-10"
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />
      <input
        onBlur={(e) =>
          setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
        }
        className="border border-purple-300 m-10"
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="hobbies"
      />
      <button
        className="p-2 w-[80px] rounded-lg bg-violet-500 text-slate-100"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default UserInfo;
