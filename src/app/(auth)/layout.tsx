import Image from "next/image";
import { ReactNode } from "react";
import logo from '@/app/assets/icons/logo.webp'
export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative grid place-content-center gap-y-6 bg-background text-foreground md:items-center py-20">
            <Image src={logo} alt="logo" width={48} height={48} className="w-16 hidden sm:block place-self-center" priority />
                <h1 className="text-4xl font-semibold">Welcome to <span className="text-primary">Glowveda</span></h1>
            {children}
        </div>
    );
}