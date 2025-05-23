import { getUsers } from "../lib/api";
import UserCard from "./user-card";

export default async function UserList() {
  const users = await getUsers();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
