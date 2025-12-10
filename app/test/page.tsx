import { sql } from "@/app/lib/db";

async function getDbVersion() {
  const result = await sql`SELECT version()`;
  return result[0].version as string;
}

export default async function Home() {
  const version = await getDbVersion();
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-2">Next.js + Neon</h1>
      <p className="text-lg">PostgreSQL Version: {version}</p>
    </main>
  );
}
