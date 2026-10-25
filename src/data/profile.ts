export type LinkIcon = "github" | "naver-blog";

export type Link = {
  id: string;
  title: string;
  url: string;
  icon?: LinkIcon;
};

export type Profile = {
  name: string;
  bio: string;
  // 비워두면 이름 첫 글자로 대체 표시
  imageUrl?: string;
};

export const profile: Profile = {
  name: "이승규",
  bio: "백엔드 서버 개발에 흥미를 가지는 사람 | 컴퓨터 공학에 관심이 많은 사람",
};

export const links: Link[] = [
  { id: "github", title: "GitHub", url: "https://github.com/SeungKyuLee", icon: "github" },
  { id: "blog", title: "블로그", url: "https://blog.naver.com/lsk2da", icon: "naver-blog" },
];
