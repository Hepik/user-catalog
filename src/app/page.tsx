import { Suspense } from "react";
import UserList from "../components/user-list";
import { UserListSkeleton } from "../components/user-list-skeleton";

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">User Catalog</h1>
      <Suspense fallback={<UserListSkeleton />}>
        <UserList />
      </Suspense>
    </main>
  );
}
