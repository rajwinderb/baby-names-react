import "./BabyNames.css";
import { filterBySearch } from "../utils/filterBySearch";
import { filterByGender } from "../utils/filterByGender";
import { alphabetiseBabyNames } from "../utils/alphabetiseBabyNames";
import BabyName from "./BabyName";

interface Props {
  babyNamesData: BabyProp[];
  favouriteBabyNames: BabyProp[];
  handleFavouriteBabyNames: (babyNames: BabyProp[]) => void;
  searchText: string;
  genderSelected: string;
}

interface BabyProp {
  id: number;
  name: string;
  sex: string;
}

export default function BabyNames(props: Props): JSX.Element {
  const filteredByGender = filterByGender(
    props.babyNamesData,
    props.genderSelected
  );
  const filteredBySearch = filterBySearch(filteredByGender, props.searchText);
  const alphabetisedBabyNames = alphabetiseBabyNames(filteredBySearch);
  const babyNameElements = alphabetisedBabyNames.map((babyName) => (
    <BabyName
      key={babyName.id}
      babyName={{ id: babyName.id, name: babyName.name, sex: babyName.sex }}
      favouriteBabyNames={props.favouriteBabyNames}
      handleFavouriteBabyNames={props.handleFavouriteBabyNames}
    />
  ));

  return (
    <section className="BabyNames">
      <ul>{babyNameElements}</ul>
    </section>
  );
}
