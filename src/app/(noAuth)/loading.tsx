import { Spinner } from "@/components/loading/spinner";

export default function Loading() {
  // TODO: Add Skeleton screens
  return (
    <Spinner style="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" />
  );
}
