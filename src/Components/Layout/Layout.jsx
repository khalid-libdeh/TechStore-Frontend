import { Outlet } from "react-router-dom";
import Header from "./Header";
import TopHeader from "./TopHeader";

export default function Layout() {
    return (
        <div>
            <div className="flex flex-col">
                <TopHeader />
                <div>
                    <Header title="Exclusive" />
                </div>
            </div>
            <Outlet />
        </div>
    );
}