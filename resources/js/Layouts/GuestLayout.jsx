import ApplicationLogo from "@/Components/ApplicationLogo";
import { Card, CardContent } from "@/Components/ui/card";
import { Link } from "@inertiajs/react";
import ThemeSwitch from "./ThemeSwitch";

export default function Guest({ children }) {
    return (
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
            <ThemeSwitch className="absolute top-4 right-4" />
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current" />
                </Link>
            </div>

            <Card className="w-full pt-4 mt-6 overflow-hidden shadow-none sm:max-w-md">
                <CardContent>{children}</CardContent>
            </Card>
        </div>
    );
}
