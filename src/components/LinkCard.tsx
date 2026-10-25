import BrandIcon from "@/components/BrandIcon";
import type { Link } from "@/data/profile";

export default function LinkCard({ title, url, icon }: Link) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex w-full items-center justify-center rounded-2xl bg-white/60 px-14 py-4 text-center text-[15px] font-medium shadow-sm ring-1 ring-foreground/[0.06] backdrop-blur-sm transition duration-200 ease-out hover:-translate-y-px hover:bg-white/85 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 dark:bg-white/[0.06] dark:ring-white/10 dark:hover:bg-white/10"
    >
      {/* 아이콘은 왼쪽에 고정해 제목이 항상 가운데 오도록 한다 */}
      {icon && (
        <span className="absolute left-5 flex items-center">
          <BrandIcon name={icon} />
        </span>
      )}
      {title}
    </a>
  );
}
