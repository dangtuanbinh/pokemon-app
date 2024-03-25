import React, { useState, useEffect } from "react";
import { noti } from "../../utils/constants";
import { IPokemon } from "../../utils/types/pokemonType";
import "./styles.scss";

const classNamePrefix = "item-detail";

interface Props {
  selectedItem: IPokemon | null;
}

const ItemDetail: React.FC<Props> = ({ selectedItem }) => {
  const [pokemonDetails, setPokemonDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      if (selectedItem && selectedItem.url) { 
        setIsLoading(true);
        try {
          const response = await fetch(selectedItem.url);
          if (response.ok) {
            const data = await response.json();
            setPokemonDetails(data);
          } else {
            console.error("Failed to fetch Pokemon details");
          }
        } catch (error) {
          console.error("Error fetching Pokemon details:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchPokemonDetails();
  }, [selectedItem]);

  return (
    <div className={`${classNamePrefix}`}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {pokemonDetails ? (
            <div>
              <h2>{pokemonDetails.name}</h2>
            </div>
          ) : (
            <div>
              <span>{noti.NO_ITEM_SELECTED}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
