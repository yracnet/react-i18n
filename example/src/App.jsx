import {
  withI18NTranslate,
  useI18NStateLanguage,
  useI18NTranslate,
  useI18NLanguage,
} from "../../src/main";

const LoremIpsum = () => {
  const t = useI18NTranslate();
  return (
    <div>
      <ParamCase />
      <TQuestion />
    </div>
  );
};

const Question = (props) => {
  const { t } = props;
  return (
    <div className="grid">
      <div>
        <h3>{t("g01Name")}</h3>
        <p>{t("g01Desc")}</p>
      </div>
      <div>
        <h3>{t("g02Name")}</h3>
        <p>{t("g02Desc")}</p>
      </div>
      <div>
        <h3>{t("g03Name")}</h3>
        <p>{t("g03Desc")}</p>
      </div>
      <div>
        <h3>{t("g04Name")}</h3>
        <p>{t("g04Desc")}</p>
      </div>
    </div>
  );
};
const TQuestion = withI18NTranslate(Question);

const ParamCase = () => {
  const t = useI18NTranslate();
  const lang = useI18NLanguage();
  const paramArray = ["PARAM0001", lang.name];
  const paramObject = { name: "PARAM0003", value: "PARAM0004" };
  const paramData = { data: { name: "DATA-NAME", value: 100.0 } };
  return (
    <div>
      <p>
        <b>{t("p01Array", paramArray)}</b>
        <br />
        <code>{JSON.stringify(paramArray)}</code>
      </p>
      <p>
        <b>{t("p01Object", paramObject)}</b>
        <br />
        <code>{JSON.stringify(paramObject)}</code>
      </p>
      <p>
        <b>{t("p01Data", paramData)}</b>
        <br />
        <code>{JSON.stringify(paramData)}</code>
      </p>
    </div>
  );
};

function App() {
  const t = useI18NTranslate();
  const [lang, setLang, langList] = useI18NStateLanguage();
  return (
    <div style={{ padding: "0 100px", margin: "0 auto", maxWidth: 700 }}>
      <h1>{t("title")}</h1>
      <div>
        <b> {lang.name || lang.lang} </b>
        {langList.map((it) => (
          <span key={it.lang} style={{ padding: 10 }}>
            <a href="#/" onClick={(e) => setLang(it.lang)}>
              <img
                src={`https://flagicons.lipis.dev/flags/4x3/${it.icon}.svg`}
                width="20"
                alt={it.name || it.lang}
              />
            </a>
          </span>
        ))}
      </div>
      <hr />
      <LoremIpsum />
    </div>
  );
}

export default App;
