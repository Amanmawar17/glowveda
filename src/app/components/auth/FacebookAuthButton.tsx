'use client'
import { signIn } from "next-auth/react";
import Facebook from "@/app/assets/icons/facebook.svg"


export default function FacebookAuthButton() {
  return (
    <button onClick={() => signIn("facebook")} className='p-[6px] border-2 border-solid rounded hover:shadow-md'>
      <Facebook className="w-7 h-7" />
    </button>
  )
}