import header from "./header.module.css";

export function Header({ children }: { children: JSX.Element }) {
  return (
    <header>
      {children}
      <h1 className={header.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p className={header.description}>
        Get started by editing{" "}
        <code className={header.code}>pages/index.tsx</code>
      </p>
    </header>
  );
}
