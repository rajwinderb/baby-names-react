import babyNamesData from "../babyNamesData.json";
import BabyNames from "./BabyNames";

export default function MainContent(): JSX.Element {
  const babyNamesList = babyNamesData;
  return (
    <section className="MainContent">
      <BabyNames babyNamesData={babyNamesList} />
    </section>
  );
}
