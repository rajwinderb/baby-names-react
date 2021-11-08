interface BabyProp {
  id: number;
  name: string;
  sex: string;
}

export function removeFromFavourites(
  babyNameToRemove: string,
  favouriteBabyNames: BabyProp[],
  setFavouriteBabyNames: (babyNames: BabyProp[]) => void
): void {
  const favouriteRemoved = favouriteBabyNames.filter(
    (babyName) => babyName.name !== babyNameToRemove
  );

  setFavouriteBabyNames(favouriteRemoved);
}
