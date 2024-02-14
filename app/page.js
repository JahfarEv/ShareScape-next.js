import { redirect } from "next/navigation";
export default function page() {
  return redirect("/");
  // <div className="h-screen">
  //   <UserButton afterSignOutUrl="/dashboard"/>
  // </div>
}
