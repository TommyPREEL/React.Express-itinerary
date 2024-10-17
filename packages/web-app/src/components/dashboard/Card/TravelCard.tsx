import { Image } from "@nextui-org/image";
import { CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Download } from "react-bootstrap-icons";
import { FC } from "react";
import { Travel } from "@shared/contract/travel.ts";
import { Card } from "@nextui-org/card";
import { DropdownOptions } from "./DropdownOptions.tsx";
import { toast } from "sonner";
import { PdfRemoteRepository } from "../../../helpers/repository/pdf/PdfRemoteRepository.ts";
import { fakerFR } from "@faker-js/faker";
import { useAuthenticatedUser } from "../../../hooks/useAuthenticatedUser.tsx";

interface Props {
  travel: Travel;
}

const pdfRepository = new PdfRemoteRepository();

const TravelCard: FC<Props> = ({ travel }) => {
  const user = useAuthenticatedUser();
  const downloadHandler = () => {
    toast.promise(
      pdfRepository.download({
        name: fakerFR.location.street(),
        token: user.token,
        itinerary: travel.id,
        points: [travel.startPoint, travel.endPoint],
      }),
      {
        loading: "Download in progress...",
        success: () => {
          return "Your download is done";
        },
        error: (error: Error) => {
          console.error(error);
          return error.message;
        },
      },
    );
  };

  return (
    <Card
      key={travel.id}
      isFooterBlurred
      radius="lg"
      className="border-none w-fit basis-72	grow itinerary-card"
    >
      <Image
        alt=""
        className="object-cover w-full max-w-full max-h-96"
        src="/map_background.jpg"
      />
      <CardFooter className="justify-between gap-4 bg-black/30 border-white/20 border-1 overflow-hidden py-1 absolute rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-sm font-semibold text-white/80 truncate">
          {travel.name}
        </p>
        <section className={"flex gap-2"}>
          <Button
            className="text-tiny"
            color="success"
            radius="lg"
            size="sm"
            startContent={<Download />}
            onPress={downloadHandler}
          >
            Download
          </Button>
          <DropdownOptions travelID={travel.id} />
        </section>
      </CardFooter>
    </Card>
  );
};

interface RouteCardListProps {
  travels: Travel[];
}

export const TravelCardList: FC<RouteCardListProps> = ({ travels }) =>
  travels.map((travel) => <TravelCard travel={travel} key={travel.id} />);
