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
  },
  {
    id: 3,
    label: "Game 3",
    matchup: "Canada vs Bosnia and Herzegovina",
    date: "Jun 12",
    winner: "Draw", // Canada 1-1 Bosnia and Herzegovina
    options: {
      "Canada": [
        "Paola Han", "Malavika Nair Santhosh Kumar", "Sophie Hills",
        "Fatima Mohomud", "Rory", "Ariel", "Mauricio", "Rita", "George Thomas",
        "Yasmin", "Max", "Ishaq", "Eren", "Madeleine McCartney", "Cian", "Issy",
        "Mariana", "Kathryn", "Rafael", "Alfred Birch", "Ignacio Llado",
        "Patricia Palasz", "becky", "Haimini", "Felix Liu"
      ],
      "Draw": ["Izzi", "Cris", "Nora", "Sarj", "Paulina"],
      "Bosnia and Herzegovina": [
        "Lauren Anderson", "Vaiva", "Måns", "Ello Han", "Uğur",
        "Amaya Rutherford", "Merve"
      ]
    }
  },
  {
    id: 4,
    label: "Game 4",
    matchup: "USA vs Paraguay",
    date: "Jun 12",
    winner: "USA", // USA 4-1 Paraguay
    options: {
      "USA": [
        "Paola Han", "Fatima Mohomud", "Rory", "Ariel", "Mauricio", "Nora",
        "Vaiva", "George Thomas", "Yasmin", "Max", "Ishaq", "Måns", "Eren",
        "Madeleine McCartney", "Cian", "Issy", "Mariana", "Kathryn", "Rafael",
        "Uğur", "Alfred Birch", "becky", "Felix Liu"
      ],
      "Draw": ["Sophie Hills", "Paulina", "Ignacio Llado", "Patricia Palasz"],
      "Paraguay": [
        "Malavika Nair Santhosh Kumar", "Izzi", "Lauren Anderson", "Cris",
        "Rita", "Sarj", "Ello Han", "Haimini", "Amaya Rutherford", "Merve"
      ]
    }
  },
  {
    id: 5,
    label: "Game 5",
    matchup: "Qatar vs Switzerland",
    date: "Jun 13",
    winner: "Draw", // Qatar 1-1 Switzerland
    options: {
      "Qatar": ["Madeleine McCartney", "Ello Han"],
      "Draw": ["Malavika Nair Santhosh Kumar"],
      "Switzerland": [
        "Nora", "Gavin", "Alice Fontaine", "Nevena Arnould", "Paola Han",
        "Fatima Mohomud", "Sophie Hills", "Izzi", "Lauren Anderson", "Rory",
        "Ariel", "Cris", "Mauricio", "Vaiva", "Camila", "Patricia Palasz",
        "George Thomas", "Yasmin", "Max", "Ishaq", "Harriet", "Sarj", "Måns",
        "Eren", "Cian", "Issy", "Mariana", "Kathryn", "Rafael", "Uğur",
        "Alfred Birch", "becky", "Ignacio Llado", "Amaya Rutherford", "Haimini",
        "Merve", "Felix Liu"
      ]
    }
  },
  {
    id: 6,
    label: "Game 6",
    matchup: "Brazil vs Morocco",
    date: "Jun 13",
    winner: "Draw", // Brazil 1-1 Morocco
    options: {
      "Brazil": [
        "Nora", "Gavin", "Alice Fontaine", "Nevena Arnould", "Paola Han",
        "Sophie Hills", "Izzi", "Lauren Anderson", "Rory", "Ariel", "Mauricio",
        "Vaiva", "Camila", "George Thomas", "Yasmin", "Ishaq", "Harriet", "Sarj",
        "Måns", "Eren", "Madeleine McCartney", "Cian", "Issy", "Ello Han",
        "Mariana", "Kathryn", "Rafael", "Uğur", "Alfred Birch", "becky",
        "Amaya Rutherford", "Haimini", "Merve", "Felix Liu"
      ],
      "Draw": [
        "Malavika Nair Santhosh Kumar", "Cris", "Patricia Palasz", "Max",
        "Ignacio Llado"
      ],
      "Morocco": ["Fatima Mohomud"]
    }
  },
  {
    id: 7,
    label: "Game 7",
    matchup: "Haiti vs Scotland",
    date: "Jun 13",
    winner: "Scotland", // Haiti 0-1 Scotland
    options: {
      "Haiti": ["Malavika Nair Santhosh Kumar", "Fatima Mohomud", "Merve"],
      "Draw": ["Nevena Arnould", "Sarj"],
      "Scotland": [
        "Nora", "Gavin", "Alice Fontaine", "Paola Han", "Sophie Hills", "Izzi",
        "Lauren Anderson", "Rory", "Ariel", "Cris", "Mauricio", "Vaiva",
        "Camila", "Patricia Palasz", "George Thomas", "Yasmin", "Max", "Ishaq",
        "Harriet", "Måns", "Eren", "Madeleine McCartney", "Cian", "Issy",
        "Ello Han", "Mariana", "Kathryn", "Rafael", "Uğur", "Alfred Birch",
        "becky", "Ignacio Llado", "Amaya Rutherford", "Haimini", "Felix Liu"
      ]
    }
  },
  {
    id: 8,
    label: "Game 8",
    matchup: "Australia vs Türkiye",
    date: "Jun 14",
    winner: "Australia", // Australia 2-0 Türkiye
    options: {
      "Australia": [
        "Nevena Arnould", "Malavika Nair Santhosh Kumar", "Lauren Anderson",
        "George Thomas", "Madeleine McCartney", "Mariana", "Kathryn"
      ],
      "Draw": ["Gavin", "Alice Fontaine", "Sarj", "Måns"],
      "Türkiye": [
        "Nora", "Paola Han", "Fatima Mohomud", "Sophie Hills", "Izzi", "Rory",
        "Ariel", "Cris", "Mauricio", "Vaiva", "Camila", "Patricia Palasz",
        "Yasmin", "Max", "Ishaq", "Harriet", "Eren", "Cian", "Issy", "Ello Han",
        "Rafael", "Uğur", "Alfred Birch", "becky", "Ignacio Llado",
        "Amaya Rutherford", "Haimini", "Merve", "Felix Liu"
      ]
    }
  },
  {
    id: 9,
    label: "Game 9",
    matchup: "Germany vs Curaçao",
    date: "Jun 14",
    winner: "Germany", // Germany 7-1 Curaçao
    options: {
      "Germany": [
        "Nora", "Gavin", "Alice Fontaine", "Nevena Arnould", "Paola Han",
        "Malavika Nair Santhosh Kumar", "Fatima Mohomud", "Sophie Hills", "Izzi",
        "Lauren Anderson", "Rory", "Ariel", "Cris", "Mauricio", "Vaiva",
        "Camila", "Patricia Palasz", "George Thomas", "Yasmin", "Max", "Ishaq",
        "Harriet", "Sarj", "Måns", "Eren", "Madeleine McCartney", "Cian", "Issy",
        "Ello Han", "Mariana", "Kathryn", "Rafael", "Uğur", "Alfred Birch",
        "becky", "Ignacio Llado", "Amaya Rutherford", "Haimini", "Merve",
        "Felix Liu"
      ],
      "Draw": [],
      "Curaçao": []
    }
  },
  {
    id: 10,
    label: "Game 10",
    matchup: "Netherlands vs Japan",
    date: "Jun 14",
    winner: "Draw", // Netherlands 2-2 Japan
    options: {
      "Netherlands": [
        "Nora", "Gavin", "Alice Fontaine", "Paola Han",
        "Malavika Nair Santhosh Kumar", "Fatima Mohomud", "Sophie Hills", "Izzi",
        "Lauren Anderson", "Rory", "Ariel", "Cris", "Mauricio", "Vaiva",
        "Camila", "George Thomas", "Yasmin", "Max", "Harriet", "Sarj", "Måns",
        "Cian", "Issy", "Ello Han", "Mariana", "Kathryn", "Rafael",
        "Alfred Birch", "becky", "Ignacio Llado", "Amaya Rutherford", "Merve"
      ],
      "Draw": ["Patricia Palasz", "Ishaq", "Eren", "Uğur", "Felix Liu"],
      "Japan": ["Nevena Arnould", "Madeleine McCartney", "Haimini"]
    }
  },
  {
    id: 11,
    label: "Game 11",
    matchup: "Ivory Coast vs Ecuador",
    date: "Jun 14",
    winner: "Ivory Coast", // Ivory Coast 1-0 Ecuador
    options: {
      "Ivory Coast": ["Alice Fontaine", "Ishaq", "Sarj", "Madeleine McCartney"],
      "Draw": [
        "Nora", "Paola Han", "Malavika Nair Santhosh Kumar", "Rory",
        "George Thomas", "Måns", "becky", "Ignacio Llado", "Felix Liu"
      ],
      "Ecuador": [
        "Gavin", "Nevena Arnould", "Fatima Mohomud", "Sophie Hills", "Izzi",
        "Lauren Anderson", "Ariel", "Cris", "Mauricio", "Vaiva", "Camila",
        "Patricia Palasz", "Yasmin", "Max", "Harriet", "Eren", "Cian", "Issy",
        "Ello Han", "Mariana", "Kathryn", "Rafael", "Uğur", "Alfred Birch",
        "Amaya Rutherford", "Haimini", "Merve"
      ]
    }
  },
  {
    id: 12,
    label: "Game 12",
    matchup: "Sweden vs Tunisia",
    date: "Jun 14",
    winner: "Sweden", // Sweden 5-1 Tunisia
    options: {
      "Sweden": [
        "Nora", "Alice Fontaine", "Paola Han", "Malavika Nair Santhosh Kumar",
        "Fatima Mohomud", "Sophie Hills", "Izzi", "Rory", "Ariel", "Cris",
        "Mauricio", "Vaiva", "Camila", "Patricia Palasz", "George Thomas",
        "Yasmin", "Max", "Ishaq", "Harriet", "Sarj", "Måns", "Eren",
        "Madeleine McCartney", "Cian", "Issy", "Ello Han", "Mariana", "Kathryn",
        "Rafael", "Uğur", "Alfred Birch", "becky", "Ignacio Llado", "Haimini",
        "Merve", "Felix Liu"
      ],
      "Draw": ["Nevena Arnould", "Lauren Anderson", "Amaya Rutherford"],
      "Tunisia": ["Gavin"]
    }
  }
];
