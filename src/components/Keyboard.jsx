import { Link } from "react-router-dom";
import "../App.css";
import { FiDelete } from "react-icons/fi";

export const Keyboard = () => {
  return (
    <div className="items" align="center">
      <body>
        <div>
          <div id="header">
            <Link to="/">
              <div>入力へ</div>
            </Link>
          </div>
        </div>

        <div id="content">
          <input type="text" id="txt" />
        </div>

        <div id="kb_container">
          <div id="kb_container2">
            <div class="kb_key_shadow">
              <div class="kb_key_flick kb_key_u transparent"></div>
            </div>
            <div class="kb_key_shadow">
              <div class="kb_key_flick kb_key_d transparent"></div>
            </div>
            <div class="kb_key_shadow">
              <div class="kb_key_flick kb_key_l transparent"></div>
            </div>
            <div class="kb_key_shadow">
              <div class="kb_key_flick kb_key_r transparent"></div>
            </div>

            <div class="kb_key kb_no_input no_flick"></div>
            <div class="kb_key">ア</div>
            <div class="kb_key">カ</div>
            <div class="kb_key">サ</div>
            <div id="kb_key_bs" class="kb_key kb_no_input_delete no_flick">
              <FiDelete />
            </div>

            <div class="kb_key kb_no_input no_flick"></div>
            <div class="kb_key">タ</div>
            <div class="kb_key">ナ</div>
            <div class="kb_key">ハ</div>
            <div class="kb_key kb_no_input_blank no_flick">空白</div>

            <div class="kb_key kb_no_input no_flick"></div>
            <div class="kb_key">マ</div>
            <div class="kb_key">ヤ</div>
            <div class="kb_key">ラ</div>
            <div class="kb_key kb_no_input_search no_flick">検索</div>

            <div class="kb_key kb_no_input no_flick"></div>
            <div id="kb_key_switch" class="kb_key no_flick">
              <div id="switch_container">
                <div id="switch1" class="switch">
                  ゛
                </div>
                <div id="switch2" class="switch">
                  ゜
                </div>
                <div id="switch3" class="switch">
                  小
                </div>
              </div>
            </div>
            <div class="kb_key">ワ</div>
            <div class="kb_key kb_no_input no_flick"></div>
            <div class="kb_key kb_no_input no_flick"></div>
          </div>
        </div>
      </body>
    </div>
  );
};
