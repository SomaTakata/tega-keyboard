import { fabric } from "fabric";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
let canvas = undefined;

export const Home = () => {
  const [characterIndex, setCharacterIndex] = useState(0);
  const canvasRef = useRef(null);
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

  const setBrush = (canvas) => {
    if (canvas.freeDrawingBrush) {
      const brush = canvas.freeDrawingBrush;
      brush.color = "black";
      brush.width = 6;
    }
  };

  const setBackgroundImage = (canvas) => {
    fabric.Image.fromURL(
      "https://th.bing.com/th/id/OIP.aiaDMGnK4awMT5CO3azn3AAAAA?pid=ImgDet&rs=1",
      (img) => {
        img.set({
          opacity: 30, // 透明度
          scaleX: canvas.width / img.width, // X軸の拡大率
          scaleY: canvas.height / img.height, // Y軸の拡大率
        });
        canvas.setBackgroundImage(img, canvas.requestRenderAll.bind(canvas)); // 画像を背景に設定
      }
    );
  };

  // });
  useEffect(() => {
    canvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
      height: 200,
      width: 200,
    });
    setBrush(canvas);
    setBackgroundImage(canvas);

    return () => {
      if (canvas) {
        canvas.dispose();
        canvas = undefined;
      }
    };
  }, []);

  const download = (e) => {
    const link = document.getElementById("hiddenLink");

    link.href = canvasRef.current.toDataURL("image/png");
    localStorage.setItem(characters[characterIndex].character, link.href);
    if (characters[characterIndex].character === "ぼ") {
      setCharacterIndex((prev) => 0);
      canvas.clear();
    } else {
      setCharacterIndex((prev) => prev + 1);
      canvas.clear();
    }
  };

  const clearCanvas = (e) => {
    canvas.clear();
  };

  const NextButtons = () => {
    if (characters[characterIndex].character === "あ") {
      return (
        <div className="next" align="center">
          <button
            className="a"
            onClick={() => {
              setCharacterIndex((prev) => prev + 1);
            }}
          >
            {characters[characterIndex + 1].character}　＞＞
          </button>
        </div>
      );
    } else if (characters[characterIndex].character === "ぼ") {
      return (
        <div className="next" align="center">
          <button
            className="a"
            onClick={() => {
              setCharacterIndex((prev) => prev - 1);
            }}
          >
            ＜＜　{characters[characterIndex - 1].character}
          </button>
        </div>
      );
    } else {
      return (
        <div className="next" align="center">
          <button
            className="a"
            onClick={() => {
              setCharacterIndex((prev) => prev - 1);
            }}
          >
            ＜＜　{characters[characterIndex - 1].character}
          </button>
          <button
            className="a"
            onClick={() => {
              setCharacterIndex((prev) => prev + 1);
            }}
          >
            {characters[characterIndex + 1].character}　＞＞
          </button>
        </div>
      );
    }
  };
  return (
    <div className="items" align="center">
      <div className="canvasDiv">
        <canvas ref={canvasRef}></canvas>
      </div>
      <div>
        <button className="a" onClick={clearCanvas}>
          クリア
        </button>
        <button className="a" onClick={download}>
          "{characters[characterIndex].character}"の追加
        </button>
        <a id="hiddenLink" className="hiddenLink" download="canvas.png">
          link
        </a>
      </div>
      <ul className="horizontal_scroll">
        {characters.map((props) => {
          return (
            <div
              className="gal"
              key={props.key}
              onClick={() => {
                setCharacterIndex((prev) => props.key);
              }}
            >
              <img
                className="galI"
                src={localStorage.getItem(props.character)}
              ></img>
              <p className="galT">{props.character}</p>
            </div>
          );
        })}
      </ul>

      <NextButtons />
      <div>
        <Link to="/page1" className="link">
          <button className="nextKeyboard">キーボードへ</button>
        </Link>
      </div>
    </div>
  );
};
