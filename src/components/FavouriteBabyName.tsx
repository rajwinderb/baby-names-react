import "./FavouriteBabyName.css";
import { removeFromFavourites } from "../utils/removeFromFavourites";

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
      onClick={() =>
        removeFromFavourites(
          props.babyName.name,
          props.favouriteBabyNames,
          props.handleFavouriteBabyNames
        )
      }
    >
      {props.babyName.name}
    </li>
  );
}
