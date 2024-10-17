import { Card, CardBody } from "@nextui-org/card";
import { FC, ReactElement } from "react";
import { GeoAlt, Stopwatch } from "react-bootstrap-icons";

export interface Statistic {
  value: number;
  unit: string;
}

interface Props {
  icon: ReactElement;
  title: string;
  statistic: Statistic;
}

const StatCard: FC<Props> = ({ title, icon, statistic }) => {
  return (
    <Card className="basis-32 grow sm:p-8 sm:max-w-fit sm:aspect-square">
      <CardBody className="flex flex-col items-center justify-center">
        <section className="flex justify-center gap-1">
          {icon}
          <h3 className="uppercase text-tiny text-black/60">{title}</h3>
        </section>
        <section className="flex flex-row gap-1 items-baseline justify-center">
          <p className="text-2xl font-medium text-center">{statistic.value}</p>
          <span className="uppercase text-tiny font-medium opacity-60">
            {statistic.unit}
          </span>
        </section>
      </CardBody>
    </Card>
  );
};

interface StatCardListProps {
  distance: Statistic;
  time: Statistic;
}

export const StatCardList: FC<StatCardListProps> = ({ time, distance }) => {
  return (
    <>
      <StatCard
        icon={<GeoAlt className="text-warning" size={16} />}
        title={"distance"}
        statistic={{ unit: distance.unit, value: distance.value }}
      />
      <StatCard
        icon={<Stopwatch className="text-warning" size={16} />}
        title={"time"}
        statistic={{ unit: time.unit, value: time.value }}
      />
    </>
  );
};
