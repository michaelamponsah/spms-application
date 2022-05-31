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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <SideNavigation />
        <MainArea content={<Dashboard />} />
        
        <Routes>
          <Route exact path="/" component={Dashboard} />
          <Route path="/file-indexes" component={FileIndexesPage} />
          <Route path="/promotion-records" component={PromotionRecordsPage} />
          <Route path="/letters-received" component={LettersReceivedPage} />
          <Route path="/letters-worked-on" component={LettersWorkedOnPage} />
          <Route path="/letters-seen" component={LettersSeenByDeanPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
