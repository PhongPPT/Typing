import React, { useState } from "react";
import WordSelector from "./components/WordSelector";
import TypingArea from "./components/TypingArea";
import LanguageSelector from "./components/LanguageSelector";
import { generateWords } from "./utils/words";
import { labels } from "./utils/labels";
import "./App.css";

const App: React.FC = () => {
  const [lang, setLang] = useState<"en" | "lo">("en");
  const [words, setWords] = useState<string[]>([]);

  const handleSelectWords = (count: number) => {
    // setWords(generateWords(count));
    const newWords = generateWords(count, lang);
    setWords(newWords);
  };

  const t = labels[lang];

   return (
    <div className="container">
      <h1>{t.title}</h1>
      <LanguageSelector
        selectedLang={lang}
        onChange={setLang}
        label={t.chooseLang}
        options={{ en: t.english, lo: t.lao }}
      />
      <WordSelector onSelect={handleSelectWords} label={t.chooseWords} />
      {words.length > 0 && <TypingArea words={words} lang={lang} />}
    </div>
  );
};

export default App;

