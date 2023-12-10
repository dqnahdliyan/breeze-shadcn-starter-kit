import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(
    ({ className, isFocused = false, error, ...props }, ref) => {
        const input = ref ? ref : React.useRef();
        React.useEffect(() => {
            if (isFocused) {
                input.current.focus();
            }
        }, []);
        return (
            <>
                <textarea
                    className={cn(
                        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={input}
                    {...props}
                />
                {error && (
                    <p
                        className={
                            "text-sm text-red-600 dark:text-red-400 mt-1"
                        }
                    >
                        {error}
                    </p>
                )}
            </>
        );
    }
);
Textarea.displayName = "Textarea";

export { Textarea };
