import PropTypes from "prop-types";
import { useContext } from "react";
import { SidebarContext } from "./sidebar";
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

const sidebarItens = (
	<div>
		<SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
		<SidebarItem icon={<BarChart3 size={20} />} text="Statistics" active />
		<SidebarItem icon={<UserCircle size={20} />} text="Users" active />
		<SidebarItem icon={<Boxes size={20} />} text="Inventory" active />
		<SidebarItem icon={<Package size={20} />} text="Orders" active />
		<SidebarItem icon={<Receipt size={20} />} text="Billings" active />

		<hr className="my-3" />

		<SidebarItem icon={<Settings size={20} />} text="Settings" active />
		<SidebarItem icon={<LifeBuoy size={20} />} text="Help" active />
	</div>
);

export function SidebarItem(sidebarItens) {
	const { expanded } = useContext(SidebarContext)

	return (
		<li
			className={`
		  relative flex items-center py-2 px-3 my-1
		  font-medium rounded-md cursor-pointer
		  transition-colors group
		  ${active
					? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
					: "hover:bg-indigo-50 text-slate-600"
				}
	  `}
		>
			{icon}
			<span
				className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
					}`}
			>
				{text}
			</span>
			{alert && (
				<div
					className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"
						}`}
				/>
			)}

			{!expanded && (
				<div
					className={`
			absolute left-full rounded-md px-2 py-1 ml-6
			bg-indigo-100 text-indigo-800 text-sm
			invisible opacity-20 -translate-x-3 transition-all
			group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
		`}
				>
					{text}
				</div>
			)}
		</li>
	)
}

SidebarItem.propTypes = {
	icon: PropTypes.node.isRequired,
	text: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
	alert: PropTypes.bool.isRequired,
};