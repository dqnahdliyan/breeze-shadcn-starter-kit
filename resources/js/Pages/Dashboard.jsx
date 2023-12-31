import { Card } from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <h2 className="mb-4 text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                Dashboard
            </h2>

            <Card className="p-6 text-gray-900 shadow-none dark:text-gray-100">
                You're logged in!
            </Card>
        </>
    );
}

Dashboard.layout = (page) => <AuthenticatedLayout children={page} />;
