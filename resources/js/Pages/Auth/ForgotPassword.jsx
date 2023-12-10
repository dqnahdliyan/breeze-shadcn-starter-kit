import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <label htmlFor="email" className="sr-only">
                    Email
                </label>
                <Input
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="block w-full mt-1"
                    autoComplete="username"
                    isFocused={true}
                    onChange={(e) => setData("email", e.target.value)}
                    error={errors.email}
                />
                <div className="flex items-center justify-end mt-4">
                    <Button className="ms-4" disabled={processing}>
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </>
    );
}

ForgotPassword.layout = (page) => <GuestLayout children={page} />;
