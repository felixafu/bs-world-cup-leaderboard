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
  },
  {
    id: 13,
    label: "Game 13",
    matchup: "Spain vs Cape Verde",
    date: "Jun 15",
    winner: "Draw",     // Spain 0-0 Cape Verde — everyone picked Spain
    freebie: true,       // shock result: nobody got it right, so a consolation pack for all voters
    options: {
      "Spain": [
        "Ariel", "Fatima Mohomud", "George Thomas", "Nora",
        "Malavika Nair Santhosh Kumar", "Gui", "Stef", "Beka", "Ishaq",
        "Mauricio", "Nickel", "Alicia", "Harriet", "Lara Knight", "Alice Fontaine",
        "Rory", "Cian", "Amaya Rutherford", "Madeleine McCartney", "Patricia Palasz",
        "Ignacio Llado", "Sophie Hills", "Måns", "Haimini", "Mariana", "Hannah",
        "Cris", "becky", "Rafael", "Merve", "Glynis", "Vaiva", "Paola Han",
        "Ben Attwood", "Ello Han", "Uğur", "Alfred Birch", "Gavin", "Felix Liu"
      ],
      "Draw": [],
      "Cape Verde": []
    }
  },
  {
    id: 14,
    label: "Game 14",
    matchup: "Belgium vs Egypt",
    date: "Jun 15",
    winner: "Draw",     // Belgium 1-1 Egypt
    options: {
      "Belgium": [
        "Fatima Mohomud", "George Thomas", "Malavika Nair Santhosh Kumar", "Gui",
        "Stef", "Ishaq", "Mauricio", "Nickel", "Alicia", "Harriet", "Lara Knight",
        "Alice Fontaine", "Rory", "Cian", "Amaya Rutherford", "Madeleine McCartney",
        "Ignacio Llado", "Sophie Hills", "Måns", "Haimini", "Mariana", "Hannah",
        "Cris", "becky", "Rafael", "Glynis", "Vaiva", "Paola Han", "Ben Attwood",
        "Felix Liu"
      ],
      "Draw": ["Ariel", "Nora", "Beka", "Patricia Palasz", "Uğur", "Alfred Birch"],
      "Egypt": ["Merve", "Ello Han", "Gavin"]
    }
  },
  {
    id: 15,
    label: "Game 15",
    matchup: "Saudi Arabia vs Uruguay",
    date: "Jun 15",
    winner: "Draw",     // Saudi Arabia 1-1 Uruguay
    options: {
      "Saudi Arabia": ["Nickel", "Alicia"],
      "Draw": ["Rory", "Amaya Rutherford", "Sophie Hills", "Haimini"],
      "Uruguay": [
        "Ariel", "Fatima Mohomud", "George Thomas", "Nora",
        "Malavika Nair Santhosh Kumar", "Gui", "Stef", "Beka", "Ishaq", "Mauricio",
        "Harriet", "Lara Knight", "Alice Fontaine", "Cian", "Madeleine McCartney",
        "Patricia Palasz", "Ignacio Llado", "Måns", "Mariana", "Hannah", "Cris",
        "becky", "Rafael", "Merve", "Glynis", "Vaiva", "Paola Han", "Ben Attwood",
        "Ello Han", "Uğur", "Alfred Birch", "Gavin", "Felix Liu"
      ]
    }
  },
  {
    id: 16,
    label: "Game 16",
    matchup: "Iran vs New Zealand",
    date: "Jun 15",
    winner: "Draw",     // Iran 2-2 New Zealand
    options: {
      "Iran": [
        "Ariel", "Nora", "Beka", "Nickel", "Alicia", "Rory", "Cian",
        "Amaya Rutherford", "Madeleine McCartney", "Måns", "Vaiva", "Uğur", "Gavin"
      ],
      "Draw": [
        "Fatima Mohomud", "George Thomas", "Malavika Nair Santhosh Kumar",
        "Mauricio", "Harriet", "Lara Knight", "Alice Fontaine", "Ignacio Llado",
        "Haimini", "Mariana", "Cris", "becky", "Rafael", "Glynis", "Paola Han",
        "Ello Han", "Felix Liu"
      ],
      "New Zealand": [
        "Gui", "Stef", "Ishaq", "Patricia Palasz", "Sophie Hills", "Hannah",
        "Merve", "Ben Attwood", "Alfred Birch"
      ]
    }
  },
  {
    id: 17,
    label: "Game 17",
    matchup: "France vs Senegal",
    date: "Jun 16",
    winner: "France", // France 3-1 Senegal
    options: {
      "France": [
        "Sophia Newton", "Kasia", "Fatima Mohomud", "Gavin", "James Johns",
        "Bryony", "Nickel", "Ishaq", "Cian", "Ross MacPherson", "Lara Knight",
        "Uğur", "Paulina", "Alfred Birch", "Glynis", "Vaiva", "Eren", "Biz",
        "Lauren Anderson", "Nora", "Ello Han", "Måns", "Haimini", "becky",
        "Patricia Palasz", "Rory", "Cris", "Felix Liu", "Amaya Rutherford",
        "Madeleine McCartney", "Ariel", "Paola Han", "Yasmin", "Sophie Hills",
        "Mariana", "Gui", "Mauricio", "Hannah", "Merve", "Stef", "Rafael",
        "Ben Attwood"
      ],
      "Draw": ["Ignacio Llado", "Rocio"],
      "Senegal": ["George Thomas", "Izzi"]
    }
  },
  {
    id: 18,
    label: "Game 18",
    matchup: "Iraq vs Norway",
    date: "Jun 16",
    winner: "Norway", // Norway 4-1 Iraq
    options: {
      "Iraq": ["Ignacio Llado", "Rocio", "Haimini", "Izzi"],
      "Draw": [
        "Fatima Mohomud", "Nickel", "Cian", "Alfred Birch", "Patricia Palasz",
        "Cris", "Amaya Rutherford", "Madeleine McCartney", "Yasmin", "Mariana",
        "Hannah"
      ],
      "Norway": [
        "Sophia Newton", "Kasia", "Gavin", "James Johns", "Bryony", "Ishaq",
        "Ross MacPherson", "Lara Knight", "Uğur", "Paulina", "Glynis", "Vaiva",
        "George Thomas", "Eren", "Biz", "Lauren Anderson", "Nora", "Ello Han",
        "Måns", "becky", "Rory", "Felix Liu", "Ariel", "Paola Han",
        "Sophie Hills", "Gui", "Mauricio", "Merve", "Stef", "Rafael",
        "Ben Attwood"
      ]
    }
  },
  {
    id: 19,
    label: "Game 19",
    matchup: "Argentina vs Algeria",
    date: "Jun 16",
    winner: "Argentina", // Argentina 3-0 Algeria
    options: {
      "Argentina": [
        "Sophia Newton", "Kasia", "Fatima Mohomud", "Gavin", "James Johns",
        "Bryony", "Ishaq", "Cian", "Ross MacPherson", "Lara Knight", "Uğur",
        "Paulina", "Alfred Birch", "Ignacio Llado", "Glynis", "Vaiva",
        "George Thomas", "Eren", "Biz", "Lauren Anderson", "Rocio", "Nora",
        "Ello Han", "Måns", "Haimini", "becky", "Patricia Palasz", "Cris",
        "Amaya Rutherford", "Madeleine McCartney", "Ariel", "Paola Han", "Yasmin",
        "Sophie Hills", "Izzi", "Gui", "Mauricio", "Hannah", "Merve", "Stef",
        "Rafael", "Ben Attwood"
      ],
      "Draw": ["Nickel", "Rory", "Felix Liu", "Mariana"],
      "Algeria": []
    }
  },
  {
    id: 20,
    label: "Game 20",
    matchup: "Austria vs Jordan",
    date: "Jun 16",
    winner: "Austria", // Austria 3-1 Jordan
    options: {
      "Austria": [
        "Sophia Newton", "Gavin", "James Johns", "Bryony", "Cian",
        "Ross MacPherson", "Lara Knight", "Uğur", "Paulina", "Ignacio Llado",
        "Glynis", "Vaiva", "Eren", "Biz", "Lauren Anderson", "Ello Han", "becky",
        "Patricia Palasz", "Rory", "Cris", "Felix Liu", "Amaya Rutherford",
        "Ariel", "Paola Han", "Mariana", "Hannah", "Merve", "Stef", "Rafael",
        "Ben Attwood"
      ],
      "Draw": [
        "Kasia", "Fatima Mohomud", "Ishaq", "Alfred Birch", "George Thomas",
        "Rocio", "Nora", "Måns", "Haimini", "Madeleine McCartney", "Yasmin",
        "Sophie Hills", "Izzi", "Gui", "Mauricio"
      ],
      "Jordan": ["Nickel"]
    }
  }
];
