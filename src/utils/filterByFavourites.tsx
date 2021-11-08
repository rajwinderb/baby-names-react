interface BabyProp {
  id: number;
  name: string;
  sex: string;
}

export function filterByFavourites(
  babyNamesList: BabyProp[],
  setBabyNamesList: (babyNames: BabyProp[]) => void,
  favouriteBabyNames: BabyProp[]
): void {
  let favouritesRemoved = babyNamesList;

  for (const favBabyName of favouriteBabyNames) {
    favouritesRemoved = favouritesRemoved.filter(
      (babyName) => babyName.name !== favBabyName.name
    );
  }

  setBabyNamesList(favouritesRemoved);
}
