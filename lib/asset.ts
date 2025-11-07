export const withBasePath = (p: string) => {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (p.startsWith("http")) return p;
  return `${prefix}${p.startsWith("/") ? "" : "/"}${p}`;
};
