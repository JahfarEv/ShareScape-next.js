import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";
export default function page() {
  return (
    redirect('/dashbord')
    // <div className="h-screen">
    //   <UserButton afterSignOutUrl="/"/>
    // </div>

  );
}
