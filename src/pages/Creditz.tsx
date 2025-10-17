import TextPressure from "../components/TextPressure";

const creditzText = "Creditz";

const creditzExtText = "Ehre wem Ehre gebührt!";
const creditzFurtherExtText =
  "Daher an dieser Stelle ein großer Dank an all unsere Instructoren, vor allem aber";
const creditzFurtherExtTexTwo = "Renke Brixel & Stephan Ullmann";
const creditzFurtherExtTexThree = "für den absolut lehrreichen und";
const creditzFurtherExtTexThreeTwo = "leidenschaftlichen Support.";
const creditzFurtherExtTexFourIGuess = "u guys pushed us :3";
const furtherCredz = {
  renke: "Renke - visit renke-brixel.netlify.app",
  stephan: "Stephan - visit stephanullmann.dev",
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
      <div className="text-extralight text-xs text-secondary tracking-widest p-4">
        <ul>
          <li>{furtherCredz.renke}</li>
          <li>{furtherCredz.stephan}</li>
          <li>... but not right now, that's why they are not linked :3</li>
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
