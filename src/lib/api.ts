import type { User } from "../lib/types";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export async function getUser(id: number): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return res.json();
}
