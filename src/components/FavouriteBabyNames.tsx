import FavouriteBabyName from "./FavouriteBabyName";

interface Props {
  favouriteBabyNames: BabyProp[];
  handleFavouriteBabyNames: (babyNames: BabyProp[]) => void;
}

interface BabyProp {
  id: number;
  name: string;
  sex: string;
}

export default function FavouriteBabyNames(props: Props): JSX.Element {
  const favouriteBabyNameElements = props.favouriteBabyNames.map((babyName) => (
    <FavouriteBabyName
      key={babyName.id}
      babyName={{ id: babyName.id, name: babyName.name, sex: babyName.sex }}
      favouriteBabyNames={props.favouriteBabyNames}
      handleFavouriteBabyNames={props.handleFavouriteBabyNames}
    />
  ));
  return (
    <section className="FavouriteBabyNames">
      <h3>Favourites:</h3>
      {FavouriteBabyNames.length !== 0 ? (
        <ul>{favouriteBabyNameElements}</ul>
      ) : (
        <p>Click some names to add to your favourites</p>
      )}
      <hr />
    </section>
  );
}
