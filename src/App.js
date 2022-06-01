import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/TopNavigation";
import SideNavigation from "./components/SideNavigation";
import FileIndexesPage from "./pages/FileIndexes";
import PromotionRecordsPage from "./pages/PromotionRecords";
import LettersReceivedPage from "./pages/LettersReceived";
import LettersWorkedOnPage from "./pages/LettersWorkedOn";
import LettersSeenByDeanPage from "./pages/LettersSeenByDean";
import Dashboard from "./pages/Dashboard";
import MainArea from "./components/MainArea";
import Layout from "./components/Layout";
import Reservations from "./pages/Reservations";

function App() {
  const routes = [
    {
      path: "/",
      component: <Dashboard />,
      exact: true,
      index: "1",
    },
    {
      path: "/file-indexes",
      component: <FileIndexesPage />,
      index: "2",
    },
    {
      path: "/promotion-records",
      component: <PromotionRecordsPage />,
      index: "3",
    },
    {
      path: "/letters-received",
      component: <LettersReceivedPage />,
      index: "4",
    },
    {
      path: "/letters-worked-on",
      component: <LettersWorkedOnPage />,
      index: "5",
    },
    {
      path: "/letters-seen",
      component: <LettersSeenByDeanPage />,
      index: "6",
    },
    {
      path: "/reservations",
      component: <Reservations />,
      index: "7",
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <div className="flex">
            <SideNavigation />
            <Routes>
              {routes.map((route) => (
                <Route
                  exact={route.exact}
                  path={route.path}
                  key={route.index}
                  element={<MainArea content={route.component} />}
                />
              ))}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
