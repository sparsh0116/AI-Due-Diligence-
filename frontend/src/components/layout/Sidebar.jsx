import {
  LayoutDashboard,
  Rocket,
  FolderOpen,
  Brain,
  FileText,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Startups", icon: Rocket },
  { name: "Documents", icon: FolderOpen },
  { name: "AI Analysis", icon: Brain },
  { name: "Reports", icon: FileText },
  { name: "Settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">

      <div className="h-20 flex items-center px-8 border-b border-slate-800">

        <div>
          <h1 className="text-xl font-bold text-white">
            AI Due Diligence
          </h1>

          <p className="text-xs text-slate-500">
            Venture Intelligence
          </p>
        </div>

      </div>

      <nav className="flex-1 mt-6 px-4">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.name}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300 mb-2"
            >

              <Icon size={20} />

              {item.name}

            </button>

          );

        })}

      </nav>

    </aside>
  );
}

export default Sidebar;