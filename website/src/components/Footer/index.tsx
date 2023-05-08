import React from "react";

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <div className="bg-white w-full flex items-center justify-center p-6">
      <div className="max-w-6xl w-full text-center flex flex-col gap-5">
        <h1 className="text-xs">
          O Pokémon Go pode ser jogado em inglês, francês, alemão, italiano,
          russo, japonês, espanhol, chinês tradicional, coreano, tailandês,
          português do Brasil, turco e indonésio.
        </h1>
        <h1 className="text-xs">
          ©2023 Niantic, Inc. ©2023 Pokémon. ©1995–2023 Nintendo / Creatures
          Inc. / GAME FREAK inc. Pokémon e os nomes dos personagens Pokémon são
          marcas da Nintendo. Apple e o logotipo da Apple são marcas registradas
          da Apple Inc., registradas nos EUA e em outros países. App Store é uma
          marca de serviço da Apple Inc. Android, Google Play e o logótipo do
          Google Play são marcas comerciais da Google LLC. Durante o jogo, por
          favor, preste atenção à sua volta e jogue com cuidado.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
