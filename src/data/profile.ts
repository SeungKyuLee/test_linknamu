export type Link = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  // 비워두면 이름 첫 글자로 대체 표시
  imageUrl?: string;
};

export const profile: Profile = {
  name: "홍길동",
  bio: "개발하고 글 쓰는 사람",
};

export const links: Link[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "blog", title: "블로그", url: "https://velog.io" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com" },
];
