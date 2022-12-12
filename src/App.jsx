// import "./App.css";
// import { fabric } from "fabric";
// import { useEffect } from "react";
// import { useState } from "react";

// const App = () => {
//   const setBrush = (canvas) => {
//     if (canvas.freeDrawingBrush) {
//       const brush = canvas.freeDrawingBrush;
//       brush.color = "black";
//       brush.width = 6;
//     }
//   };

//   const setBackgroundImage = (canvas) => {
//     "./canvas.png",
//       (img) => {
//         img.set({
//           opacity: 1, // 透明度
//           scaleX: canvas.width / img.width, // X軸の拡大率
//           scaleY: canvas.height / img.height, // Y軸の拡大率
//         });
//         canvas.setBackgroundImage(img, canvas.requestRenderAll.bind(canvas)); // 画像を背景に設定
//       };
//   };

//   // });
//   useEffect(() => {
//     const canvas = new fabric.Canvas("canvas", {
//       isDrawingMode: true,
//       height: 200,
//       width: 200,
//     });
//     setBrush(canvas);
//     setBackgroundImage(canvas);
//   }, []);

//   const download = () => {
//     const canvas = document.getElementById("canvas");
//     const link = document.getElementById("hiddenLink");

//     link.href = canvas.toDataURL("image/png");
//     localStorage.setItem("あ", link.href);
//   };

//   const clearCanvas = (e) => {
//     const cvs = document.getElementById("canvas");
//     const ctx = cvs.getContext("2d");
//     ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
//     ctx.beginPath();

//     console.log("リセット！");
//   };

//   return (
//     <div id="items" align="center">
//       <div id="canvasDiv">
//         <canvas id="canvas"></canvas>
//       </div>
//       <div>
//         <button onClick={clearCanvas}>クリア</button>
//         <button onClick={download}>"あ"の追加</button>
//         <a id="hiddenLink" download="canvas.png">
//           link
//         </a>
//         <div id="next" align="center">
//           <button id="a">＜＜　あ　</button>
//           <button id="a">　い　＞＞</button>
//         </div>
//         <div id="gal">
//           <img id="galI" src={localStorage.getItem("あ")}></img>
//           <p id="galT">あ</p>
//         </div>
//         <div id="gal">
//           <img id="galI" src={localStorage.getItem("い")}></img>
//           <p id="galT">い</p>
//         </div>
//         <div id="gal">
//           <img id="galI" src={localStorage.getItem("う")}></img>
//           <p id="galT">う</p>
//         </div>
//         <div id="gal">
//           <img id="galI" src={localStorage.getItem("え")}></img>
//           <p id="galT">え</p>
//         </div>
//         <div id="gal">
//           <img id="galI" src={localStorage.getItem("お")}></img>
//           <p id="galT">お</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// react-router-domのインポートを追加
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { あ } from "./components/あ";
import { い } from "./components/い";
import { う } from "./components/う";
import { え } from "./components/え";
import { お } from "./components/お";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
          <Route exact path="/">
            <あ />
          </Route>
          <Route path="/い">
            <い />
          </Route>
          <Route path="/う">
            <う />
          </Route>
          <Route path="/え">
            <え />
          </Route>
          <Route path="/お">
            <お />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
