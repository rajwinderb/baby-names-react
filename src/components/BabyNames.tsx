import "./BabyNames.css";
import { filterBySearch } from "../utils/filterBySearch";
import { alphabetiseBabyNames } from "../utils/alphabetiseBabyNames";
import BabyName from "./BabyName";

interface Props {
  babyNamesData: BabyProp[];
  searchText: string;
}

interface BabyProp {
  id: number;
  name: string;
  sex: string;
}

export default function BabyNames(props: Props): JSX.Element {
  const filteredBySearch = filterBySearch(
    props.babyNamesData,
    props.searchText
  );
  const alphabetisedBabyNames = alphabetiseBabyNames(filteredBySearch);
  const babyNameElements = alphabetisedBabyNames.map((babyName) => (
    <BabyName
      key={babyName.id}
      id={babyName.id}
      name={babyName.name}
      sex={babyName.sex}
    />
  ));

  return (
    <section className="BabyNames">
      <ul>{babyNameElements}</ul>
    </section>
  );
}
