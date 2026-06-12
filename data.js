// ============================================================
// Blank Street World Cup — Poll data
// ------------------------------------------------------------
// HOW TO ADD A NEW GAME:
//   1. Copy a { } block below.
//   2. Set the matchup, date, and `winner` (must exactly match
//      one of the option keys).
//   3. Paste each option's voters from the Polly results.
// The leaderboard recalculates automatically. 1 correct = 1 pack.
// ============================================================

const GAMES = [
  {
    id: 1,
    label: "Game 1",
    matchup: "Mexico vs South Africa",
    date: "Jun 11",
    winner: "Mexico",
    options: {
      "Mexico": [
        "Ignacio Llado", "Malavika Nair Santhosh Kumar", "Måns", "Eren", "Uğur",
        "Haimini", "Cian", "Kathryn", "Yasmin", "Hash", "Patricia Palasz", "Nora",
        "George Thomas", "Alfred Birch", "Sophie Hills", "Ariel", "Mauricio",
        "Carlo Shyrbi", "Alice Fontaine", "Camila", "Cris", "Mariana", "Izzi",
        "Rory", "Gui", "Amaya Rutherford", "Ello Han", "Ben Attwood", "Merve",
        "Rafael", "Felix Liu"
      ],
      "Draw": ["Alicia", "James Johns", "becky", "Vaiva"],
      "South Africa": ["Bryony"]
    }
  },
  {
    id: 2,
    label: "Game 2",
    matchup: "Korea vs Czech Republic",
    date: "Jun 12",
    winner: "Korea",
    options: {
      "Korea": [
        "Malavika Nair Santhosh Kumar", "Haimini", "Bryony", "Nora",
        "George Thomas", "Alice Fontaine", "becky", "Gui", "Ello Han", "Rafael"
      ],
      "Draw": [
        "Ignacio Llado", "Måns", "Eren", "Uğur", "Cian", "Hash", "Patricia Palasz",
        "Sophie Hills", "Mauricio", "Rory", "Amaya Rutherford"
      ],
      "Czech Republic": [
        "Alicia", "Kathryn", "James Johns", "Yasmin", "Alfred Birch", "Ariel",
        "Carlo Shyrbi", "Camila", "Cris", "Mariana", "Izzi", "Vaiva",
        "Ben Attwood", "Merve", "Felix Liu"
      ]
    }
  }
];
