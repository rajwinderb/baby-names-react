interface BabyProp {
  id: number;
  name: string;
  sex: string;
}

export function alphabetiseBabyNames(babyNames: BabyProp[]): BabyProp[] {
  return babyNames.sort((a, b) => a.name.localeCompare(b.name));
}
