import "./BabyName.css";

interface BabyProp {
  id: number;
  name: string;
  sex: string;
}

export default function BabyName(babyName: BabyProp): JSX.Element {
  return (
    <li className="BabyName" id={babyName.sex}>
      {babyName.name}
    </li>
  );
}
