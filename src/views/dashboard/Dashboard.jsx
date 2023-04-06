import { Outlet } from "react-router-dom";
import DashboardSideBar from "../../components/DashboardSideBar";
import ChatBot from "../../components/ChatBot";

const Dashboard = () => {
    return (
        <div className=" flex">
            <DashboardSideBar />
            <div className=" h-screen  bg-lightGray w-[100%] overflow-y-auto">
                <Outlet />
                <ChatBot />
            </div>
        </div>
    );
}

export default Dashboard;