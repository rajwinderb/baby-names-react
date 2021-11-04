import "./BabyNames.css";
import { alphabetiseBabyNames } from "../utils/alphabetiseBabyNames";
import BabyName from "./BabyName";

interface Props {
  babyNamesData: BabyProp[];
}

interface BabyProp {
  id: number;
  name: string;
  sex: string;
}

export default function BabyNames(props: Props): JSX.Element {
  const alphabetisedBabyNames = alphabetiseBabyNames(props.babyNamesData);
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
