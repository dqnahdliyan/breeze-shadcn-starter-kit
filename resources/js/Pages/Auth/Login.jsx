import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Checkbox } from "@/Components/ui/checkbox";
import { Button } from "@/Components/ui/button";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <Label htmlFor="username">Email / Username</Label>

                    <Input
                        id="username"
                        type="text"
                        name="username"
                        value={data.username}
                        className="block w-full mt-1"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("username", e.target.value)}
                        error={errors.username || errors.login}
                    />
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="text-sm text-gray-600 rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Forgot your password?
                            </Link>
                        )}
                    </div>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full mt-1"
                        autoComplete="current-password"
                        error={errors.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                </div>

                <div className="flex items-center justify-between my-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            name="remember"
                            id="remember"
                            checked={data.remember}
                            onCheckedChange={(e) => setData("remember", e)}
                        />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                </div>

                <div className="flex items-center justify-end">
                    <Link
                        href={route("register")}
                        className="text-sm text-gray-600 rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Don't have account?
                    </Link>

                    <Button
                        type="submit"
                        className="ms-4"
                        disabled={processing}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </>
    );
}

Login.layout = (page) => <GuestLayout children={page} />;
