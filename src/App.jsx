import Sidebar, { SidebarItem } from "./components/sidebar"
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings
} from "lucide-react"

export default function App() {

  return (
    <>
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />

        <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" active />
        <SidebarItem icon={<UserCircle size={20} />} text="Users" active />
        <SidebarItem icon={<Boxes size={20} />} text="Inventory" active />
        <SidebarItem icon={<Package size={20} />} text="Orders" active />
        <SidebarItem icon={<Receipt size={20} />} text="Billings" active />

        <hr className="my-3" />

        <SidebarItem icon={<Settings size={20} />} text="Settings" active />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" active />
      </Sidebar>
    </>
  )
}