import "./App.css";
import { fabric } from "fabric";
import { useEffect } from "react";

const CANVAS_ID = "canvas";

const App = () => {
  const setBrush = (canvas) => {
    if (canvas.freeDrawingBrush) {
      const brush = canvas.freeDrawingBrush;
      brush.color = "white"; // ブラシの色指定(#FFFFFFやrgb(255,255,255)等の書き方でも可)
      if (brush.getPatternSrc) {
        brush.source = brush.getPatternSrc.call(brush); // 設定を反映
      }
      brush.width = 10; // 線の太さを指定
      brush.shadow = new fabric.Shadow({
        // 線に影をつける
        blur: 3,
        offsetX: 0,
        offsetY: 0,
        affectStroke: true,
        color: "white",
      });
    }
  };
  const setBackgroundImage = (canvas) => {
    fabric.Image.fromURL(
      "https://th.bing.com/th/id/OIP.AdXOJoJXdFsXRsuHhcXD8wHaFL?pid=ImgDet&rs=1",
      (img) => {
        img.set({
          opacity: 1, // 透明度
          scaleX: canvas.width / img.width, // X軸の拡大率
          scaleY: canvas.height / img.height, // Y軸の拡大率
        });
        canvas.setBackgroundImage(img, canvas.requestRenderAll.bind(canvas)); // 画像を背景に設定
      }
    );
  };
  // document.getElementById("btn-save").addEventListener("click", () => {
  //   const link = document.getElementById("link-download");
  //   const dataurl = canvas.toDataURL("image/jpeg"); // canvasのピクセルデータをDataURLに変換
  //   link.href = dataurl; // DataURLをダウンロードリンクに設定
  //   link.click(); // ダウンロード実行

  // });
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      isDrawingMode: true, // 手書き入力ON
    });

    setBrush(canvas); // ペンの色とか種類を指定(以下に解説)

    setBackgroundImage(canvas); // 背景画像を設定(以下に解説)
  }, []);
  // // キャンバスの共通オブジェクト
  // var canvas = null;
  // // 読み込むファイル名（動的に変えてもＯＫ）
  // var FILENAME = "canvas.jpg";

  // window.addEventListener("load", function () {
  //   // キャンバスの初期設定
  //   const canvasinit = function () {
  //     // キャンバス取得
  //     var canvas = new fabric.Canvas("canvas");

  //     // 手書きモードOK
  //     canvas.isDrawingMode = true;
  //     // 手書きの色
  //     canvas.freeDrawingBrush.color = "#990000";
  //     // 手書きの太さ
  //     canvas.freeDrawingBrush.width = 10;

  //     // 画像読み込み
  //     var img = new Image();
  //     img.src = FILENAME;

  //     // 画像読み込んだときの処理
  //     img.onload = function () {
  //       // キャンバスサイズを設定()
  //       canvas.setWidth(this.width);
  //       canvas.setHeight(this.height);

  //       // サイズを指定画像に合わせるために読み込み終わったときに、キャンバスに設定する
  //       canvas.setBackgroundImage(FILENAME, canvas.renderAll.bind(canvas), {
  //         // キャンバス内の画像サイズを設定
  //         scaleX: canvas.width / img.width,
  //         scaleY: canvas.height / img.height,
  //       });
  //     };

  var download = document.getElementById("btn-save");
  download.addEventListener("click", function () {
    // ダウンロードファイル名指定
    this.setAttribute("download", "sample.jpg");
    // キャンバスのオブジェクト取得
    canvas = document.getElementById("canvas");
    // base64に変換
    var base64 = canvas.toDataURL("image/jpeg");
    // ダウンロード
    document.getElementById("download").href = base64;
  });
  //     // 描いた内容はクリア、画像はそのまま
  //     var init = document.getElementById("init");
  //     init.addEventListener("click", function () {
  //       // キャンバスクリア
  //       canvas.clear();
  //       // 画像を表示(上記onload処理にいく)
  //       img.src = FILENAME;
  //     });
  //   };
  //   // 初期処理で実行
  //   useEffect(() => {
  //     canvasinit();
  //   }, []);

  // ダウンロード処理

  return;
};

export default App;
