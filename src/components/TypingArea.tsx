import React, { useEffect, useRef, useState } from "react";

type Props = {
    words: string[];
    lang: "en" | "lo";
};

const TypingArea: React.FC<Props> = ({ words, lang }) => {
    const [userInput, setUserInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [errors, setErrors] = useState(0);
    const [finished, setFinished] = useState(false);
    const fullText = words.join(" ");

    useEffect(() => {
        setUserInput("");
        setErrors(0);
        setFinished(false);
        inputRef.current?.focus();
    }, [words, lang]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserInput(value);

        if (value.length >= fullText.length) {
            const errorCount = countErrors(fullText, value);
            setErrors(errorCount);
            setFinished(true);
        }
    };

    const countErrors = (target: string, typed: string): number => {
        let count = 0;
        for (let i = 0; i < target.length; i++) {
            if (typed[i] && typed[i] !== target[i]) {
                count++;
            }
        }
        return count;
    };

    const renderCharacters = () => {
        return fullText.split("").map((char, index) => {
            let className = "";
            if (index < userInput.length) {
                className = char === userInput[index] ? "" : "text-red";
            } else if (index === userInput.length) {
                className = "text-cursor";
            }

            return (
                <span key={index} className={className}>
                    {char}
                </span>
            );
        });
    };

    return (
        <div>
            <div className="typing-box" onClick={() => inputRef.current?.focus()}>
                {renderCharacters()}
            </div>

            <input
                ref={inputRef}
                type="text"
                inputMode="text"
                lang={lang}
                value={userInput}
                onChange={handleChange}
                style={{ position: "absolute", left: "-9999px" }}
                autoComplete="off"
                spellCheck={false}
            />

            {finished && (
                <div className="summary">
                    <p>
                        Finished typing! <br />
                        ❌ Errors: <strong>{errors}</strong> / {fullText.length}
                    </p>
                </div>
            )}
        </div>
    );
};

export default TypingArea;
