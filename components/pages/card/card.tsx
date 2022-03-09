import card from "./card.module.css";

interface PropsI {
  link: string;
  title: string;
  children: string;
}

export function Card({ link, title, children }: PropsI) {
  return (
    <a href={link} className={card.main}>
      <h2>{title} &rarr;</h2>
      <p>{children}</p>
    </a>
  );
}
