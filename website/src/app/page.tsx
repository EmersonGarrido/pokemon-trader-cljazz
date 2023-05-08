import { Container } from "@/components";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  // const data = await getData();

  const data = [
    {
      id: 20,
      name: "raticate",
      price: 300,
      base_experience: 145,
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
    },
    {
      id: 20,
      name: "raticate",
      price: 300,
      base_experience: 145,
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
    },
    {
      id: 20,
      name: "raticate",
      price: 300,
      base_experience: 145,
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
    },
    {
      id: 20,
      name: "raticate",
      price: 300,
      base_experience: 145,
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
    },
    {
      id: 20,
      name: "raticate",
      price: 300,
      base_experience: 145,
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
    },
    {
      id: 20,
      name: "raticate",
      price: 300,
      base_experience: 145,
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
    },
    {
      id: 20,
      name: "raticate",
      price: 300,
      base_experience: 145,
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
    },
    {
      id: 20,
      name: "raticate",
      price: 300,
      base_experience: 145,
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
    },
  ];

  return (
    <main
      className={`${roboto.className} flex items-center justify-center`}
      style={{
        backgroundImage: "url('/background.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <h1 className="mt-10 mb-10 text-[#0f224a] text-5xl text-center">
          Turn <b>Your Pokémon GO Collection</b> into Cash with <br />
          <b>Pokémon GO Trader!</b> Sell Your <b>Cards Today</b>.
        </h1>
        <ul className="grid-cols-4 grid gap-4 mt-10 mb-10">
          {data.map((item) => {
            return (
              <li
                key={item.id}
                className="rounded-md bg-[#76aadb]/90 hover:bg-[#76aadb]/80 cursor-pointer p-4 w-60 flex flex-col items-center gap-3"
              >
                <div className="flex w-full items-center justify-between">
                  <h1 className="text-white text-xl font-bold"># {item.id}</h1>
                  <h1 className="text-white text-xl font-bold">{item.name}</h1>
                </div>
                <div
                  className="w-40 h-40 flex items-center justify-center"
                  style={{
                    backgroundImage: "url('/pokeball.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={150}
                    height={150}
                  />
                </div>
                <div className="text-white text-xl font-bold">
                  XP {item.base_experience}
                </div>
                <div className="text-[#0f224a] text-xl">
                  <b>${item.price}</b>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </main>
  );
}
