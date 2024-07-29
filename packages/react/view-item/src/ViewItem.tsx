import { useMemo } from "react";
import type { ReactNode } from "react";

// helpers
import { classnames as cn } from "@hayitbek/realpay-utils";

// types
export interface BaseViewItemProps {
  label: string;
  value: ReactNode;
  containerClassname?: string;
  labelClassname?: string;
  valueClassname?: string;
  emptyPrefix?: string;
  isLastElement?: boolean;
}

export const BaseViewItem = (props: BaseViewItemProps) => {
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
        "flex items-center justify-between pb-2",
        !isLastElement && "border-b border-gray-200",
        containerClassname,
      )}
    >
      <p className={cn("text-greyscale600 font-medium", labelClassname)}>
        {label}
      </p>
      <p
        className={cn(
          "text-mainBlackTextColor font-bold w-1/2 text-end break-all",
          valueClassname,
        )}
      >
        {validateValue}
      </p>
    </div>
  );
};
