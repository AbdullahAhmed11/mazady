interface NavItemProps {
    value: string;
    active: boolean
}
export function NavItem({value, active}: NavItemProps) {
    let activeStyle = '';
    if(active) {
        activeStyle = "font-bold text-rose-700"
    }
    return (
        <li className="mx-7 relative">
            <a href="#" className={`text-[#828282]  ${activeStyle} `}>{value}</a>
            {active ? 
            <span className="h-1.5 w-10/12 top-9 left-1 absolute rounded-t-xl bg-rose-700 block"></span>
            : null}
         </li>
    )
}