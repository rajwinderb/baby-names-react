interface BabyProp {
  id: number;
  name: string;
  sex: string;
}

export default function BabyName(babyName: BabyProp): JSX.Element {
  return <li id={babyName.sex}>{babyName.name}</li>;
}
