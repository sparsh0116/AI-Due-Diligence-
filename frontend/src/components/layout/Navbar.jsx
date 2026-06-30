import { Bell, Search, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="h-20 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-10">

      <div>

        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>

        <p className="text-slate-500 text-sm">
          Welcome back, Sparsh
        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="bg-slate-900 border border-slate-800 rounded-xl flex items-center px-4 py-2 w-72">

          <Search size={18} className="text-slate-500"/>

          <input
            placeholder="Search startups..."
            className="bg-transparent outline-none ml-3 flex-1 placeholder:text-slate-500"
          />

        </div>

        <button className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800">

          <Bell size={18}/>

        </button>

        <UserCircle
          size={36}
          className="text-indigo-500 cursor-pointer"
        />

      </div>

    </header>
  );
}

export default Navbar;