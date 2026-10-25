import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-10 pt-24">
      <div className="absolute right-5 top-5">
        <ThemeToggle />
      </div>
      <ProfileHeader {...profile} />
      <ul className="mt-12 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
      <footer className="mt-auto pt-16 text-center text-xs tracking-wide text-foreground/35">
        링크나무
      </footer>
    </main>
  );
}
