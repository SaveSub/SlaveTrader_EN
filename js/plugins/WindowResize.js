//=============================================================================
// WindowResize.js
//=============================================================================

/*:
 * @plugindesc ゲーム起動時のウィンドウサイズを変更します。
 * @author 月雨 春人
 *
 * @param width
 * @desc ウィンドウの幅を指定します。
 * @default 816
 *
 * @param height
 * @desc ウィンドウの高さを指定します。
 * @default 624
 *
 * @help このプラグインには、プラグインコマンドはありません。
 */
 
(function() {

var parameters = PluginManager.parameters('WindowResize');
var screen_width = Number(parameters["width"]);
var screen_height = Number(parameters["height"]);
var window_width = screen_width + window.outerWidth - window.innerWidth;
var window_height = screen_height + window.outerHeight - window.innerHeight;

SceneManager._screenWidth       = screen_width;
SceneManager._screenHeight      = screen_height;
SceneManager._boxWidth          = screen_width;
SceneManager._boxHeight         = screen_height;

var _window_onload = window.onload.bind(this)
window.onload = function() {
	resizeTo(window_width, window_height);
    _window_onload.call();
};

})();
