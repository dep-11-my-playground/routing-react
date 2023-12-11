import './Main.css';
import {Outlet} from "react-router-dom";

export function Main() {
    return (
        <>
            <header className="p-2 border-b flex justify-between items-center">
                <h1 className="text-2xl font-bold">React Routing</h1>
                <button className="border px-3 py-1 rounded
                 border-cyan-500 hover:bg-cyan-600 hover:text-white">
                    Sign Out
                </button>
            </header>
            <nav className="list-none flex justify-center">
                <li className="p-2 border-x cursor-pointer hover:bg-cyan-700 hover:text-white">HOME</li>
                <li className="p-2 border-x hover:bg-cyan-700 hover:text-white cursor-pointer">MANAGE CUSTOMERS</li>
                <li className="p-2 border-x hover:bg-cyan-700 hover:text-white cursor-pointer">MANAGE ITEMS</li>
            </nav>
            <div className="flex justify-center">
                <Outlet />
            </div>

        </>
    );
}