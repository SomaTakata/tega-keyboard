import { Link } from "react-router-dom";
import "../App.css";
import { FiDelete } from "react-icons/fi";
import { useState } from "react";
import html2canvas from "html2canvas";

export const Keyboard = () => {
  const [characterIndex, setCharacterIndex] = useState(0);
  const characters = [
    { key: 0, character: "あ" },
    { key: 1, character: "い" },
    { key: 2, character: "う" },
    { key: 3, character: "え" },
    { key: 4, character: "お" },
    { key: 5, character: "か" },
    { key: 6, character: "き" },
    { key: 7, character: "く" },
    { key: 8, character: "け" },
    { key: 9, character: "こ" },
    { key: 10, character: "さ" },
    { key: 11, character: "し" },
    { key: 12, character: "す" },
    { key: 13, character: "せ" },
    { key: 14, character: "そ" },
    { key: 15, character: "た" },
    { key: 16, character: "ち" },
    { key: 17, character: "つ" },
    { key: 18, character: "て" },
    { key: 19, character: "と" },
    { key: 20, character: "な" },
    { key: 21, character: "に" },
    { key: 22, character: "ぬ" },
    { key: 23, character: "ね" },
    { key: 24, character: "の" },
    { key: 25, character: "は" },
    { key: 26, character: "ひ" },
    { key: 27, character: "ふ" },
    { key: 28, character: "へ" },
    { key: 29, character: "ほ" },
    { key: 30, character: "ま" },
    { key: 31, character: "み" },
    { key: 32, character: "む" },
    { key: 33, character: "め" },
    { key: 34, character: "も" },
    { key: 35, character: "や" },
    { key: 36, character: "ゆ" },
    { key: 37, character: "よ" },
    { key: 38, character: "ら" },
    { key: 39, character: "り" },
    { key: 40, character: "る" },
    { key: 41, character: "れ" },
    { key: 42, character: "ろ" },
    { key: 43, character: "わ" },
    { key: 44, character: "を" },
    { key: 45, character: "ん" },
    { key: 46, character: "が" },
    { key: 47, character: "ぎ" },
    { key: 48, character: "ぐ" },
    { key: 49, character: "げ" },
    { key: 50, character: "ご" },
    { key: 51, character: "ざ" },
    { key: 52, character: "じ" },
    { key: 53, character: "ず" },
    { key: 54, character: "ぜ" },
    { key: 55, character: "ぞ" },
    { key: 56, character: "だ" },
    { key: 57, character: "ぢ" },
    { key: 58, character: "づ" },
    { key: 59, character: "で" },
    { key: 60, character: "ど" },
    { key: 61, character: "ば" },
    { key: 62, character: "び" },
    { key: 63, character: "ぶ" },
    { key: 64, character: "べ" },
    { key: 65, character: "ぼ" },
  ];
  const [inputImage, setInputImage] = useState([]);
  const download = (e) => {
    html2canvas(document.querySelector("#images")).then((canvas) => {
      const link = document.getElementById("hiddenLink");

      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <div className="items" align="center">
      <a id="hiddenLink" className="hiddenLink" download="canvas.png">
        link
      </a>
      <div className="imageFolder">
        <div className="images">
          {inputImage.length === 0 ? (
            <div className="inputImages"></div>
          ) : (
            inputImage.map((image) => (
              <img className="inputImages" src={image} alt="" />
            ))
          )}
        </div>
      </div>
      <div className="flexContents">
        {characterIndex === 0 ? (
          <div className="changeKeyboard"></div>
        ) : (
          <div
            className="changeKeyboard"
            onClick={() => setCharacterIndex((prev) => prev - 5)}
          >
            ←
          </div>
        )}
        {/* {(() => {
          if (characterIndex === 0) {
            return <div className="changeKeyboard"></div>;
          } else {
            return (
              <div
                className="changeKeyboard"
                onClick={() => setCharacterIndex((prev) => prev - 5)}
              >
                ←
              </div>
            );
          }
        })()} */}
        <div className="keyboard">
          {(() => {
            const items = [];

            for (let i2 = 0; i2 < 5; i2++) {
              items.push(
                <img
                  className="keyboardI"
                  src={localStorage.getItem(
                    characters[characterIndex + i2].character
                  )}
                  onClick={() => {
                    setInputImage((prev) => [
                      ...prev,
                      localStorage.getItem(
                        characters[characterIndex + i2].character
                      ),
                    ]);
                  }}
                />
              );
            }
            return <>{items}</>;
          })()}
        </div>
        <div className="keyboard">
          {(() => {
            if (characterIndex === 30) {
              const items = [];
              for (let i2 = 0; i2 < 3; i2++) {
                items.push(
                  <img
                    className="keyboardI"
                    src={localStorage.getItem(
                      characters[characterIndex + i2 + 5].character
                    )}
                    onClick={() => {
                      setInputImage((prev) => [
                        ...prev,
                        localStorage.getItem(
                          characters[characterIndex + i2 + 5].character
                        ),
                      ]);
                    }}
                  />
                );
              }
              return <>{items}</>;
            } else {
              const items = [];
              for (let i2 = 0; i2 < 5; i2++) {
                items.push(
                  <img
                    className="keyboardI"
                    src={localStorage.getItem(
                      characters[characterIndex + i2 + 5].character
                    )}
                    onClick={() => {
                      setInputImage((prev) => [
                        ...prev,
                        localStorage.getItem(
                          characters[characterIndex + i2 + 5].character
                        ),
                      ]);
                    }}
                  />
                );
              }
              return <>{items}</>;
            }
          })()}
        </div>
        <div className="keyboard">
          {(() => {
            if (characterIndex === 25) {
              const items = [];
              for (let i2 = 0; i2 < 3; i2++) {
                items.push(
                  <img
                    className="keyboardI"
                    src={localStorage.getItem(
                      characters[characterIndex + i2 + 10].character
                    )}
                    onClick={() => {
                      setInputImage((prev) => [
                        ...prev,
                        localStorage.getItem(
                          characters[characterIndex + i2 + 10].character
                        ),
                      ]);
                    }}
                  />
                );
              }
              return <>{items}</>;
            } else if (characterIndex === 30) {
              const items = [];
              for (let i2 = 0; i2 < 5; i2++) {
                items.push(
                  <img
                    className="keyboardI"
                    src={localStorage.getItem(
                      characters[characterIndex + i2 + 8].character
                    )}
                    onClick={() => {
                      setInputImage((prev) => [
                        ...prev,
                        localStorage.getItem(
                          characters[characterIndex + i2 + 8].character
                        ),
                      ]);
                    }}
                  />
                );
              }
              return <>{items}</>;
            } else {
              const items = [];
              for (let i2 = 0; i2 < 5; i2++) {
                items.push(
                  <img
                    className="keyboardI"
                    src={localStorage.getItem(
                      characters[characterIndex + i2 + 10].character
                    )}
                    onClick={() => {
                      setInputImage((prev) => [
                        ...prev,
                        localStorage.getItem(
                          characters[characterIndex + i2 + 10].character
                        ),
                      ]);
                    }}
                  />
                );
              }
              return <>{items}</>;
            }
          })()}
        </div>
        <div className="keyboard">
          {(() => {
            if (characterIndex === 20) {
              const items = [];
              for (let i2 = 0; i2 < 3; i2++) {
                items.push(
                  <img
                    className="keyboardI"
                    src={localStorage.getItem(
                      characters[characterIndex + i2 + 15].character
                    )}
                    onClick={() => {
                      setInputImage((prev) => [
                        ...prev,
                        localStorage.getItem(
                          characters[characterIndex + i2 + 15].character
                        ),
                      ]);
                    }}
                  />
                );
              }
              return <>{items}</>;
            } else if (characterIndex === 25) {
              const items = [];
              for (let i2 = 0; i2 < 5; i2++) {
                items.push(
                  <img
                    className="keyboardI"
                    src={localStorage.getItem(
                      characters[characterIndex + i2 + 13].character
                    )}
                    onClick={() => {
                      setInputImage((prev) => [
                        ...prev,
                        localStorage.getItem(
                          characters[characterIndex + i2 + 13].character
                        ),
                      ]);
                    }}
                  />
                );
              }
              return <>{items}</>;
            } else if (characterIndex === 30) {
              const items = [];
              for (let i2 = 0; i2 < 3; i2++) {
                items.push(
                  <img
                    className="keyboardI"
                    src={localStorage.getItem(
                      characters[characterIndex + i2 + 13].character
                    )}
                    onClick={() => {
                      setInputImage((prev) => [
                        ...prev,
                        localStorage.getItem(
                          characters[characterIndex + i2 + 13].character
                        ),
                      ]);
                    }}
                  />
                );
              }
              return <>{items}</>;
            } else {
              const items = [];
              for (let i2 = 0; i2 < 5; i2++) {
                items.push(
                  <img
                    className="keyboardI"
                    src={localStorage.getItem(
                      characters[characterIndex + i2 + 15].character
                    )}
                    onClick={() => {
                      setInputImage((prev) => [
                        ...prev,
                        localStorage.getItem(
                          characters[characterIndex + i2 + 15].character
                        ),
                      ]);
                    }}
                  />
                );
              }
              return <>{items}</>;
            }
          })()}
        </div>
        {(() => {
          if (characterIndex === 30) {
            return <div className="changeKeyboard"></div>;
          } else {
            return (
              <div
                className="changeKeyboard"
                onClick={() => setCharacterIndex((prev) => prev + 5)}
              >
                →
              </div>
            );
          }
        })()}
      </div>
      <button className="imageClear" onClick={() => setInputImage([])}>
        クリア
      </button>
      <button className="imageSave" onClick={download}>
        保存
      </button>
      <Link to="/" className="link">
        <div className="header">
          <button className="toHome">入力へ</button>
        </div>
      </Link>
    </div>
  );
};
