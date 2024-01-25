import Header from "./components/Header/Header.jsx";
import EntriesSection from "./components/EntriesSection/EntriesSection.jsx";
import EntryForm from "./components/EntryForm/EntryForm.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="main__app">
      <Header />
      <main>
        <EntryForm />
        <EntriesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
