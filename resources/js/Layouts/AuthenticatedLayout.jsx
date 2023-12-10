import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/Components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import ThemeSwitch from "./ThemeSwitch";
import { LogOut, Menu, User } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Separator } from "@/Components/ui/separator";
import { useState } from "react";
import { Toaster } from "@/Components/ui/toaster";

export default function Authenticated({ children }) {
    const user = usePage().props.auth.user;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="min-h-screen">
            <nav className="fixed top-0 z-10 w-full transition border-b border-zinc-200 dark:border-zinc-700 bg-background">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex items-center mr-4 shrink-0">
                                <Link href="/">
                                    <ApplicationLogo className="block w-auto fill-current h-9" />
                                </Link>
                            </div>
                            <NavigationMenu className="hidden sm:inline-flex sm:relative">
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <Link
                                            as="button"
                                            href={route("dashboard")}
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                                active={route().current(
                                                    "dashboard"
                                                )}
                                            >
                                                Dashboard
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link as="button" href={route("home")}>
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                                active={route().current("home")}
                                            >
                                                Home
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        <div className="hidden gap-2 sm:flex sm:items-center">
                            <ThemeSwitch />
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <div className="flex items-center gap-3 cursor-pointer">
                                            <Avatar>
                                                <AvatarImage
                                                    src={user.photo}
                                                    alt={user.name}
                                                />
                                                <AvatarFallback>
                                                    <User className="w-6 h-6" />
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span className="text-sm ">
                                                    {user.name}
                                                </span>
                                                <span className="text-xs text-zinc-500">
                                                    {user.email}
                                                </span>
                                            </div>
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="shadow-none">
                                        <DropdownMenuItem asChild>
                                            <Link
                                                href={route("profile.edit")}
                                                as="button"
                                                className="flex w-full cursor-pointer"
                                            >
                                                <User className="w-4 h-4 mr-2" />
                                                Profile
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                                className="flex w-full cursor-pointer"
                                                as="button"
                                            >
                                                <LogOut className="w-4 h-4 mr-2" />
                                                Log Out
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <div className="flex items-center sm:hidden">
                            <ThemeSwitch />
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <Menu className={"w-6 h-6"} />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent className="flex flex-col items-start shadow-none">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger
                                            asChild
                                            className="w-full"
                                        >
                                            <div className="flex flex-col items-center w-full gap-2 cursor-pointer">
                                                <Avatar className="w-16 h-16">
                                                    <AvatarImage
                                                        src={user.photo}
                                                        alt={user.name}
                                                    />
                                                    <AvatarFallback>
                                                        <User className="w-10 h-10" />
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col text-center">
                                                    <span className="text-sm ">
                                                        {user.name}
                                                    </span>
                                                    <span className="text-xs text-zinc-500">
                                                        {user.email}
                                                    </span>
                                                </div>
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            className="shadow-none"
                                            onClick={() => setIsOpen(!isOpen)}
                                        >
                                            <DropdownMenuItem asChild>
                                                <Link
                                                    href={route("profile.edit")}
                                                    as="button"
                                                    className="flex w-full cursor-pointer"
                                                >
                                                    <User className="w-4 h-4 mr-2" />
                                                    Profile
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link
                                                    href={route("logout")}
                                                    method="post"
                                                    className="flex w-full cursor-pointer"
                                                    as="button"
                                                >
                                                    <LogOut className="w-4 h-4 mr-2" />
                                                    Log Out
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    <Separator />
                                    <div
                                        className="flex flex-col items-start space-y-1.5 font-bold"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <Link
                                            as="button"
                                            href={route("dashboard")}
                                        >
                                            Dashboard
                                        </Link>
                                        <Link as="button" href={route("home")}>
                                            Home
                                        </Link>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="px-4 mx-auto mt-24 max-w-7xl sm:px-6 lg:px-8">
                {children}
            </main>
            <Toaster />
        </div>
    );
}
