/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"],
    darkMode: 'class',
  // content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        '1360': '1360px',
      },
       colors: {
        // part1
        boyred: '#6A6352', 
        vanilla: '#D5CCAB', 
        grullo: '#A3A289',
        green: '#878568',
        olive: '#505143',
        // part2
        chinese: '#OE141C',
        policeblue: '#314B6E',
        rackley: '#607EA2',
        weldonblue: '#8197AC',
        silverpink: '#BDB3A3',
      },
      fontFamily: {
        'instrument': ['"Instrument Sans"'],
        'plus-jakarta': ['"Plus Jakarta Sans"'], 
      },
      rotate: {
        '-180': '-180deg',
      }
    },
  },
  plugins: [],
}

