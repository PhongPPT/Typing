type Props = {
  selectedLang: "en" | "lo";
  onChange: (lang: "en" | "lo") => void;
  label: string;
  options: { en: string; lo: string };
};

const LanguageSelector: React.FC<Props> = ({ selectedLang, onChange, label, options }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p>{label}</p>
      <label>
        <input
          type="radio"
          name="lang"
          value="en"
          checked={selectedLang === "en"}
          onChange={() => onChange("en")}
        />
        {options.en}
      </label>
      <label style={{ marginLeft: "1rem" }}>
        <input
          type="radio"
          name="lang"
          value="lo"
          checked={selectedLang === "lo"}
          onChange={() => onChange("lo")}
        />
        {options.lo}
      </label>
    </div>
  );
};

export default LanguageSelector;
