import { fabric } from "fabric";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
export const お = () => {
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
    localStorage.setItem("お", link.href);
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
        <Link to="./">
          <button onClick={download}>"お"の追加</button>
        </Link>
        <a id="hiddenLink" download="canvas.png">
          link
        </a>

        <ul class="horizontal_scroll">
          <div id="gal">
            <Link to="./">
              <img id="galI" src={localStorage.getItem("あ")}></img>
            </Link>
            <p id="galT">あ</p>
          </div>
          <div id="gal">
            <Link to="./い">
              <img id="galI" src={localStorage.getItem("い")}></img>
            </Link>
            <p id="galT">い</p>
          </div>
          <div id="gal">
            <Link to="./う">
              <img id="galI" src={localStorage.getItem("う")}></img>
            </Link>
            <p id="galT">う</p>
          </div>
          <div id="gal">
            <Link to="./え">
              <img id="galI" src={localStorage.getItem("え")}></img>
            </Link>
            <p id="galT">え</p>
          </div>
          <div id="gal">
            <Link to="./お">
              <img id="galI" src={localStorage.getItem("お")}></img>
            </Link>
            <p id="galT">お</p>
          </div>
          <div id="gal">
            <Link to="./か">
              <img id="galI" src={localStorage.getItem("か")}></img>
            </Link>
            <p id="galT">か</p>
          </div>
          <div id="gal">
            <Link to="./き">
              <img id="galI" src={localStorage.getItem("き")}></img>
            </Link>
            <p id="galT">き</p>
          </div>
          <div id="gal">
            <Link to="./く">
              <img id="galI" src={localStorage.getItem("く")}></img>
            </Link>
            <p id="galT">く</p>
          </div>
          <div id="gal">
            <Link to="./け">
              <img id="galI" src={localStorage.getItem("け")}></img>
            </Link>
            <p id="galT">け</p>
          </div>
          <div id="gal">
            <Link to="./こ">
              <img id="galI" src={localStorage.getItem("こ")}></img>
            </Link>
            <p id="galT">こ</p>
          </div>
          <div id="gal">
            <Link to="./さ">
              <img id="galI" src={localStorage.getItem("さ")}></img>
            </Link>
            <p id="galT">さ</p>
          </div>
          <div id="gal">
            <Link to="./し">
              <img id="galI" src={localStorage.getItem("し")}></img>
            </Link>
            <p id="galT">し</p>
          </div>
          <div id="gal">
            <Link to="./す">
              <img id="galI" src={localStorage.getItem("す")}></img>
            </Link>
            <p id="galT">す</p>
          </div>
          <div id="gal">
            <Link to="./せ">
              <img id="galI" src={localStorage.getItem("せ")}></img>
            </Link>
            <p id="galT">せ</p>
          </div>
          <div id="gal">
            <Link to="./そ">
              <img id="galI" src={localStorage.getItem("そ")}></img>
            </Link>
            <p id="galT">そ</p>
          </div>
          <div id="gal">
            <Link to="./た">
              <img id="galI" src={localStorage.getItem("た")}></img>
            </Link>
            <p id="galT">た</p>
          </div>
          <div id="gal">
            <Link to="./ち">
              <img id="galI" src={localStorage.getItem("ち")}></img>
            </Link>
            <p id="galT">ち</p>
          </div>
          <div id="gal">
            <Link to="./つ">
              <img id="galI" src={localStorage.getItem("つ")}></img>
            </Link>
            <p id="galT">つ</p>
          </div>
          <div id="gal">
            <Link to="./て">
              <img id="galI" src={localStorage.getItem("て")}></img>
            </Link>
            <p id="galT">て</p>
          </div>
          <div id="gal">
            <Link to="./と">
              <img id="galI" src={localStorage.getItem("と")}></img>
            </Link>
            <p id="galT">と</p>
          </div>
          <div id="gal">
            <Link to="./な">
              <img id="galI" src={localStorage.getItem("な")}></img>
            </Link>
            <p id="galT">な</p>
          </div>
          <div id="gal">
            <Link to="./に">
              <img id="galI" src={localStorage.getItem("に")}></img>
            </Link>
            <p id="galT">に</p>
          </div>
          <div id="gal">
            <Link to="./ぬ">
              <img id="galI" src={localStorage.getItem("ぬ")}></img>
            </Link>
            <p id="galT">ぬ</p>
          </div>
          <div id="gal">
            <Link to="./ね">
              <img id="galI" src={localStorage.getItem("ね")}></img>
            </Link>
            <p id="galT">ね</p>
          </div>
          <div id="gal">
            <Link to="./の">
              <img id="galI" src={localStorage.getItem("の")}></img>
            </Link>
            <p id="galT">の</p>
          </div>
          <div id="gal">
            <Link to="./は">
              <img id="galI" src={localStorage.getItem("は")}></img>
            </Link>
            <p id="galT">は</p>
          </div>
          <div id="gal">
            <Link to="./ひ">
              <img id="galI" src={localStorage.getItem("ひ")}></img>
            </Link>
            <p id="galT">ひ</p>
          </div>
          <div id="gal">
            <Link to="./ふ">
              <img id="galI" src={localStorage.getItem("ふ")}></img>
            </Link>
            <p id="galT">ふ</p>
          </div>
          <div id="gal">
            <Link to="./へ">
              <img id="galI" src={localStorage.getItem("へ")}></img>
            </Link>
            <p id="galT">へ</p>
          </div>
          <div id="gal">
            <Link to="./ほ">
              <img id="galI" src={localStorage.getItem("ほ")}></img>
            </Link>
            <p id="galT">ほ</p>
          </div>
          <div id="gal">
            <Link to="./ま">
              <img id="galI" src={localStorage.getItem("ま")}></img>
            </Link>
            <p id="galT">ま</p>
          </div>
          <div id="gal">
            <Link to="./み">
              <img id="galI" src={localStorage.getItem("み")}></img>
            </Link>
            <p id="galT">み</p>
          </div>
          <div id="gal">
            <Link to="./む">
              <img id="galI" src={localStorage.getItem("む")}></img>
            </Link>
            <p id="galT">む</p>
          </div>
          <div id="gal">
            <Link to="./め">
              <img id="galI" src={localStorage.getItem("め")}></img>
            </Link>
            <p id="galT">め</p>
          </div>
          <div id="gal">
            <Link to="./も">
              <img id="galI" src={localStorage.getItem("も")}></img>
            </Link>
            <p id="galT">も</p>
          </div>
          <div id="gal">
            <Link to="./や">
              <img id="galI" src={localStorage.getItem("や")}></img>
            </Link>
            <p id="galT">や</p>
          </div>
          <div id="gal">
            <Link to="./ゆ">
              <img id="galI" src={localStorage.getItem("ゆ")}></img>
            </Link>
            <p id="galT">ゆ</p>
          </div>
          <div id="gal">
            <Link to="./よ">
              <img id="galI" src={localStorage.getItem("よ")}></img>
            </Link>
            <p id="galT">よ</p>
          </div>
          <div id="gal">
            <Link to="./ら">
              <img id="galI" src={localStorage.getItem("ら")}></img>
            </Link>
            <p id="galT">ら</p>
          </div>
          <div id="gal">
            <Link to="./り">
              <img id="galI" src={localStorage.getItem("り")}></img>
            </Link>
            <p id="galT">り</p>
          </div>
          <div id="gal">
            <Link to="./る">
              <img id="galI" src={localStorage.getItem("る")}></img>
            </Link>
            <p id="galT">る</p>
          </div>
          <div id="gal">
            <Link to="./れ">
              <img id="galI" src={localStorage.getItem("れ")}></img>
            </Link>
            <p id="galT">れ</p>
          </div>
          <div id="gal">
            <Link to="./ろ">
              <img id="galI" src={localStorage.getItem("ろ")}></img>
            </Link>
            <p id="galT">ろ</p>
          </div>
          <div id="gal">
            <Link to="./わ">
              <img id="galI" src={localStorage.getItem("わ")}></img>
            </Link>
            <p id="galT">わ</p>
          </div>
          <div id="gal">
            <Link to="./を">
              <img id="galI" src={localStorage.getItem("を")}></img>
            </Link>
            <p id="galT">を</p>
          </div>
          <div id="gal">
            <Link to="./ん">
              <img id="galI" src={localStorage.getItem("ん")}></img>
            </Link>
            <p id="galT">ん</p>
          </div>
        </ul>
        <div id="next" align="center">
          <Link to="./え">
            <button id="a">＜＜　え　</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
