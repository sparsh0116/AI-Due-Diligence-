import {
  LayoutDashboard,
  Rocket,
  FolderOpen,
  Brain,
  FileText,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Startups",
    icon: Rocket,
  },
  {
    title: "Documents",
    icon: FolderOpen,
  },
  {
    title: "AI Analysis",
    icon: Brain,
  },
  {
    title: "Reports",
    icon: FileText,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">

      <div className="h-20 border-b border-slate-800 flex items-center px-8">

        <div>

          <h1 className="text-xl font-bold tracking-wide">
            AI Due Diligence
          </h1>

          <p className="text-xs text-slate-500">
            Venture Intelligence Platform
          </p>

        </div>

      </div>

      <nav className="mt-8 px-4 flex-1">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className={`w-full flex items-center gap-4 rounded-xl px-4 py-3 mb-2 transition-all duration-300
              ${
                item.active
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >

              <Icon size={20} />

              {item.title}

            </button>

          );

        })}

      </nav>

    </aside>
  );
}

export default Sidebar;