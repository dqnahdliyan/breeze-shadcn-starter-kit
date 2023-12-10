import { Link, useForm, usePage } from "@inertiajs/react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { useToast } from "@/Components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { User } from "lucide-react";
import { useRef, useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function UploadPhotoForm({ className = "" }) {
    const user = usePage().props.auth.user;
    const { toast } = useToast();
    const fileInput = useRef();

    const { setData, post, errors, processing } = useForm({
        photo: user.photo || "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("photo.store"), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast({
                    title: "Photo updated.",
                    description: "Your profile photo has been updated.",
                    duration: 3000,
                });
            },
        });
    };

    const [photo, setPhoto] = useState(user.photo);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            setPhoto(reader.result);
            setData("photo", file);
        };
        reader.readAsDataURL(file);
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Profile Photo
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Update your profile photo.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-3">
                <div>
                    <Label htmlFor="photo" className="sr-only">
                        Photo
                    </Label>
                    <input
                        ref={fileInput}
                        type="file"
                        id="photo"
                        className="hidden"
                        onChange={handleUpload}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Avatar
                        className="w-16 h-16 border-2"
                        onClick={() => fileInput.current.click()}
                    >
                        <AvatarImage src={photo} />
                        <AvatarFallback>
                            <User className="w-12 h-12" />
                        </AvatarFallback>
                    </Avatar>
                    {errors.photo && (
                        <p className="text-sm text-red-600 dark:text-red-400">
                            {errors.photo}
                        </p>
                    )}
                </div>
                <div className="flex items-center gap-4">
                    <Button disabled={processing}>
                        {processing && (
                            <ReloadIcon className="w-4 h-4 mr-2 animate-spin" />
                        )}
                        Save
                    </Button>
                </div>
            </form>
        </section>
    );
}
