import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, imageUrl }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-white/70 shadow-[0_8px_30px_rgba(120,80,50,0.12)] ring-1 ring-foreground/5 dark:bg-white/5 dark:shadow-none dark:ring-white/10">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt={`${name} 프로필 사진`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-5xl font-medium text-foreground/70" aria-hidden>
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-7 text-2xl font-semibold tracking-tight">{name}</h1>
      <p className="text-balance mt-2.5 max-w-xs text-[15px] leading-relaxed text-foreground/60">
        {bio}
      </p>
    </header>
  );
}
