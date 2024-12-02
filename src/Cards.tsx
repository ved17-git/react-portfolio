import React from "react";
import { Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Arrow from "./assets/Arrow";
import Github from "./assets/Github";

// Define interfaces for the prop types
interface TechItem {
  id: number | string;
  name: string;
  image: string;
}

interface LinkItem {
  live?: string;
  github?: string;
}

interface CardsProps {
  title: string;
  image: string ; // Allow both string and StaticImageData
  description: string;
  tech: TechItem[];
  links?: LinkItem[];
}

function Cards({ title, image, description, tech, links }: CardsProps) {
  return (
    <>
      <Card className="py-4 w-full transition ease-in-out duration-300 hover:-translate-y-3">
        <CardBody className="overflow-visible py-2">
          <img
            src={typeof image === 'string' ? image : image} // Check if it's a string or StaticImageData
            alt={title}
            className="w-full rounded-md h-[40vh] object-cover"
            height={1000}
            width={1000}
          />
        </CardBody>

        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start space-y-3">
          <p className="text-2xl font-bold font-title">{title}</p>
          <small className="text-default-500 font-title">{description}</small>
          <h4 className="font-title">Tech Used</h4>
          <div className="flex mb-12 w-full md:pr-[4vh] gap-2 flex-wrap">
            {tech.map((t) => (
              <img
                key={t.id}
                src={t.image}
                alt={t.name}
                className="w-10 h-10"
                title={t.name}
                width={100}
                height={100}
              />
            ))}
          </div>

          <div className="flex gap-4 items-center">
            {links &&
              links.map((item, idx) => (
                <React.Fragment key={idx}>
                  {item.live && (
                    <Button
                      color="danger"
                      className="font-title bg-blue-500"
                      startContent={<Arrow />}
                    >
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Project
                      </a>
                    </Button>
                  )}

                  {item.github && (
                    <Button
                      color="danger"
                      variant="solid"
                      className="font-title"
                      startContent={<Github />}
                    >
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </Button>
                  )}
                </React.Fragment>
              ))}
          </div>
        </CardHeader>
      </Card>
    </>
  );
}

export default Cards;
