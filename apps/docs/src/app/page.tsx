/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
// import {} from "fumadocs-mdx"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
     <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">
        Assalomu alaykum. Realpay UI documentationga xush kelibsiz!
      </h1>
      <p className="text-muted-foreground">
        Quyidagi link orqali, documentationni o'qishni boshlashingiz mumkin{' '}
        <Link href="/docs" className="text-foreground font-semibold underline">
          /docs
        </Link>{' '}
      </p>
    </main>
    </main>
  );
}
