import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  return (
    <div
      className="container"
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <main className="pixel-box">
        <Profile />
        <Footer />
      </main>
    </div>
  );
}

export default App;
