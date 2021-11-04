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
  const babyNameElements = props.babyNamesData.map((babyName) => (
    <BabyName
      key={babyName.id}
      id={babyName.id}
      name={babyName.name}
      sex={babyName.sex}
    />
  ));

  return (
    <section className="BabyNames">
      <p>Baby Names</p>
      <ul>{babyNameElements}</ul>
    </section>
  );
}
