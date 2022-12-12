import { fabric } from "fabric";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./App.css";
export const あ = () => {
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
    localStorage.setItem("あ", link.href);
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
        <Link to="./い">
          <button onClick={download}>"あ"の追加</button>
        </Link>
        <a id="hiddenLink" download="canvas.png">
          link
        </a>
        <div id="next" align="center">
          <Link to="./い">
            <button id="a">　い　 ＞＞</button>
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
      </div>
    </div>
  );
};
