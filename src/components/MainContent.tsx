import "./MainContent.css";
import { useState, useEffect } from "react";
import { filterByFavourites } from "../utils/filterByFavourites";
import babyNamesData from "../babyNamesData.json";
import BabyNames from "./BabyNames";
import FavouriteBabyNames from "./FavouriteBabyNames";

interface Props {
  searchText: string;
}

interface BabyProp {
  id: number;
  name: string;
  sex: string;
}

export default function MainContent(props: Props): JSX.Element {
  const [babyNamesList, setBabyNamesList] = useState<BabyProp[]>(babyNamesData);
  const [favouriteBabyNames, setFavouriteBabyNames] = useState<BabyProp[]>([]);

  useEffect(() => {
    filterByFavourites(babyNamesList, setBabyNamesList, favouriteBabyNames);
  }, [babyNamesList, favouriteBabyNames]);

  return (
    <section className="MainContent">
      <FavouriteBabyNames
        favouriteBabyNames={favouriteBabyNames}
        handleFavouriteBabyNames={setFavouriteBabyNames}
      />
      <BabyNames
        babyNamesData={babyNamesList}
        favouriteBabyNames={favouriteBabyNames}
        handleFavouriteBabyNames={setFavouriteBabyNames}
        searchText={props.searchText}
      />
    </section>
  );
}
