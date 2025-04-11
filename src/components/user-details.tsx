"use client";
import Link from "next/link";
import useSWR from "swr";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { User } from "../lib/types";
import { fetcher } from "../lib/api";
import { Mail, Phone, Globe, Building, MapPin, Briefcase } from "lucide-react";

interface UserDetailsProps {
  userId: number;
}

export default function UserDetails({ userId }: UserDetailsProps) {
  const { data: user, error } = useSWR<User>(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    fetcher,
    {
      suspense: true,
    }
  );

  if (error) {
    throw new Error("Failed to load user data");
  }

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{user.name}</CardTitle>
          <p className="text-muted-foreground">@{user.username}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Contact Information</h3>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span>{user.website}</span>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="text-lg font-medium">Company</h3>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-muted-foreground" />
                <span>{user.company.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <span>{user.company.catchPhrase}</span>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="text-lg font-medium">Address</h3>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>
                  {user.address.street}, {user.address.suite},{" "}
                  {user.address.city}, {user.address.zipcode}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/" className="w-full">
            <Button variant="outline" className="w-full">
              Back to Users
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
