import Navbar from "../components/navbar.js";

export default function Layout({ children }) {
  return (
    <div className="overflow-hidden">
      <Navbar />
      {children}
    </div>
  );
}
