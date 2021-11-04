interface BabyProp {
  id: number;
  name: string;
  sex: string;
}

export function filterBySearch(
  babyNames: BabyProp[],
  searchText: string
): BabyProp[] {
  return babyNames.filter((babyName) => {
    if (babyName.name.toLocaleLowerCase().includes(searchText.toLowerCase())) {
      return babyName;
    } else {
      return false;
    }
  });
}
