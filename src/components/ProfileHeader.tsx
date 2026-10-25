import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, imageUrl }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-2 border-foreground/80 bg-foreground/5">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt={`${name} 프로필 사진`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-6xl font-semibold" aria-hidden>
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-6 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-sm text-foreground/60">{bio}</p>
    </header>
  );
}
