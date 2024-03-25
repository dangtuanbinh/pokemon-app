import "./styles.scss";
import Logo from "../../components/logo";
import List from "../../components/list";
import ItemDetail from "../../components/itemDetail";
import { useGetPokemonListQuery } from "../../store/components/pokemonList/pokemonApis";
import { IPokemon } from "../../utils/types/pokemonType";
import { useState } from "react";

const classNamePrefix = "home-page";

const HomePage = () => {
  const {data} = useGetPokemonListQuery();

  const [selectedItem, setSelectedItem] = useState<IPokemon | null>(null);

  const results = data?.results || [];

  const onItemClick = (item: IPokemon) => {
    setSelectedItem(item);
  };

  return (
    <div className={`${classNamePrefix}`}>
      <Logo />

      <div className="col-12 d-flex flex-column-reverse flex-md-row justify-content-between align-items-center pb-5">
        <div className="col-12 col-md-7 px-3 ">
          <ItemDetail selectedItem={selectedItem}/>
        </div>

        <div className="col-12 col-md-5 px-3 mb-4 mb-md-0">
          <List results={results} onItemClick={onItemClick}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
