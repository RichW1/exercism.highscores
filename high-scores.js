//
// This is only a SKELETON file for the 'High-Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this.score = scores;
  }

  get scores() {
    return this.score;
  }

  get latest() {
    return this.score[this.score.length - 1];
  }

  get personalBest() {
    return Math.max.apply(null, this.score);
  }

  get personalTopThree() {
    return this.score.sort((function(a, b){return b-a})).slice(0, 3);
  }
}
