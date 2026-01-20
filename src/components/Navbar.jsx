import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        background: "#eee",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/items">Items</Link>
      <Link href="/add-item">Add Item</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
