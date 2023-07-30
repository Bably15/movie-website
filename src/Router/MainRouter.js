import Search from "../component/Search";
import Details from "../Pages/Details";
import { Routes, Route } from "react-router-dom";
const MainRouter = () => {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Search />} />
                <Route path="/detail" element={<Details />} />
            </Route>
        </Routes>
    );
};
export default MainRouter;
