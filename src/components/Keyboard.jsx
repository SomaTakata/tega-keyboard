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
  const [hiraganaIndex, setHiraganaIndex] = useState(1);
  const download = (e) => {
    html2canvas(document.querySelector("#images")).then((canvas) => {
      const link = document.getElementById("hiddenLink");

      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  const hiraganaBox = (i) => {
    if (i < 8) {
      const hiragana = characters.filter((props) => {
        return (props.key >= 5 * (i - 1)) & (props.key < 5 * i);
      });
      return hiragana.map((props) => {
        return (
          <button
            className="hiraganaButton"
            onClick={() => {
              setInputImage((prev) => [
                ...prev,
                localStorage.getItem(characters[props.key].character),
              ]);
            }}
          >
            {props.character}
          </button>
        );
      });
    } else if (i === 8) {
      const hiragana = characters.filter((props) => {
        return (props.key >= 5 * (i - 1)) & (props.key < 5 * i - 2);
      });
      return hiragana.map((props) => {
        return (
          <button
            className="hiraganaButton"
            onClick={() => {
              setInputImage((prev) => [
                ...prev,
                localStorage.getItem(characters[props.key].character),
              ]);
            }}
          >
            {props.character}
          </button>
        );
      });
    } else if (i === 9) {
      const hiragana = characters.filter((props) => {
        return (props.key >= 5 * (i - 1) - 2) & (props.key < 5 * (i - 1) + 3);
      });
      return hiragana.map((props) => {
        return (
          <button
            className="hiraganaButton"
            onClick={() => {
              setInputImage((prev) => [
                ...prev,
                localStorage.getItem(characters[props.key].character),
              ]);
            }}
          >
            {props.character}
          </button>
        );
      });
    } else if (i === 10) {
      const hiragana = characters.filter((props) => {
        return (props.key >= 5 * (i - 1) - 2) & (props.key < 5 * (i - 1) + 1);
      });
      return hiragana.map((props) => {
        return (
          <button
            className="hiraganaButton"
            onClick={() => {
              setInputImage((prev) => [
                ...prev,
                localStorage.getItem(characters[props.key].character),
              ]);
            }}
          >
            {props.character}
          </button>
        );
      });
    }
  };

  const hiraganaList = () => {
    const hiragana = characters.filter((props) => {
      return (
        props.key === 0 ||
        props.key === 5 ||
        props.key === 10 ||
        props.key === 15 ||
        props.key === 20 ||
        props.key === 25 ||
        props.key === 30 ||
        props.key === 35 ||
        props.key === 38 ||
        props.key === 43
      );
    });
    return hiragana.map((props, index) => {
      return (
        <button
          className="hiraganaButtonList"
          onClick={() => {
            setHiraganaIndex(index + 1);
          }}
        >
          {props.character}
        </button>
      );
    });
  };

  return (
    <div className="items" align="center">
      <a id="hiddenLink" className="hiddenLink" download="canvas.png">
        link
      </a>
      <div className="imageFolder">
        <div className="images">
          <div id="images">
            {inputImage.length === 0 ? (
              <div className="inputImagesBLank"></div>
            ) : (
              inputImage.map((image) => (
                <img className="inputImages" src={image} alt="" />
              ))
            )}
          </div>
        </div>
      </div>

      <div className="flexContents">
        <div className="columItem">
          {hiraganaBox(hiraganaIndex)}
          <div>{hiraganaList()}</div>
        </div>
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
