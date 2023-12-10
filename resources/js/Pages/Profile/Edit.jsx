import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { Card } from "@/Components/ui/card";
import UploadPhotoForm from "./Partials/UploadPhotoForm";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <>
            <h2 className="mb-4 text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                Profile
            </h2>
            <Head title="Profile" />

            <div className="mx-auto space-y-6">
                <Card className="p-4 shadow-none sm:p-8 sm:rounded-lg">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </Card>

                <Card className="p-4 shadow-none sm:p-8 sm:rounded-lg">
                    <UploadPhotoForm className="max-w-xl" />
                </Card>

                <Card className="p-4 shadow-none sm:p-8 sm:rounded-lg">
                    <UpdatePasswordForm className="max-w-xl" />
                </Card>

                <Card className="p-4 shadow-none sm:p-8 sm:rounded-lg">
                    <DeleteUserForm className="max-w-xl" />
                </Card>
            </div>
        </>
    );
}

Edit.layout = (page) => <AuthenticatedLayout children={page} />;
