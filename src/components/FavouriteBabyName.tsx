import "./FavouriteBabyName.css";

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

export default function FavouriteBabyName(props: Props): JSX.Element {
  return (
    <li
      className="FavouriteBabyName"
      id={props.babyName.sex}
      onClick={() => console.log("fav name")}
    >
      {props.babyName.name}
    </li>
  );
}
