import BrandIcon from "@/components/BrandIcon";
import type { Link } from "@/data/profile";

export default function LinkCard({ title, url, icon }: Link) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex w-full items-center justify-center rounded-2xl border-2 border-foreground/80 px-14 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
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
