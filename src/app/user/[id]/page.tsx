import { Suspense } from "react";
import { notFound } from "next/navigation";
import UserDetails from "@/components/user-details";
import { UserDetailsSkeleton } from "@/components/user-details-skeleton";

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const userId = Number.parseInt(resolvedParams.id);

  if (isNaN(userId)) {
    notFound();
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <Suspense fallback={<UserDetailsSkeleton />}>
        <UserDetails userId={userId} />
      </Suspense>
    </main>
  );
}
