import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col gap-y-2 p-2">
      <p>Homepage</p>
      <Link href={"/sign-in"}>
        <Button>Login</Button>
      </Link>
      <Link href={"/sign-up"}>
        <Button>Register</Button>
      </Link>
    </div>
  );
}
