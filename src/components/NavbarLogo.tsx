import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo-imper.png"
        alt="Империя — автосервис"
        width={70}
        height={40}
        priority
      />
      <span className="sr-only">Империя — автосервис</span>
    </Link>
  );
}
