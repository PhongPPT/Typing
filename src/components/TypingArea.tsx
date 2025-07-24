import React, { useEffect, useRef, useState } from "react";

type Props = {
    words: string[];
    lang: "en" | "lo";
};

const TypingArea: React.FC<Props> = ({ words, lang }) => {
    const [userInput, setUserInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const fullText = words.join(" ");

    useEffect(() => {
        setUserInput("");
        inputRef.current?.focus();
    }, [words]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
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
            <div
                className="typing-box"
                onClick={() => inputRef.current?.focus()}
            >
                {renderCharacters()}
            </div>
            <input
                ref={inputRef}
                type="text"
                inputMode="text"
                lang={lang === "lo" ? "lo" : "en"}
                value={userInput}
                onChange={handleChange}
                style={{
                    position: "absolute",
                    left: "-9999px",
                }}
                placeholder={lang === "lo" ? "ພິມພາສາລາວ..." : "Type in English..."}
            />
        </div>
    );
};

export default TypingArea;
