"use client";
import { useGlobalContext } from "@/context/GlobalContextProvider";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const { theme } = useGlobalContext();
  return (
    <div
      className={cn(
        `"row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input  p-4  border  justify-between flex flex-col space-y-4" ${
          theme === "dark"
            ? "bg-black border-white/[0.2] shadow-none"
            : "bg-white border-transparent"
        }`,
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div
          className={`"font-sans font-bold   mb-2 mt-2" ${
            theme === "dark" ? "text-neutral-200" : "text-neutral-600"
          }`}
        >
          {title}
        </div>
        <div
          className={`"font-sans font-normal text-xs " ${
            theme === "dark" ? "text-neutral-300" : "text-neutral-600"
          }`}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
