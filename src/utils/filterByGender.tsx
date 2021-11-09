interface BabyProp {
  id: number;
  name: string;
  sex: string;
}

export function filterByGender(
  babyNames: BabyProp[],
  gender: string
): BabyProp[] {
  if (gender === "f") {
    return babyNames.filter((babyName) => babyName.sex === "f");
  } else if (gender === "m") {
    return babyNames.filter((babyName) => babyName.sex === "m");
  }
  return babyNames;
}
