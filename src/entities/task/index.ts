type Parent = undefined | Task | null;

interface Irating {
  negative: number;
  optimistic: number;
  realistic: number;
}

interface ItaskParams {
  title: string;
  rating: Irating;
  parent?: Parent;
}

export interface Itask {
  title: string;
  standardDeviation: string;
  probableRating: string;
}
export class Task {
  title: string;
  parent: Parent;
  standardDeviation: number;
  probableRating: number;

  constructor({ title, parent = null, rating }: ItaskParams) {
    this.title = title;
    this.parent = parent;
    const { standardDeviation, probableRating } = this.computedDuration(rating);
    this.standardDeviation = standardDeviation;
    this.probableRating = probableRating;
  }

  private computedDuration({
    realistic,
    negative,
    optimistic
  }: Irating): { standardDeviation: number; probableRating: number } {
    return {
      probableRating: (negative + 4 * realistic + optimistic) / 6,
      standardDeviation: (optimistic - negative) / 6
    };
  }

  getTask(): Itask {
    return {
      title: this.title,
      probableRating: this.probableRating.toFixed(2),
      standardDeviation: this.standardDeviation.toFixed(2)
    };
  }
}
