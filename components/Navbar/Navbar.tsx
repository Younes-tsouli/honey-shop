import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/story">Story</Link>
    </nav>
  );
}