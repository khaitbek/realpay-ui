import { useMemo } from "react";
import type { ReactNode } from "react";

// helpers
import { classnames as cn } from "@hayitbek/realpay-utils";

// types
export interface ViewItemProps {
  label: string;
  value: ReactNode;
  containerClassname?: string;
  labelClassname?: string;
  valueClassname?: string;
  emptyPrefix?: string;
  isLastElement?: boolean;
}

export const ViewItem = (props: ViewItemProps) => {
  const {
    label,
    value,
    containerClassname,
    labelClassname,
    valueClassname,
    emptyPrefix = "-",
    isLastElement = false,
  } = props;

  const validateValue = useMemo(() => {
    if (typeof value === "boolean") return String(value);
    else if (value === null || value === undefined || value === "")
      return emptyPrefix;
    else return value;
  }, [value, emptyPrefix]);

  return (
    <div
      className={cn(
        "flex items-center justify-between py-2",
        !isLastElement && "border-b border-[#F4F4F4]",
        containerClassname,
      )}
    >
      <p className={cn("text-[#868686] text-sm leading-4", labelClassname)}>
        {label}
      </p>
      <p
        className={cn(
          "text-black font-medium text-sm w-1/2 text-end break-all",
          valueClassname,
        )}
      >
        {validateValue}
      </p>
    </div>
  );
};
