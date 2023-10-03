import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed flex h-12 w-full items-center justify-center bg-[#D67BFF] text-blue-50">
      <div>
        <Link href="/">名探偵コナンクイズ</Link>
      </div>
    </header>
  );
}
