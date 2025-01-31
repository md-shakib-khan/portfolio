import { FocusCards } from "@/components/ui/focus-cards";
import { Title } from "@mantine/core";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Next JS",
      src: "/nextjs.png",
    },
    {
      title: "Node JS",
      src: "/expressjs.png",
    },
    {
      title: "Mongo DB",
      src: "/mongodb.png",
    },
    {
      title: "Postgre SQL",
      src: "/postgresql.png",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];

  return (
    <div className="mx-4 lg:mx-0">
      <div className="md:mx-10 my-10">
      <Title order={1}>My Tech Stack</Title>
      </div>
      <FocusCards cards={cards} />
    </div>
  );
}
