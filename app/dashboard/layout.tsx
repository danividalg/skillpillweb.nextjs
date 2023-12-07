import 'server-only';
import SideNav from '@/app/ui/dashboard/sidenav';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SignedIn>
                <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                    <div className="w-full flex-none md:w-64">
                        <SideNav />
                    </div>
                    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
                </div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}
