import { Link, useForm, usePage } from "@inertiajs/react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { useToast } from "@/Components/ui/use-toast";
import { Textarea } from "@/Components/ui/textarea";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;
    const { toast } = useToast();

    const { data, setData, patch, errors, processing } = useForm({
        name: user.name,
        username: user.username,
        email: user.email,
        about: user.about,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"), {
            onSuccess: () => {
                toast({
                    title: "Profile updated.",
                    description: "Your profile information has been updated.",
                    duration: 3000,
                });
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-3">
                <div>
                    <Label htmlFor="name">Name</Label>

                    <Input
                        id="name"
                        className="block w-full mt-1"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                        error={errors.name}
                    />
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>

                    <Input
                        id="email"
                        type="email"
                        className="block w-full mt-1"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                        error={errors.email}
                    />
                </div>
                <div>
                    <Label htmlFor="username">Username</Label>

                    <Input
                        id="username"
                        type="text"
                        className="block w-full mt-1"
                        value={data.username}
                        onChange={(e) => setData("username", e.target.value)}
                        required
                        autoComplete="username"
                        error={errors.username}
                    />
                </div>
                <div>
                    <Label htmlFor="about">About</Label>

                    <Textarea
                        id="about"
                        type="text"
                        className="block w-full mt-1"
                        value={data.about}
                        onChange={(e) => setData("about", e.target.value)}
                        required
                        autoComplete="about"
                        error={errors.about}
                    />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <Button disabled={processing}>Save</Button>
                </div>
            </form>
        </section>
    );
}
