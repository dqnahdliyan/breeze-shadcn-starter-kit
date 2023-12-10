import { Card } from "@/Components/ui/card";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="Home" />

            <h2 className="mb-4 text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                Home
            </h2>

            <Card className="p-6 text-gray-900 shadow-none dark:text-gray-100">
                You're logged in!
            </Card>
        </>
    );
}

Home.layout = (page) => <Authenticated children={page} />;
