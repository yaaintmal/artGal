import TextPressure from "./TextPressure";

const creditzText = "Creditz";

const creditzExtText = "Ehre wem Ehre gebührt!";
const creditzFurtherExtText =
  "Deshalb an dieser Stelle ein großer Dank an all unsere Instructoren, vor allem aber";
const creditzFurtherExtTexTwo = "Renke Brixel & Stephan Ullmann";
const creditzFurtherExtTexThree =
  "für den absolut verstehenswerten und leidenschaftlichen Support.";
const creditzFurtherExtTexFourIGuess = "u guys pushed us :3";
const furtherCredz = {
  renke: "Renke - visit renke-brixel.netlify.app",
  stephan: "Stephan - visit stephanullmann.dev",
  wbs: "WBS Coding School - visit wbscodingschool.com",
  artic: "the Art Institute of Chicago - visit artic.edu",
  coder: "the coder himself 👋🏽",
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
          textColor="#242424"
          strokeColor="#222222"
          minFontSize={36}
        />
        <div className="h-10"></div>
        <TextPressure
          text={creditzExtText}
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#242424"
          strokeColor="#222222"
          minFontSize={36}
        />
        <TextPressure
          text={creditzFurtherExtText}
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#242424"
          strokeColor="#222222"
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
          textColor="#242424"
          strokeColor="#222222"
          minFontSize={36}
        />
        <TextPressure
          text={creditzFurtherExtTexThree}
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#242424"
          strokeColor="#222222"
          minFontSize={36}
        />
        <TextPressure
          text={creditzFurtherExtTexFourIGuess}
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#242424"
          strokeColor="#222222"
          minFontSize={36}
        />
      </div>

      <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-warning to-accent p-4 mt-42">
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
        (in unsorted order):
        <div className="text-extralight text-xs text-secondary tracking-widest p-4">
          <ul>
            <li>{furtherCredz.artic}</li>
            <li>{furtherCredz.wbs}</li>
            <li>{furtherCredz.coder}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
art - gallery;
