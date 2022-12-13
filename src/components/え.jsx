import { fabric } from "fabric";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
export const え = () => {
  const setBrush = (canvas) => {
    if (canvas.freeDrawingBrush) {
      const brush = canvas.freeDrawingBrush;
      brush.color = "black";
      brush.width = 6;
    }
  };

  const setBackgroundImage = (canvas) => {
    "./canvas.png",
      (img) => {
        img.set({
          opacity: 1, // 透明度
          scaleX: canvas.width / img.width, // X軸の拡大率
          scaleY: canvas.height / img.height, // Y軸の拡大率
        });
        canvas.setBackgroundImage(img, canvas.requestRenderAll.bind(canvas)); // 画像を背景に設定
      };
  };

  // });
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      isDrawingMode: true,
      height: 200,
      width: 200,
    });
    setBrush(canvas);
    setBackgroundImage(canvas);
  }, []);

  const download = () => {
    const canvas = document.getElementById("canvas");
    const link = document.getElementById("hiddenLink");

    link.href = canvas.toDataURL("image/png");
    localStorage.setItem("え", link.href);
  };

  const clearCanvas = (e) => {
    const cvs = document.getElementById("canvas");
    const ctx = cvs.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    ctx.beginPath();

    console.log("リセット！");
  };

  return (
    <div id="items" align="center">
      <div id="canvasDiv">
        <canvas id="canvas"></canvas>
      </div>
      <div>
        <button onClick={clearCanvas}>クリア</button>
        <Link to="./お">
          <button onClick={download}>"え"の追加</button>
        </Link>
        <a id="hiddenLink" download="canvas.png">
          link
        </a>

        <div id="next" align="center">
          <Link to="./う">
            <button id="a">＜＜　う　</button>
          </Link>
          <Link to="./お">
            <button id="a">　お　＞＞</button>
          </Link>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("あ")}></img>
          <p id="galT">あ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("い")}></img>
          <p id="galT">い</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("う")}></img>
          <p id="galT">う</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("え")}></img>
          <p id="galT">え</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("お")}></img>
          <p id="galT">お</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("か")}></img>
          <p id="galT">か</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("き")}></img>
          <p id="galT">き</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("く")}></img>
          <p id="galT">く</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("け")}></img>
          <p id="galT">け</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("こ")}></img>
          <p id="galT">こ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("さ")}></img>
          <p id="galT">さ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("し")}></img>
          <p id="galT">し</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("す")}></img>
          <p id="galT">す</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("せ")}></img>
          <p id="galT">せ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("そ")}></img>
          <p id="galT">そ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("た")}></img>
          <p id="galT">た</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("ち")}></img>
          <p id="galT">ち</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("つ")}></img>
          <p id="galT">つ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("て")}></img>
          <p id="galT">て</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("と")}></img>
          <p id="galT">と</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("な")}></img>
          <p id="galT">な</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("に")}></img>
          <p id="galT">に</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("ぬ")}></img>
          <p id="galT">ぬ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("ね")}></img>
          <p id="galT">ね</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("の")}></img>
          <p id="galT">の</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("は")}></img>
          <p id="galT">は</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("ひ")}></img>
          <p id="galT">ひ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("ふ")}></img>
          <p id="galT">ふ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("へ")}></img>
          <p id="galT">へ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("ほ")}></img>
          <p id="galT">ほ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("ま")}></img>
          <p id="galT">ま</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("み")}></img>
          <p id="galT">み</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("む")}></img>
          <p id="galT">む</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("め")}></img>
          <p id="galT">め</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("も")}></img>
          <p id="galT">も</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("や")}></img>
          <p id="galT">や</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("ゆ")}></img>
          <p id="galT">ゆ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("よ")}></img>
          <p id="galT">よ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("ら")}></img>
          <p id="galT">ら</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("り")}></img>
          <p id="galT">り</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("る")}></img>
          <p id="galT">る</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("れ")}></img>
          <p id="galT">れ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("ろ")}></img>
          <p id="galT">ろ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("わ")}></img>
          <p id="galT">わ</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("を")}></img>
          <p id="galT">を</p>
        </div>
        <div id="gal">
          <img id="galI" src={localStorage.getItem("ん")}></img>
          <p id="galT">ん</p>
        </div>
      </div>
    </div>
  );
};
