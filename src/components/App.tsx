import Background from "./Background";
import Container from "./Container";
import Header, { HeaderTop } from "./Header";
import Logo from "./Title";
import BookmarksButton from "./BookmarksButton";
import SearchForm from "./SearchForm";
import Sidebar, { SidebarTop } from "./Sidebar";
import JobItemContent from "./JobItemContent";
import ResultsCount from "./ResultsCount";
import Sorting from "./SortingControls";
import PaginationControls from "./PaginationControls";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import JobListSearch from "./JobListSearch";

function App() {
  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <Sorting />
          </SidebarTop>
          <JobListSearch />
          <PaginationControls />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
