import "./BabyName.css";

interface BabyProp {
  id: number;
  name: string;
  sex: string;
}

interface Props {
  babyName: BabyProp;
  favouriteBabyNames: BabyProp[];
  handleFavouriteBabyNames: (babyNames: BabyProp[]) => void;
}

export default function BabyName(props: Props): JSX.Element {
  return (
    <li
      className="BabyName"
      id={props.babyName.sex}
      onClick={() =>
        props.handleFavouriteBabyNames([
          ...props.favouriteBabyNames,
          props.babyName,
        ])
      }
    >
      {props.babyName.name}
    </li>
  );
}
