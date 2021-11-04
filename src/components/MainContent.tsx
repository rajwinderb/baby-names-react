import "./MainContent.css";
import babyNamesData from "../babyNamesData.json";
import BabyNames from "./BabyNames";

interface Props {
  searchText: string;
}

export default function MainContent(props: Props): JSX.Element {
  const babyNamesList = babyNamesData;
  return (
    <section className="MainContent">
      <BabyNames babyNamesData={babyNamesList} searchText={props.searchText} />
    </section>
  );
}
