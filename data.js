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
  },
  {
    id: 21,
    label: "Game 21",
    matchup: "Portugal vs DR Congo",
    date: "Jun 17",
    winner: "Draw", // Portugal 1-1 DR Congo — 55 of 56 picked Portugal (no freebie unless Felix says)
    options: {
      "Portugal": [
        "Carlo Shyrbi", "Bryony", "Mauricio", "Haimini", "Yasmin",
        "Fatima Mohomud", "becky", "Kasia", "Felix Liu", "Maria Balsini", "Nickel",
        "Alice Fontaine", "Malavika Nair Santhosh Kumar", "Rocio", "Rory", "Stef",
        "Nora", "Amaya Rutherford", "Nevena Arnould", "Hash", "Ramil", "Eren",
        "Adam Newell", "Cian", "Harriet", "Madeleine McCartney", "Issy",
        "Ignacio Llado", "Måns", "Julia Dias", "Alfred Birch", "Ello Han",
        "Glynis", "Estera", "Biz", "George Thomas", "Hannah", "Beka", "Ariel",
        "Rafael", "Gui", "Uğur", "James Johns", "Camila", "Max", "Cris",
        "Sophie Hills", "Sarj", "Gavin", "Cara Bustard", "Ross MacPherson",
        "Paola Han", "Patricia Palasz", "Mariana", "Merve"
      ],
      "Draw": [],
      "DR Congo": ["Martina"]
    }
  },
  {
    id: 22,
    label: "Game 22",
    matchup: "England vs Croatia",
    date: "Jun 17",
    winner: "England", // England 4-2 Croatia
    options: {
      "England": [
        "Bryony", "Mauricio", "Haimini", "Fatima Mohomud", "Kasia", "Felix Liu",
        "Nickel", "Alice Fontaine", "Malavika Nair Santhosh Kumar", "Rocio",
        "Rory", "Nevena Arnould", "Ramil", "Adam Newell", "Harriet", "Issy",
        "Ignacio Llado", "Julia Dias", "Alfred Birch", "Glynis", "Estera", "Biz",
        "George Thomas", "Hannah", "Beka", "Ariel", "Rafael", "Uğur",
        "James Johns", "Camila", "Cris", "Sarj", "Cara Bustard", "Merve"
      ],
      "Draw": [
        "Carlo Shyrbi", "Yasmin", "becky", "Maria Balsini", "Martina", "Stef",
        "Nora", "Amaya Rutherford", "Eren", "Cian", "Madeleine McCartney", "Måns",
        "Gui", "Max", "Sophie Hills", "Ross MacPherson", "Paola Han",
        "Patricia Palasz", "Mariana"
      ],
      "Croatia": ["Hash", "Ello Han", "Gavin"]
    }
  },
  {
    id: 23,
    label: "Game 23",
    matchup: "Uzbekistan vs Colombia",
    date: "Jun 17",
    winner: "Colombia", // Colombia 3-1 Uzbekistan
    options: {
      "Uzbekistan": ["Carlo Shyrbi", "Ariel"],
      "Draw": [
        "Haimini", "Kasia", "Alice Fontaine", "Rory", "Stef", "Ignacio Llado",
        "Måns", "Beka"
      ],
      "Colombia": [
        "Bryony", "Mauricio", "Yasmin", "Fatima Mohomud", "becky", "Felix Liu",
        "Maria Balsini", "Nickel", "Martina", "Malavika Nair Santhosh Kumar",
        "Rocio", "Nora", "Amaya Rutherford", "Nevena Arnould", "Hash", "Ramil",
        "Eren", "Adam Newell", "Cian", "Harriet", "Madeleine McCartney", "Issy",
        "Julia Dias", "Alfred Birch", "Ello Han", "Glynis", "Estera", "Biz",
        "George Thomas", "Hannah", "Rafael", "Gui", "Uğur", "James Johns",
        "Camila", "Max", "Cris", "Sophie Hills", "Sarj", "Gavin", "Cara Bustard",
        "Ross MacPherson", "Paola Han", "Patricia Palasz", "Mariana", "Merve"
      ]
    }
  },
  {
    id: 24,
    label: "Game 24",
    matchup: "Ghana vs Panama",
    date: "Jun 17",
    winner: "Ghana", // Ghana 1-0 Panama
    options: {
      "Ghana": [
        "Carlo Shyrbi", "Bryony", "Yasmin", "becky", "Kasia", "Maria Balsini",
        "Alice Fontaine", "Martina", "Rory", "Stef", "Nora", "Amaya Rutherford",
        "Cian", "Madeleine McCartney", "Måns", "Alfred Birch", "Estera", "Biz",
        "Hannah", "Beka", "Uğur", "Max", "Sarj"
      ],
      "Draw": [
        "Mauricio", "Haimini", "Fatima Mohomud", "Felix Liu",
        "Malavika Nair Santhosh Kumar", "Nevena Arnould", "Hash", "Ramil", "Eren",
        "Harriet", "Issy", "George Thomas", "Ariel", "Rafael", "Camila", "Cris",
        "Sophie Hills", "Gavin", "Cara Bustard", "Paola Han", "Patricia Palasz"
      ],
      "Panama": [
        "Nickel", "Rocio", "Adam Newell", "Ignacio Llado", "Julia Dias",
        "Ello Han", "Glynis", "Gui", "James Johns", "Ross MacPherson", "Mariana",
        "Merve"
      ]
    }
  },
  {
    id: 25,
    label: "Game 25",
    matchup: "Czechia vs South Africa",
    date: "Jun 18",
    winner: "Draw", // Czechia 1-1 South Africa
    options: {
      "Czechia": [
        "Hash", "Kasia", "George Thomas", "Ramil", "Kathryn", "Max", "Paola Han",
        "Glynis", "Jess", "Mariana", "Cara Bustard", "Uğur", "Jordan Lapthorne",
        "Sophia Newton", "Yasmin", "Gavin", "Camila", "Lara Knight", "Merve",
        "Adam Newell", "Jaime", "Måns", "Carlo Shyrbi", "Biz", "Beka", "becky",
        "Cian", "Rafael", "Rory", "Alfred Birch"
      ],
      "Draw": [
        "Nora", "Maria Balsini", "Eren", "Ishaq", "Haimini", "Fatima Mohomud",
        "Gui", "Patricia Palasz", "Estera", "James Johns", "Ben Attwood"
      ],
      "South Africa": [
        "Hannah", "Nickel", "Ross MacPherson", "Lottie Walden", "Martina",
        "Rocio", "Julia Dias", "Ello Han"
      ]
    }
  },
  {
    id: 26,
    label: "Game 26",
    matchup: "Switzerland vs Bosnia and Herzegovina",
    date: "Jun 18",
    winner: "Switzerland", // Switzerland 4-1 Bosnia and Herzegovina
    options: {
      "Switzerland": [
        "Hannah", "Hash", "Kasia", "George Thomas", "Ramil", "Kathryn", "Max",
        "Nora", "Maria Balsini", "Glynis", "Eren", "Cara Bustard", "Haimini",
        "Lottie Walden", "Fatima Mohomud", "Martina", "Julia Dias",
        "Sophia Newton", "Gui", "Yasmin", "Camila", "Lara Knight", "Merve",
        "Estera", "Jaime", "Måns", "Biz", "Beka", "becky", "James Johns",
        "Ben Attwood", "Alfred Birch"
      ],
      "Draw": [
        "Paola Han", "Ross MacPherson", "Jess", "Mariana", "Ishaq", "Uğur",
        "Rocio", "Patricia Palasz", "Gavin", "Ello Han", "Cian", "Rory"
      ],
      "Bosnia and Herzegovina": [
        "Nickel", "Jordan Lapthorne", "Adam Newell", "Carlo Shyrbi", "Rafael"
      ]
    }
  },
  {
    id: 27,
    label: "Game 27",
    matchup: "Canada vs Qatar",
    date: "Jun 18",
    winner: "Canada", // Canada 6-0 Qatar
    options: {
      "Canada": [
        "Hash", "Kasia", "George Thomas", "Kathryn", "Nickel", "Max", "Paola Han",
        "Nora", "Ross MacPherson", "Ishaq", "Cara Bustard", "Uğur",
        "Lottie Walden", "Jordan Lapthorne", "Sophia Newton", "Gui",
        "Patricia Palasz", "Yasmin", "Gavin", "Camila", "Jaime", "Måns",
        "Ello Han", "Cian", "Rory", "Ben Attwood", "Alfred Birch"
      ],
      "Draw": [
        "Hannah", "Ramil", "Glynis", "Mariana", "Haimini", "Fatima Mohomud",
        "Martina", "Rocio", "Julia Dias", "Lara Knight", "Adam Newell",
        "Carlo Shyrbi", "Biz", "Beka", "becky", "Rafael"
      ],
      "Qatar": ["Maria Balsini", "Eren", "Jess", "Merve", "Estera", "James Johns"]
    }
  },
  {
    id: 28,
    label: "Game 28",
    matchup: "Mexico vs South Korea",
    date: "Jun 18",
    winner: "Mexico", // Mexico 1-0 South Korea
    options: {
      "Mexico": [
        "Hannah", "Hash", "Kasia", "George Thomas", "Kathryn", "Nickel", "Nora",
        "Maria Balsini", "Eren", "Mariana", "Lottie Walden", "Rocio", "Julia Dias",
        "Gui", "Patricia Palasz", "Camila", "James Johns", "Ben Attwood",
        "Alfred Birch"
      ],
      "Draw": [
        "Max", "Ross MacPherson", "Cara Bustard", "Uğur", "Martina",
        "Sophia Newton", "Yasmin", "Måns", "Carlo Shyrbi", "becky"
      ],
      "South Korea": [
        "Ramil", "Paola Han", "Glynis", "Jess", "Ishaq", "Haimini",
        "Jordan Lapthorne", "Fatima Mohomud", "Gavin", "Lara Knight", "Merve",
        "Estera", "Adam Newell", "Jaime", "Biz", "Beka", "Ello Han", "Cian",
        "Rafael", "Rory"
      ]
    }
  },
  {
    id: 29,
    label: "Game 29",
    matchup: "Brazil vs Haiti",
    date: "Jun 19",
    winner: "Brazil", // Brazil 3-0 Haiti — everyone picked Brazil
    options: {
      "Brazil": [
        "Sophia Newton", "Nora", "Kasia", "Ramil", "Amaya Rutherford",
        "Fernando Paal", "Nickel", "Madeleine McCartney", "Fatima Mohomud",
        "George Thomas", "becky", "Kathryn", "Eren", "Mariana", "Mauricio",
        "Hannah", "Hash", "Rafael", "Rita", "Lauren Anderson", "Patricia Palasz",
        "Vaiva", "Beka", "Biz", "Maria Balsini", "Uğur", "Haimini", "amber",
        "Lottie Walden", "Alicia", "Måns", "Ello Han", "Cara Bustard", "Sarj",
        "Ash Nicol", "Cian", "Ishaq", "Gavin", "Estera", "Ariel", "Rocio", "Gui",
        "Glynis", "James Johns", "Lara Knight", "Camila", "Alfred Birch", "Stef",
        "Felix Liu", "Rory", "Paulina", "Paola Han", "Harriet", "Emma",
        "Julia Dias", "Adam Newell", "Yasmin", "Sophie Hills", "Ben Attwood",
        "Merve"
      ],
      "Draw": [],
      "Haiti": []
    }
  },
  {
    id: 30,
    label: "Game 30",
    matchup: "Türkiye vs Paraguay",
    date: "Jun 19",
    winner: "Paraguay", // Türkiye 0-1 Paraguay (upset)
    options: {
      "Türkiye": [
        "Kasia", "Ramil", "Amaya Rutherford", "Madeleine McCartney",
        "Fatima Mohomud", "becky", "Kathryn", "Eren", "Mariana", "Mauricio",
        "Hannah", "Hash", "Rafael", "Rita", "Lauren Anderson", "Patricia Palasz",
        "Vaiva", "Uğur", "amber", "Alicia", "Ello Han", "Cara Bustard",
        "Ash Nicol", "Cian", "Ishaq", "Gavin", "Estera", "Ariel", "Rocio", "Gui",
        "Camila", "Stef", "Felix Liu", "Harriet", "Emma", "Yasmin", "Merve"
      ],
      "Draw": [
        "Sophia Newton", "Nora", "Fernando Paal", "Beka", "Maria Balsini",
        "Haimini", "Måns", "Sarj", "Rory", "Paulina", "Paola Han"
      ],
      "Paraguay": [
        "Nickel", "George Thomas", "Biz", "Lottie Walden", "Glynis", "James Johns",
        "Lara Knight", "Alfred Birch", "Julia Dias", "Adam Newell", "Sophie Hills",
        "Ben Attwood"
      ]
    }
  },
  {
    id: 31,
    label: "Game 31",
    matchup: "Scotland vs Morocco",
    date: "Jun 19",
    winner: "Morocco", // Scotland 0-1 Morocco
    options: {
      "Scotland": [
        "Fernando Paal", "Nickel", "George Thomas", "Lauren Anderson",
        "Patricia Palasz", "Vaiva", "Beka", "amber", "Lottie Walden", "Alicia",
        "Cara Bustard", "Sarj", "Cian", "Gavin", "James Johns", "Stef",
        "Julia Dias", "Adam Newell", "Ben Attwood", "Merve"
      ],
      "Draw": [
        "Mauricio", "Hannah", "Haimini", "Ello Han", "Ash Nicol", "Ariel", "Gui",
        "Glynis", "Paulina", "Harriet", "Emma", "Yasmin"
      ],
      "Morocco": [
        "Sophia Newton", "Nora", "Kasia", "Ramil", "Amaya Rutherford",
        "Madeleine McCartney", "Fatima Mohomud", "becky", "Kathryn", "Eren",
        "Mariana", "Hash", "Rafael", "Rita", "Biz", "Maria Balsini", "Uğur",
        "Måns", "Ishaq", "Estera", "Rocio", "Lara Knight", "Camila", "Alfred Birch",
        "Felix Liu", "Rory", "Paola Han", "Sophie Hills"
      ]
    }
  },
  {
    id: 32,
    label: "Game 32",
    matchup: "USA vs Australia",
    date: "Jun 19",
    winner: "USA", // USA 2-0 Australia
    options: {
      "USA": [
        "Sophia Newton", "Nora", "Kasia", "Ramil", "Amaya Rutherford", "Nickel",
        "Fatima Mohomud", "George Thomas", "becky", "Kathryn", "Eren", "Mariana",
        "Mauricio", "Hannah", "Hash", "Rafael", "Rita", "Patricia Palasz", "Vaiva",
        "Beka", "Biz", "Uğur", "Haimini", "Måns", "Cara Bustard", "Ash Nicol",
        "Ishaq", "Gavin", "Ariel", "Gui", "Glynis", "Lara Knight", "Camila",
        "Alfred Birch", "Felix Liu", "Rory", "Paulina", "Paola Han", "Harriet",
        "Emma", "Adam Newell", "Yasmin"
      ],
      "Draw": [
        "Fernando Paal", "Lauren Anderson", "Maria Balsini", "Sarj", "Cian",
        "Rocio", "James Johns", "Stef", "Sophie Hills", "Ben Attwood"
      ],
      "Australia": [
        "Madeleine McCartney", "amber", "Lottie Walden", "Alicia", "Ello Han",
        "Estera", "Julia Dias", "Merve"
      ]
    }
  },
  {
    id: 33,
    label: "Game 33",
    matchup: "France vs Iraq",
    date: "Jun 21",
    winner: "France", // France 3-0 Iraq
    options: {
      "France": [
        "Nickel", "Sophia Newton", "Jess", "Malavika Nair Santhosh Kumar",
        "Madeleine McCartney", "Kasia", "Ariel", "Nevena Arnould", "Maria Balsini",
        "Amaya Rutherford", "Ello Han", "Ash Nicol", "Adam Newell", "Gui", "Cian",
        "Kathryn", "Fernando Paal", "Stef", "Beka", "Lara Knight", "Uğur", "Hash",
        "Sarj", "Eren", "Ramil", "Mariana", "James Johns", "Paola Han",
        "Alice Fontaine", "amber", "Gavin", "Camila", "Estera", "Mauricio",
        "George Thomas", "becky", "Hannah", "Rory", "Rita", "Rafael", "Cris",
        "Alfred Birch", "Fatima Mohomud", "Yasmin", "Biz", "Patricia Palasz",
        "Sophie Hills", "Glynis", "Harriet", "Haimini", "Merve", "Lauren Anderson",
        "Ben Attwood"
      ],
      "Draw": ["Martina"],
      "Iraq": ["Lottie Walden"]
    }
  },
  {
    id: 34,
    label: "Game 34",
    matchup: "Norway vs Senegal",
    date: "Jun 21",
    winner: "Norway", // Norway 3-2 Senegal
    options: {
      "Norway": [
        "Nickel", "Sophia Newton", "Kasia", "Ariel", "Amaya Rutherford",
        "Ello Han", "Ash Nicol", "Fernando Paal", "Beka", "Lara Knight",
        "Lottie Walden", "Hash", "Ramil", "Mariana", "Gavin", "Camila", "Mauricio",
        "becky", "Rory", "Rafael", "Fatima Mohomud", "Biz", "Patricia Palasz",
        "Sophie Hills", "Harriet", "Merve", "Lauren Anderson", "Ben Attwood"
      ],
      "Draw": [
        "Jess", "Malavika Nair Santhosh Kumar", "Madeleine McCartney",
        "Nevena Arnould", "Maria Balsini", "Stef", "Uğur", "Eren", "Paola Han",
        "Alice Fontaine", "Hannah", "Cris", "Yasmin", "Glynis", "Haimini"
      ],
      "Senegal": [
        "Adam Newell", "Gui", "Cian", "Kathryn", "Sarj", "James Johns", "amber",
        "Estera", "George Thomas", "Martina", "Rita", "Alfred Birch"
      ]
    }
  },
  {
    id: 35,
    label: "Game 35",
    matchup: "Argentina vs Austria",
    date: "Jun 21",
    winner: "Argentina", // Argentina 2-0 Austria
    options: {
      "Argentina": [
        "Nickel", "Sophia Newton", "Jess", "Malavika Nair Santhosh Kumar",
        "Madeleine McCartney", "Kasia", "Ariel", "Nevena Arnould", "Maria Balsini",
        "Amaya Rutherford", "Ello Han", "Ash Nicol", "Adam Newell", "Gui", "Cian",
        "Kathryn", "Fernando Paal", "Stef", "Beka", "Lara Knight", "Uğur",
        "Lottie Walden", "Hash", "Sarj", "Eren", "Ramil", "James Johns",
        "Paola Han", "Alice Fontaine", "amber", "Gavin", "Camila", "Estera",
        "Mauricio", "George Thomas", "Martina", "becky", "Hannah", "Rita",
        "Rafael", "Cris", "Alfred Birch", "Fatima Mohomud", "Yasmin", "Biz",
        "Patricia Palasz", "Sophie Hills", "Glynis", "Harriet", "Haimini", "Merve",
        "Lauren Anderson", "Ben Attwood"
      ],
      "Draw": ["Mariana", "Rory"],
      "Austria": []
    }
  },
  {
    id: 36,
    label: "Game 36",
    matchup: "New Zealand vs Egypt",
    date: "Jun 22",
    winner: "Egypt", // New Zealand 1-3 Egypt
    options: {
      "New Zealand": [
        "Nevena Arnould", "Ello Han", "Ross MacPherson", "amber", "Nickel",
        "Jordan Lapthorne", "Malavika Nair Santhosh Kumar", "Sophia Brena",
        "Gavin", "Sophie Hills", "Rocio", "Sarj"
      ],
      "Draw": [
        "becky", "Sophia Newton", "Fernando Paal", "Lara Knight",
        "Madeleine McCartney", "Paola Han", "Fatima Mohomud", "Mauricio", "Yasmin",
        "Cian", "Glynis"
      ],
      "Egypt": [
        "Amaya Rutherford", "Amna", "Ariel", "Lauren Anderson", "Eren", "Jess",
        "Biz", "Kasia", "Max", "Alice Fontaine", "Ash Nicol", "Elsa Kunushefci",
        "Merve", "Maria Balsini", "Alfred Birch", "Lottie Walden", "Estera", "Uğur"
      ]
    }
  },
  {
    id: 37,
    label: "Game 37",
    matchup: "Belgium vs Iran",
    date: "Jun 22",
    winner: "Draw", // Belgium 0-0 Iran
    options: {
      "Belgium": [
        "Amaya Rutherford", "Nevena Arnould", "becky", "Sophia Newton",
        "Ross MacPherson", "Amna", "Ariel", "amber", "Lauren Anderson",
        "Fernando Paal", "Jess", "Biz", "Lara Knight",
        "Malavika Nair Santhosh Kumar", "Madeleine McCartney", "Paola Han", "Kasia",
        "Max", "Alice Fontaine", "Fatima Mohomud", "Ash Nicol", "Elsa Kunushefci",
        "Merve", "Sophia Brena", "Mauricio", "Yasmin", "Maria Balsini", "Cian",
        "Gavin", "Sophie Hills", "Alfred Birch", "Rocio", "Glynis", "Lottie Walden",
        "Estera", "Sarj"
      ],
      "Draw": ["Jordan Lapthorne", "Uğur"],
      "Iran": ["Ello Han", "Nickel", "Eren"]
    }
  },
  {
    id: 38,
    label: "Game 38",
    matchup: "Uruguay vs Cape Verde",
    date: "Jun 22",
    winner: "Draw", // Uruguay 2-2 Cape Verde
    options: {
      "Uruguay": [
        "Amaya Rutherford", "Nevena Arnould", "becky", "Sophia Newton", "Amna",
        "Ariel", "Lauren Anderson", "Fernando Paal", "Nickel", "Eren",
        "Jordan Lapthorne", "Biz", "Lara Knight", "Paola Han", "Kasia", "Max",
        "Alice Fontaine", "Fatima Mohomud", "Ash Nicol", "Elsa Kunushefci", "Merve",
        "Sophia Brena", "Mauricio", "Yasmin", "Maria Balsini", "Cian", "Gavin",
        "Sophie Hills", "Alfred Birch", "Glynis", "Uğur", "Sarj"
      ],
      "Draw": [
        "Ello Han", "Ross MacPherson", "Jess", "Malavika Nair Santhosh Kumar",
        "Madeleine McCartney", "Rocio"
      ],
      "Cape Verde": ["amber", "Lottie Walden", "Estera"]
    }
  },
  {
    id: 39,
    label: "Game 39",
    matchup: "Spain vs Saudi Arabia",
    date: "Jun 22",
    winner: "Spain", // Spain 4-0 Saudi Arabia
    options: {
      "Spain": [
        "Amaya Rutherford", "Nevena Arnould", "becky", "Sophia Newton", "Ello Han",
        "Ross MacPherson", "Amna", "Ariel", "amber", "Lauren Anderson",
        "Fernando Paal", "Nickel", "Eren", "Jess", "Jordan Lapthorne", "Biz",
        "Lara Knight", "Malavika Nair Santhosh Kumar", "Madeleine McCartney",
        "Paola Han", "Kasia", "Max", "Alice Fontaine", "Fatima Mohomud", "Ash Nicol",
        "Merve", "Sophia Brena", "Mauricio", "Yasmin", "Maria Balsini", "Cian",
        "Gavin", "Sophie Hills", "Alfred Birch", "Rocio", "Glynis", "Lottie Walden",
        "Estera", "Uğur", "Sarj"
      ],
      "Draw": ["Elsa Kunushefci"],
      "Saudi Arabia": []
    }
  },
  {
    id: 40,
    label: "Game 40",
    matchup: "Jordan vs Algeria",
    date: "Jun 22",
    winner: "Algeria", // Jordan 1-2 Algeria
    options: {
      "Jordan": [
        "Nickel", "Malavika Nair Santhosh Kumar", "Ello Han", "Fernando Paal",
        "Beka", "Lottie Walden", "James Johns", "Martina", "Rita", "Sophie Hills",
        "Merve", "Ben Attwood"
      ],
      "Draw": [
        "Madeleine McCartney", "Maria Balsini", "Lara Knight", "Ramil", "Mariana",
        "Paola Han", "Gavin", "becky", "Rory", "Cris", "Fatima Mohomud",
        "Patricia Palasz", "Glynis", "Haimini"
      ],
      "Algeria": [
        "Sophia Newton", "Jess", "Kasia", "Ariel", "Nevena Arnould",
        "Amaya Rutherford", "Ash Nicol", "Adam Newell", "Gui", "Cian", "Kathryn",
        "Stef", "Uğur", "Hash", "Sarj", "Eren", "Alice Fontaine", "amber", "Camila",
        "Estera", "Mauricio", "George Thomas", "Hannah", "Rafael", "Alfred Birch",
        "Yasmin", "Biz", "Harriet", "Lauren Anderson"
      ]
    }
  },
  {
    id: 41,
    label: "Game 41",
    matchup: "Colombia vs DR Congo",
    date: "Jun 23",
    winner: "Colombia", // Colombia 1-0 DR Congo
    options: {
      "Colombia": [
        "Maria Balsini", "Bryony", "Nickel", "Ello Han", "Jess", "Sophia Newton",
        "Rocio", "Eren", "Alicia", "Sophie Hills", "Emma", "Hash", "Alfred Birch",
        "Stef", "Max", "amber", "Cian", "becky", "Uğur", "Rory", "Gavin", "Harriet",
        "Fatima Mohomud", "Ash Nicol", "Merve", "Mauricio", "Mariana",
        "Madeleine McCartney", "Gui", "Rafael", "Beka",
        "Malavika Nair Santhosh Kumar", "Paola Han", "Hannah", "Estera",
        "James Johns", "Haimini", "Kathryn", "Yasmin", "Ariel", "Camila", "Biz",
        "Glynis", "Cris"
      ],
      "Draw": ["Amaya Rutherford", "Lauren Anderson", "Ross MacPherson", "Alice Fontaine"],
      "DR Congo": ["Rita", "Lottie Walden"]
    }
  },
  {
    id: 42,
    label: "Game 42",
    matchup: "Croatia vs Panama",
    date: "Jun 23",
    winner: "Croatia", // Croatia 1-0 Panama
    options: {
      "Croatia": [
        "Maria Balsini", "Bryony", "Nickel", "Jess", "Sophia Newton", "Rocio",
        "Amaya Rutherford", "Hash", "Lauren Anderson", "Alfred Birch", "Stef", "Max",
        "amber", "Cian", "becky", "Uğur", "Ross MacPherson", "Rory", "Lottie Walden",
        "Alice Fontaine", "Gavin", "Harriet", "Ash Nicol", "Merve", "Mauricio",
        "Mariana", "Madeleine McCartney", "Gui", "Rafael", "Beka", "Paola Han",
        "Hannah", "Estera", "James Johns", "Yasmin", "Ariel", "Camila", "Biz",
        "Glynis", "Cris"
      ],
      "Draw": [
        "Eren", "Sophie Hills", "Rita", "Fatima Mohomud",
        "Malavika Nair Santhosh Kumar", "Haimini"
      ],
      "Panama": ["Ello Han", "Alicia", "Emma", "Kathryn"]
    }
  },
  {
    id: 43,
    label: "Game 43",
    matchup: "England vs Ghana",
    date: "Jun 23",
    winner: "Draw", // England 0-0 Ghana
    options: {
      "England": [
        "Maria Balsini", "Bryony", "Nickel", "Ello Han", "Jess", "Sophia Newton",
        "Rocio", "Eren", "Amaya Rutherford", "Alicia", "Sophie Hills", "Emma",
        "Hash", "Lauren Anderson", "Alfred Birch", "Stef", "Max", "amber", "Cian",
        "Uğur", "Rita", "Ross MacPherson", "Rory", "Lottie Walden", "Alice Fontaine",
        "Gavin", "Harriet", "Fatima Mohomud", "Ash Nicol", "Merve", "Mauricio",
        "Mariana", "Madeleine McCartney", "Gui", "Rafael", "Beka",
        "Malavika Nair Santhosh Kumar", "Paola Han", "Hannah", "Estera",
        "James Johns", "Haimini", "Kathryn", "Yasmin", "Ariel", "Camila", "Biz",
        "Glynis", "Cris"
      ],
      "Draw": ["becky"],
      "Ghana": []
    }
  },
  {
    id: 44,
    label: "Game 44",
    matchup: "Portugal vs Uzbekistan",
    date: "Jun 23",
    winner: "Portugal", // Portugal 5-0 Uzbekistan
    options: {
      "Portugal": [
        "Maria Balsini", "Bryony", "Nickel", "Ello Han", "Jess", "Sophia Newton",
        "Rocio", "Eren", "Amaya Rutherford", "Alicia", "Sophie Hills", "Emma",
        "Hash", "Lauren Anderson", "Alfred Birch", "Stef", "Max", "amber", "Cian",
        "becky", "Uğur", "Rita", "Ross MacPherson", "Rory", "Lottie Walden",
        "Alice Fontaine", "Gavin", "Harriet", "Fatima Mohomud", "Ash Nicol", "Merve",
        "Mariana", "Madeleine McCartney", "Gui", "Rafael", "Beka",
        "Malavika Nair Santhosh Kumar", "Paola Han", "Hannah", "Estera",
        "James Johns", "Haimini", "Kathryn", "Yasmin", "Ariel", "Camila", "Biz",
        "Glynis", "Cris"
      ],
      "Draw": ["Mauricio"],
      "Uzbekistan": []
    }
  },
  {
    id: 45,
    label: "Game 45",
    matchup: "South Africa vs South Korea",
    date: "Jun 24",
    winner: "South Africa", // South Africa 1-0 South Korea
    options: {
      "South Africa": [
        "Stef", "Ramil", "Beka", "Martina", "Lauren Anderson", "Rocio", "Nickel",
        "James Johns", "Ross MacPherson", "Hannah", "Biz", "amber"
      ],
      "Draw": ["Rita", "Nevena Arnould", "Vaiva", "Bryony"],
      "South Korea": [
        "Cara Bustard", "Ash Nicol", "Fatima Mohomud", "Ariel", "Amaya Rutherford",
        "Madeleine McCartney", "Glynis", "Jess", "Haimini", "Sophie Hills",
        "Mauricio", "Kasia", "Kevin Huang", "Gui", "Eren", "Ishaq", "Amna", "Uğur",
        "Ello Han", "Estera", "Alfred Birch", "Yasmin", "Maria Balsini", "Cris",
        "Paola Han", "Rory", "Alice Fontaine", "Camila", "Merve", "Rafael",
        "Kathryn", "Malavika Nair Santhosh Kumar", "Patricia Palasz", "Max", "Cian",
        "becky", "Ben Attwood", "Harriet"
      ]
    }
  },
  {
    id: 46,
    label: "Game 46",
    matchup: "Czechia vs Mexico",
    date: "Jun 24",
    winner: "Mexico", // Czechia 0-3 Mexico
    options: {
      "Czechia": [
        "Fatima Mohomud", "Stef", "Glynis", "Martina", "Gui", "Ello Han", "Estera",
        "Alfred Birch", "Cian", "amber", "Harriet"
      ],
      "Draw": [
        "Amaya Rutherford", "Madeleine McCartney", "Beka", "Uğur", "Yasmin", "Rory",
        "becky"
      ],
      "Mexico": [
        "Cara Bustard", "Rita", "Ash Nicol", "Ariel", "Jess", "Haimini",
        "Sophie Hills", "Ramil", "Mauricio", "Kasia", "Nevena Arnould",
        "Lauren Anderson", "Kevin Huang", "Eren", "Rocio", "Ishaq", "Amna", "Nickel",
        "Maria Balsini", "Cris", "Paola Han", "James Johns", "Ross MacPherson",
        "Alice Fontaine", "Camila", "Vaiva", "Merve", "Rafael", "Kathryn",
        "Malavika Nair Santhosh Kumar", "Patricia Palasz", "Max", "Hannah", "Biz",
        "Ben Attwood", "Bryony"
      ]
    }
  },
  {
    id: 47,
    label: "Game 47",
    matchup: "Morocco vs Haiti",
    date: "Jun 24",
    winner: "Morocco", // Morocco 4-2 Haiti
    options: {
      "Morocco": [
        "Cara Bustard", "Rita", "Ash Nicol", "Fatima Mohomud", "Ariel",
        "Amaya Rutherford", "Madeleine McCartney", "Stef", "Jess", "Haimini",
        "Sophie Hills", "Ramil", "Mauricio", "Kasia", "Beka", "Martina",
        "Nevena Arnould", "Lauren Anderson", "Kevin Huang", "Gui", "Eren", "Rocio",
        "Ishaq", "Amna", "Uğur", "Ello Han", "Estera", "Alfred Birch", "Yasmin",
        "Cris", "Paola Han", "Rory", "James Johns", "Ross MacPherson",
        "Alice Fontaine", "Camila", "Vaiva", "Merve", "Rafael", "Kathryn",
        "Malavika Nair Santhosh Kumar", "Max", "Hannah", "Biz", "Cian", "becky",
        "Ben Attwood", "Harriet", "Bryony"
      ],
      "Draw": ["Glynis", "Maria Balsini"],
      "Haiti": ["Nickel", "Patricia Palasz", "amber"]
    }
  },
  {
    id: 48,
    label: "Game 48",
    matchup: "Scotland vs Brazil",
    date: "Jun 24",
    winner: "Brazil", // Scotland 0-3 Brazil
    options: {
      "Scotland": [
        "Cara Bustard", "Beka", "Lauren Anderson", "Ishaq", "Nickel",
        "Ross MacPherson", "Patricia Palasz"
      ],
      "Draw": [
        "Ash Nicol", "Sophie Hills", "Eren", "Ello Han",
        "Malavika Nair Santhosh Kumar"
      ],
      "Brazil": [
        "Rita", "Fatima Mohomud", "Ariel", "Amaya Rutherford", "Madeleine McCartney",
        "Stef", "Glynis", "Jess", "Haimini", "Ramil", "Mauricio", "Kasia", "Martina",
        "Nevena Arnould", "Kevin Huang", "Gui", "Rocio", "Amna", "Uğur", "Estera",
        "Alfred Birch", "Yasmin", "Maria Balsini", "Cris", "Paola Han", "Rory",
        "James Johns", "Alice Fontaine", "Camila", "Vaiva", "Merve", "Rafael",
        "Kathryn", "Max", "Hannah", "Biz", "Cian", "becky", "amber", "Ben Attwood",
        "Harriet", "Bryony"
      ]
    }
  },
  {
    id: 49,
    label: "Game 49",
    matchup: "Bosnia and Herzegovina vs Qatar",
    date: "Jun 24",
    winner: "Bosnia and Herzegovina", // Bosnia 3-1 Qatar
    options: {
      "Bosnia and Herzegovina": [
        "Cara Bustard", "Ash Nicol", "Ariel", "Amaya Rutherford",
        "Madeleine McCartney", "Stef", "Jess", "Mauricio", "Kasia", "Martina",
        "Nevena Arnould", "Gui", "Ishaq", "Amna", "Uğur", "Ello Han", "Alfred Birch",
        "Yasmin", "Nickel", "Cris", "Paola Han", "Rory", "Camila", "Merve",
        "Kathryn", "Max", "Hannah", "Cian", "amber", "Harriet"
      ],
      "Draw": [
        "Fatima Mohomud", "Glynis", "Ramil", "Beka", "Lauren Anderson",
        "Kevin Huang", "Rocio", "Estera", "Maria Balsini", "Ross MacPherson",
        "Alice Fontaine", "Rafael", "Patricia Palasz", "becky"
      ],
      "Qatar": [
        "Rita", "Haimini", "Sophie Hills", "Eren", "James Johns", "Vaiva",
        "Malavika Nair Santhosh Kumar", "Biz", "Ben Attwood", "Bryony"
      ]
    }
  },
  {
    id: 50,
    label: "Game 50",
    matchup: "Switzerland vs Canada",
    date: "Jun 24",
    winner: "Switzerland", // Switzerland 2-1 Canada
    options: {
      "Switzerland": [
        "Madeleine McCartney", "Stef", "Glynis", "Sophie Hills", "Ramil", "Martina",
        "Nevena Arnould", "Lauren Anderson", "Kevin Huang", "Rocio", "Ello Han",
        "Estera", "Alfred Birch", "Maria Balsini", "Ross MacPherson", "Camila",
        "Merve", "Rafael", "Max", "Hannah", "Biz", "Harriet", "Bryony"
      ],
      "Draw": [
        "Cara Bustard", "Fatima Mohomud", "Amaya Rutherford", "Haimini", "Mauricio",
        "Beka", "Eren", "Amna", "Uğur", "Cris", "Paola Han", "Rory", "James Johns",
        "Alice Fontaine", "Vaiva", "Malavika Nair Santhosh Kumar", "Patricia Palasz",
        "Cian"
      ],
      "Canada": [
        "Rita", "Ash Nicol", "Ariel", "Jess", "Kasia", "Gui", "Ishaq", "Yasmin",
        "Nickel", "Kathryn", "becky", "amber", "Ben Attwood"
      ]
    }
  },
  {
    id: 55,
    label: "Game 55",
    matchup: "Curaçao vs Ivory Coast",
    date: "Jun 25",
    winner: "Ivory Coast", // Curaçao 0-2 Ivory Coast
    options: {
      "Curaçao": ["Nickel", "Alicia", "Paola Han", "Rocio", "Kathryn", "Harriet"],
      "Draw": [
        "Beka", "Malavika Nair Santhosh Kumar", "Cian", "James Johns",
        "Sophie Hills", "Glynis", "Martina", "Lauren Anderson", "Estera"
      ],
      "Ivory Coast": [
        "Amna", "Alice Fontaine", "Gui", "Ello Han", "Madeleine McCartney",
        "Mauricio", "Ariel", "Fatima Mohomud", "Amaya Rutherford", "Ramil", "Ishaq",
        "Alfred Birch", "Maria Balsini", "Ash Nicol", "amber", "Nevena Arnould",
        "Rory", "Eren", "Hash", "Kevin Huang", "Yasmin", "Camila", "Cris", "Max",
        "Adam Newell", "Merve", "becky", "Hannah", "Mariana", "Rafael", "Haimini",
        "Ben Attwood", "Fernando Paal"
      ]
    }
  },
  {
    id: 56,
    label: "Game 56",
    matchup: "Ecuador vs Germany",
    date: "Jun 25",
    winner: "Ecuador", // Ecuador 2-1 Germany (upset)
    options: {
      "Ecuador": ["Ello Han", "Rory", "James Johns"],
      "Draw": ["Nickel", "Beka"],
      "Germany": [
        "Amna", "Alice Fontaine", "Gui", "Madeleine McCartney", "Mauricio", "Ariel",
        "Fatima Mohomud", "Amaya Rutherford", "Ramil", "Ishaq", "Alfred Birch",
        "Malavika Nair Santhosh Kumar", "Maria Balsini", "Ash Nicol", "amber",
        "Cian", "Nevena Arnould", "Eren", "Hash", "Alicia", "Kevin Huang", "Yasmin",
        "Camila", "Cris", "Sophie Hills", "Max", "Adam Newell", "Paola Han", "Merve",
        "Glynis", "Rocio", "Martina", "Kathryn", "becky", "Lauren Anderson",
        "Hannah", "Harriet", "Mariana", "Rafael", "Estera", "Haimini", "Ben Attwood",
        "Fernando Paal"
      ]
    }
  },
  {
    id: 57,
    label: "Game 57",
    matchup: "Japan vs Sweden",
    date: "Jun 25",
    winner: "Draw", // Japan 1-1 Sweden
    options: {
      "Japan": [
        "Amna", "Alice Fontaine", "Madeleine McCartney", "Mauricio", "Ariel",
        "Amaya Rutherford", "Beka", "Ramil", "Ishaq", "Alfred Birch",
        "Malavika Nair Santhosh Kumar", "Cian", "Rory", "Hash", "Alicia",
        "Kevin Huang", "Yasmin", "Camila", "Adam Newell", "Paola Han", "Merve",
        "Rocio", "Martina", "Kathryn", "becky", "Lauren Anderson", "Rafael",
        "Fernando Paal"
      ],
      "Draw": ["Fatima Mohomud", "Nevena Arnould", "Cris", "Max", "Haimini"],
      "Sweden": [
        "Gui", "Nickel", "Ello Han", "Maria Balsini", "Ash Nicol", "amber", "Eren",
        "James Johns", "Sophie Hills", "Glynis", "Hannah", "Harriet", "Mariana",
        "Estera", "Ben Attwood"
      ]
    }
  },
  {
    id: 58,
    label: "Game 58",
    matchup: "Tunisia vs Netherlands",
    date: "Jun 25",
    winner: "Netherlands", // Tunisia 1-3 Netherlands
    options: {
      "Tunisia": ["James Johns"],
      "Draw": ["Alicia", "Rocio"],
      "Netherlands": [
        "Amna", "Alice Fontaine", "Gui", "Nickel", "Ello Han", "Madeleine McCartney",
        "Mauricio", "Ariel", "Fatima Mohomud", "Amaya Rutherford", "Beka", "Ramil",
        "Ishaq", "Alfred Birch", "Malavika Nair Santhosh Kumar", "Maria Balsini",
        "Ash Nicol", "amber", "Cian", "Nevena Arnould", "Rory", "Eren", "Hash",
        "Kevin Huang", "Yasmin", "Camila", "Cris", "Sophie Hills", "Max",
        "Adam Newell", "Paola Han", "Merve", "Glynis", "Martina", "Kathryn", "becky",
        "Lauren Anderson", "Hannah", "Harriet", "Mariana", "Rafael", "Estera",
        "Haimini", "Ben Attwood", "Fernando Paal"
      ]
    }
  },
  {
    id: 59,
    label: "Game 59",
    matchup: "Türkiye vs USA",
    date: "Jun 25",
    winner: "Türkiye", // Türkiye 3-2 USA (upset)
    options: {
      "Türkiye": [
        "Eren", "James Johns", "Adam Newell", "Merve", "Martina", "Lauren Anderson",
        "Hannah", "Harriet", "Estera", "Fernando Paal"
      ],
      "Draw": [
        "Ello Han", "Madeleine McCartney", "Amaya Rutherford", "Alfred Birch",
        "Malavika Nair Santhosh Kumar", "Maria Balsini", "Nevena Arnould", "Alicia",
        "Kevin Huang", "Mariana", "Haimini"
      ],
      "USA": [
        "Amna", "Alice Fontaine", "Gui", "Nickel", "Mauricio", "Ariel",
        "Fatima Mohomud", "Beka", "Ramil", "Ishaq", "Ash Nicol", "amber", "Cian",
        "Rory", "Hash", "Yasmin", "Camila", "Cris", "Sophie Hills", "Max",
        "Paola Han", "Glynis", "Rocio", "Kathryn", "becky", "Rafael", "Ben Attwood"
      ]
    }
  },
  {
    id: 60,
    label: "Game 60",
    matchup: "Paraguay vs Australia",
    date: "Jun 25",
    winner: "Draw", // Paraguay 0-0 Australia
    options: {
      "Paraguay": [
        "Gui", "Madeleine McCartney", "Amaya Rutherford", "Alfred Birch", "amber",
        "Rory", "Camila", "James Johns", "Cris", "Paola Han", "Merve", "Glynis",
        "Kathryn", "Lauren Anderson", "Hannah", "Harriet", "Ben Attwood"
      ],
      "Draw": [
        "Alice Fontaine", "Ariel", "Fatima Mohomud", "Beka",
        "Malavika Nair Santhosh Kumar", "Maria Balsini", "Nevena Arnould",
        "Sophie Hills", "Rocio", "Martina", "becky", "Haimini"
      ],
      "Australia": [
        "Amna", "Nickel", "Ello Han", "Mauricio", "Ramil", "Ishaq", "Ash Nicol",
        "Cian", "Eren", "Hash", "Alicia", "Kevin Huang", "Yasmin", "Max",
        "Adam Newell", "Mariana", "Rafael", "Estera", "Fernando Paal"
      ]
    }
  }
];
