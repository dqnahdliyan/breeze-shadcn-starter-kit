import { Moon, Sun } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip";

export default function ThemeSwitch({ ...props }) {
    return (
        <div {...props}>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                                document.documentElement.classList.toggle(
                                    "dark"
                                )
                            }
                        >
                            <Moon className="block w-6 h-6 dark:hidden" />
                            <Sun className="hidden w-6 h-6 dark:block" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Toggle theme</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}
