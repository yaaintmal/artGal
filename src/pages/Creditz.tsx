import TextPressure from "../components/TextPressure";

const howTheyWere = [
  "movierenden",
  "leidenschaftlichen",
  "unterstützenden",
  "lustigen",
  "lehrreichen",
  "professionellen",
  "interessanten",
  "engagierten",
  "hilfsbereiten",
  "geduldigen",
  "verständnisvollen",
  "inspirierenden",
  "wertschätzenden",
  "ermutigenden",
  "souveränen",
  "zuverlässigen",
  "kompetenten",
  "herzlichen",
  "vorausschauenden",
  "klaren",
  "strukturierten",
  "menschlichen",
  "motivierenden",
  "positiven",
  "emphatischen",
  "aufmerksamen",
  "gewissenhaften",
  "zielstrebigen",
  "einfühlsamen",
  "lösungsortientierten",
  "konstruktiven",
  "authentischen",
  "präzisen",
  "ideenreichen",
  "respektvollen",
  "dynamischen",
  "verständlichen",
  "freundlichen",
  "begleitenden",
  "wegweisenden",
  "visionären",
  "fairnessbetonten",
  "begeisternden",
  "bestärkenden",
  "vorbildlichen",
  "ruhigen",
  "ausgeglichenen",
  "zugewandten",
  "individuellen",
  "tiefgründigen",
  "nachhaltigen",
  "sorgfältigen",
  "praktikablen",
  "vertrauensvollen",
];

// selecting 2 unique random words
const getRandomUniqueWords = (arr: string[]) => {
  const randomIndex1 = Math.floor(Math.random() * arr.length);
  let randomIndex2;

  do {
    // keep generating randomIndex2 until it differs randomIndex1
    randomIndex2 = Math.floor(Math.random() * arr.length);
  } while (randomIndex1 === randomIndex2);

  return [arr[randomIndex1], arr[randomIndex2]];
};

const [randomWord1, randomWord2] = getRandomUniqueWords(howTheyWere);
const creditzText = "Creditz";
const creditzExtText = "Ehre wem Ehre gebührt!";
const creditzFurtherExtText =
  "Daher an dieser Stelle ein großer Dank an all unsere Instructoren, vor allem aber";
const creditzFurtherExtTexTwo = "Renke Brixel & Stephan Ullmann";
const creditzFurtherExtTexThree = `für den stets ${randomWord1} und`;
const creditzFurtherExtTexThreeTwo = `${randomWord2} Support.`;
const creditzFurtherExtTexFourIGuess = "u guys pushed us :3";
const furtherCredz = {
  renke: {
    text: "Renke's Webpage",
    link: "https://renke-brixel.netlify.app",
  },
  stephan: {
    text: "Stephan's Webpage",
    link: "https://stephanullmann.dev",
  },
  wbs: "WBS Coding School - visit wbscodingschool.com",
  artic: "the Art Institute of Chicago - visit artic.edu",
  coder: "the coder himself 👋🏽 - github.com/yaaintmal",
};

export default function Creditz() {
  return (
    <div className="mb-23">
      <div className="p-4">
        <TextPressure
          text={creditzText}
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor=""
          strokeColor=""
          minFontSize={36}
          className="text-primary/80"
        />
        <div className="h-4"></div>
        <TextPressure
          text={creditzExtText}
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor=""
          strokeColor=""
          minFontSize={36}
        />
        <div className="h-4"></div>
        <TextPressure
          text={creditzFurtherExtText}
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor=""
          strokeColor=""
          minFontSize={36}
        />
        <TextPressure
          text={creditzFurtherExtTexTwo}
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor=""
          strokeColor=""
          minFontSize={36}
          className="text-primary/60"
        />
        <TextPressure
          text={creditzFurtherExtTexThree}
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor=""
          strokeColor=""
          minFontSize={36}
        />
        <TextPressure
          text={creditzFurtherExtTexThreeTwo}
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor=""
          strokeColor=""
          minFontSize={36}
        />
        <div className="h-4"></div>
        <TextPressure
          text={creditzFurtherExtTexFourIGuess}
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor=""
          strokeColor=""
          minFontSize={36}
          className="text-primary/40"
        />
      </div>

      <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-warning to-accent p-4 mt-12">
        also visit:
      </div>
      <div className="text-extralight text-xs text-secondary tracking-widest">
        <ul>
          <li>
            <button className="btn btn-link">
              <a
                href={furtherCredz.renke.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cs text-amber-400 no-underline"
              >
                <p>{furtherCredz.renke.text}</p>
              </a>
            </button>
          </li>
          <li>
            <button className="btn btn-link">
              <a
                href={furtherCredz.stephan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cs text-amber-400 no-underline"
              >
                <p>{furtherCredz.stephan.text}</p>
              </a>
            </button>
          </li>
        </ul>
      </div>
      <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-warning to-accent p-4">
        further creditz
      </div>
      <div className="text-extralight text-xs text-secondary tracking-widest p-4">
        <ul>
          <li>{furtherCredz.artic}</li>
          <li>{furtherCredz.wbs}</li>
          <li>{furtherCredz.coder}</li>
        </ul>
        <div className="text-extralight text-xs text-secondary tracking-widest p-4">
          (all in unsorted order :3)
        </div>
      </div>
    </div>
  );
}
