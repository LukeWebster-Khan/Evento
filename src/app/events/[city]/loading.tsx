import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
  return (
    <div className="flex flex-wrap justify-center max-w-[1100px] mx-auto px-[20px] gap-20">
      {Array.from({ length: 9 }).map((_, i) => {
        return <SkeletonCard key={i} />;
      })}
    </div>
  );
}
