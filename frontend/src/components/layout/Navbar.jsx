import { Bell, Search, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="h-20 bg-slate-950 border-b border-slate-800 px-10 flex items-center justify-between">

      <div>

        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-slate-500 text-sm">
          AI Powered Startup Due Diligence
        </p>

      </div>

      <div className="flex items-center gap-6">

        <div className="flex items-center bg-slate-900 rounded-xl px-4 py-2 border border-slate-800">

          <Search
            size={18}
            className="text-slate-500"
          />

          <input
            placeholder="Search..."
            className="bg-transparent outline-none ml-3 text-white placeholder:text-slate-500"
          />

        </div>

        <Bell
          size={22}
          className="text-slate-400 hover:text-white cursor-pointer"
        />

        <UserCircle
          size={36}
          className="text-indigo-500 cursor-pointer"
        />

      </div>

    </header>
  );
}

export default Navbar;