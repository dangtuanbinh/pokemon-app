import { ChangeEvent, useState, useEffect } from "react";
import "./styles.scss";
import Item from "../item";
import { IPokemon, IPokemonList } from "../../utils/types/pokemonType";
import PaginationSection from "../pagination";

const classNamePrefix = "list";

const List = (props: { results: IPokemon[]; onItemClick: (item: IPokemon) => void }) => {
  const { results, onItemClick } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState<IPokemon[]>([]); 
  const itemsPerPage = 10;

  useEffect(() => {
    const timer = setTimeout(() => {
      filterResults();
    }, 200); 
    return () => clearTimeout(timer);
  }, [searchTerm, results]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filterResults = () => {
    const filteredResults = Array.isArray(results)
      ? results.filter((item) => item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : [];

    setCurrentPage(1);
    setFilteredItems(filteredResults);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem); 

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={`${classNamePrefix} d-flex flex-column justify-content-between`}>
      <div>
        <input
          className={`${classNamePrefix}__search-input`}
          type="text"
          placeholder="Find your pokemon"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <div className={`${classNamePrefix}__item-container my-2`}>
          {currentItems.map((item, index) => (
            <Item key={index} item={item} onItemClick={onItemClick} />
          ))}
        </div>
      </div>

      <PaginationSection itemsPerPage={itemsPerPage} totalItems={filteredItems.length} paginate={paginate} />
    </div>
  );
};

export default List;
