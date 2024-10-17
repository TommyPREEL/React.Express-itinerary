import { Skeleton } from "@nextui-org/react";
import { Card } from "@nextui-org/card";

const NUMBER_OF_CARD: number = 8;
const TEMPORARY_ARRAY = Array.from({ length: NUMBER_OF_CARD }, () =>
  Math.random(),
);

const SkeletonTravelCard = () => {
  return (
    <Card className="w-full basis-72 grow aspect-square space-y-2">
      <Skeleton className="h-full rounded-lg">
        <div className="h-full rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="flex gap-2 p-2">
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-6 w-full rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="w-1/5 rounded-lg">
          <div className="h-6 w-full rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
};

export const SkeletonTravelCardList = () => {
  return TEMPORARY_ARRAY.map((id) => <SkeletonTravelCard key={id} />);
};
