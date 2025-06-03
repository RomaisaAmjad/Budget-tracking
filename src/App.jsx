import './App.css';
import FirstPage from './pages/FirstPage.jsx';
import Footer from './Components/Footer.jsx'; // Make sure path is correct

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <FirstPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
