import { useEffect, useState } from "react";

export function useRoute() {
  const read = () => window.location.hash.replace(/^#/, "") || "/";
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const on = () => setRoute(read());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return route;
}

export function navigate(to: string) {
  if (window.location.hash.replace(/^#/, "") === to) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = to;
}

export function Link({
  to,
  children,
  className = "",
  onClick,
  ...rest
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
} & { [k: string]: unknown }) {
  return (
    <a
      href={"#" + to}
      className={className}
      onClick={() => {
        onClick?.();
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
