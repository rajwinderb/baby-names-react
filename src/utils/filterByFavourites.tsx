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
  function notInFavs(babyName: string): boolean | undefined {
    for (const fav of favouriteBabyNames) {
      if (babyName === fav.name) {
        return false;
      } else {
        return true;
      }
    }
  }
  if (favouriteBabyNames.length !== 0) {
    const favouritesRemoved: BabyProp[] = [];

    for (const babyName of babyNamesList) {
      if (notInFavs(babyName.name)) {
        favouritesRemoved.push(babyName);
      }
    }

    setBabyNamesList(favouritesRemoved);
  }
}
