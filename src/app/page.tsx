import { SignOutButton, SignUpButton } from "@clerk/nextjs";


export default function Home() {
  return (
 <div>
  <SignUpButton></SignUpButton>

  <SignOutButton></SignOutButton>
 </div>   
  );
}
