import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
    ({ className, type, isFocused = false, error, ...props }, ref) => {
        const input = ref ? ref : React.useRef();

        React.useEffect(() => {
            if (isFocused) {
                input.current.focus();
            }
        }, []);
        return (
            <>
                <input
                    type={type}
                    className={cn(
                        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
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
Input.displayName = "Input";

export { Input };
