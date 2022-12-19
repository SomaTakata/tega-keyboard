// react-router-domのインポートを追加
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Keyboard } from "./components/Keyboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page1">
            <Keyboard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
