//=============================================================================
// BB_CustomSaveWindow.js
// Copyright (c) 2016 BB ENTERTAINMENT
//=============================================================================

/*:
 * @plugindesc セーブウインドウ改造プラグイン
 * @author ビービー
 * 
 * 
 * @param OutsideFrameColor
 * @desc 外枠の色を指定（テキストカラー0～31）
 * デフォルト：0
 * @default 0
 * 
 * @param OutsideFrameOpacity
 * @desc 外枠の透明度を指定（0～255）
 * デフォルト：64
 * @default 64
 * 
 * @param InsideFrameColor
 * @desc 内枠の色を指定（テキストカラー0～31）
 * デフォルト：0
 * @default 0
 * 
 * @param InsideFrameOpacity
 * @desc 内枠の透明度を指定（0～255）
 * デフォルト：64
 * @default 64
 * 
 * @param MaxItem
 * @desc 内枠の数を指定（1～4）
 * デフォルト：4（0で非表示）
 * @default 4
 * 
 * @param Item0
 * @desc ファイルID右に表示される項目 0=非表示 1=ﾀｲﾄﾙ 2=ﾌﾟﾚｲ時間 3=ﾏｯﾌﾟ名 4=所持金 5=ｾｰﾌﾞ回数 6=変数項1 7=変数項2 8=変数項3 9=変数項4
 * @default 1
 * 
 * @param Item0Length
 * @desc ファイルID右に表示される項目の横幅（Item5(右上に表示される項目)に影響）
 * @default 300
 * 
 * @param Item1title
 * @desc 右下に表示される項目のタイトル
 * デフォルト：プレイ時間
 * @default プレイ時間
 * 
 * @param Item1
 * @desc 右下に表示される項目  0=非表示 1=ﾀｲﾄﾙ 2=ﾌﾟﾚｲ時間 3=ﾏｯﾌﾟ名
 * 4=所持金 5=ｾｰﾌﾞ回数 6=変数項1 7=変数項2 8=変数項3 9=変数項4
 * @default 2
 * 
 * @param Item2title
 * @desc 中央右に表示される項目のタイトル
 * デフォルト：現在地
 * @default 現在地
 * 
 * @param Item2
 * @desc 中央右に表示される項目  0=非表示 1=ﾀｲﾄﾙ 2=ﾌﾟﾚｲ時間 3=ﾏｯﾌﾟ名
 * 4=所持金 5=ｾｰﾌﾞ回数 6=変数項1 7=変数項2 8=変数項3 9=変数項4
 * デフォルト：3
 * @default 3
 * 
 * @param Item3title
 * @desc 中央下に表示される項目のタイトル
 * デフォルト：所持金
 * @default 所持金
 * 
 * @param Item3
 * @desc 中央下に表示される項  0=非表示 1=ﾀｲﾄﾙ 2=ﾌﾟﾚｲ時間 3=ﾏｯﾌﾟ名
 * 4=所持金 5=ｾｰﾌﾞ回数 6=変数項1 7=変数項2 8=変数項3 9=変数項4
 * デフォルト：4
 * @default 4
 * 
 * @param Item4title
 * @desc 中央に表示される項目のタイトル
 * デフォルト：セーブ回数
 * @default セーブ回数
 * 
 * @param Item4
 * @desc 中央に表示される項目  0=非表示 1=ﾀｲﾄﾙ 2=ﾌﾟﾚｲ時間 3=ﾏｯﾌﾟ名
 * 4=所持金 5=ｾｰﾌﾞ回数 6=変数項1 7=変数項2 8=変数項3 9=変数項4
 * デフォルト：5
 * @default 5
 * 
 * @param Item5
 * @desc 右上に表示される項目  0=非表示 1=ﾀｲﾄﾙ 2=ﾌﾟﾚｲ時間 3=ﾏｯﾌﾟ名
 * 4=所持金 5=ｾｰﾌﾞ回数 6=変数項1 7=変数項2 8=変数項3 9=変数項4
 * デフォルト：6
 * @default 6
 * 
 * @param ItemValue1
 * @desc 変数項目1に入れる変数のID
 * デフォルト：1
 * @default 1
 * 
 * @param ItemValue2
 * @desc 変数項目2に入れる変数のID
 * デフォルト：2
 * @default 2
 * 
 * @param ItemValue3
 * @desc 変数項目3に入れる変数のID
 * デフォルト：3
 * @default 3
 * 
 * @param ItemValue4
 * @desc 変数項目4に入れる変数のID
 * デフォルト：4
 * @default 4
 * 
 * @param ItemValue1unit
 * @desc 変数項目1の単位
 * デフォルト：無し
 * @default 
 * 
 * @param ItemValue2unit
 * @desc 変数項目2の単位
 * デフォルト：無し
 * @default 
 * 
 * @param ItemValue3unit
 * @desc 変数項目3の単位
 * デフォルト：無し
 * @default 
 * 
 * @param ItemValue4unit
 * @desc 変数項目4の単位
 * デフォルト：無し
 * @default 
 * 
 * @param TitleFramelength1
 * @desc 項目1のタイトル枠の横幅（文字数*20+10）(0～274)
 * デフォルト：110
 * @default 110
 * 
 * @param TitleFramelength2
 * @desc 項目2のタイトル枠の横幅（文字数*20+10）(0～274)
 * デフォルト：110
 * @default 110
 * 
 * @param TitleFramelength3
 * @desc 項目3のタイトル枠の横幅（文字数*20+10）(0～274)
 * デフォルト：110
 * @default 110
 * 
 * @param TitleFramelength4
 * @desc 項目4のタイトル枠の横幅（文字数*20+10）(0～274)
 * デフォルト：110
 * @default 110
 * 
 * @param CharacterPositionY
 * @desc キャラクターグラフィックのy座標（下=6 中央=12 上=20）
 * デフォルト：6
 * @default 6
 * 
 * @param CharacterOpacity
 * @desc パーティメンバーの内控えメンバーの不透明度を小さくします。
 * （0:控えメンバー非表示　1:不透明度255 2:不透明度160）
 * @default 2
 * 
 * @param LevelPositionY
 * @desc レベルのy座標（下=72 上=23）
 * デフォルト：23
 * @default 23
 * 
 * @param LevelOnOff
 * @desc レベルを表示するかしないかを指定（0＝非表示、1＝表示）
 * デフォルト：1
 * @default 1
 * 
 * @help プラグインの説明
 * 
 * ■各パラメータの説明
 * プラグイン内より少しだけ詳しくパラメータの説明をしていきます。
 * 
 * OutsideFrameColor
 * 外枠の色をテキストカラーの0～31で指定できます。
 * デフォルト：0
 * 
 * OutsideFrameOpacity
 * 外枠の透明度を0～255の数値で指定できます（0＝透明、255＝不透明）
 * デフォルト：64
 * 
 * InsideFrameColor
 * 内枠の色をテキストカラーの0～31で指定できます。
 * デフォルト：0
 * 
 * InsideFrameOpacity
 * 内枠の透明度を0～255の数値で指定できます（0＝透明、255＝不透明）
 * デフォルト：64
 * 
 * MaxItem
 * 内枠の数を0から4のあいだで指定できます。
 * デフォルト：4（0で非表示）
 * 
 * Item0
 * ファイルID右に表示される項目を0～9の数字で指定します。
 * 0＝非表示
 * 1＝ゲームタイトル
 * 2＝プレイ時間
 * 3＝マップ名
 * 4＝所持金（自動で通貨単位も表示されます）
 * 5＝セーブ回数
 * 6＝パラメータのItemValue1で指定した変数の値（パラメータのItemValue1unitで単位を指定できます）
 * 7＝パラメータのItemValue2で指定した変数の値（パラメータのItemValue2unitで単位を指定できます）
 * 8＝パラメータのItemValue3で指定した変数の値（パラメータのItemValue3unitで単位を指定できます）
 * 9＝パラメータのItemValue4で指定した変数の値（パラメータのItemValue4unitで単位を指定できます）
 * 
 * Item0Length
 * ファイルID右に表示される項目の横幅を指定できます。（Item5(右上に表示される項目)に影響）
 * 指定したサイズより文字列の幅が大きい場合、指定したサイズに自動で文字幅が縮小されます。
 * default 300
 * 
 * Item1title
 * 右下に表示される項目のタイトルを好きな文字列で指定できます。
 * デフォルト：プレイ時間
 * 
 * Item1
 * 右下に表示される項目を0～9の数字で指定します。
 * デフォルト：2
 * 
 * Item2title
 * 中央右に表示される項目のタイトルを好きな文字列で指定できます。
 * デフォルト：現在地
 * 
 * Item2
 * 中央右に表示される項目を0～9の数字で指定します。
 * デフォルト：3
 * 
 * Item3title
 * 中央下に表示される項目のタイトルを好きな文字列で指定できます。
 * デフォルト：所持金
 * 
 * Item3
 * 中央下に表示される項を0～9の数字で指定します。
 * デフォルト：4
 * 
 * Item4title
 * 中央に表示される項目のタイトルを好きな文字列で指定できます。
 * デフォルト：セーブ回数
 * 
 * Item4
 * 中央に表示される項目を0～9の数字で指定します。
 * デフォルト：5
 * 
 * Item5
 * 右上に表示される項目を0～9の数字で指定します。
 * デフォルト：6
 * 
 * ItemValue1
 * 変数項目1に入れる変数のIDを指定します。
 * デフォルト：1
 * 
 * ItemValue2
 * 変数項目2に入れる変数のIDを指定します。
 * デフォルト：2
 * 
 * ItemValue3
 * 変数項目3に入れる変数のIDを指定します。
 * デフォルト：3
 * 
 * ItemValue4
 * 変数項目4に入れる変数のIDを指定します。
 * デフォルト：4
 * 
 * ItemValue1unit
 * 変数項目1の単位を指定します。
 * デフォルト：無し
 * 
 * ItemValue2unit
 * 変数項目2の単位を指定します。
 * デフォルト：無し
 * 
 * ItemValue3unit
 * 変数項目3の単位を指定します。
 * デフォルト：無し
 * 
 * ItemValue4unit
 * 変数項目4の単位を指定します。
 * デフォルト：無し
 * 
 * TitleFramelength1
 * 項目1のタイトル枠の横幅を0～274のあいだから指定します。
 * 文字数*20+10で文字の幅と同じ幅の枠を描画できます
 * 指定した枠幅より文字幅がはみ出る場合自動で文字幅が縮小されます。
 * デフォルト：110（5文字）
 * 
 * TitleFramelength2
 * 項目2のタイトル枠の横幅（文字数*20+10）(0～274)
 * デフォルト：110
 * 
 * TitleFramelength3
 * 項目3のタイトル枠の横幅（文字数*20+10）(0～274)
 * デフォルト：110
 * 
 * TitleFramelength4
 * 項目4のタイトル枠の横幅（文字数*20+10）(0～274)
 * デフォルト：110
 * 
 * CharacterPositionY
 * キャラクターグラフィックのy座標を指定します。
 * 下の方に表示したい場合は6、中央あたりなら12 上の方なら20が目安です。
 * デフォルト：6
 * 
 * CharacterOpacity
 * パラメータの入力画面の説明の通りです。
 * デフォルト：1
 * 
 * LevelPositionY
 * レベルのy座標を指定します。下の方なら72、上の方なら23が目安です。
 * レベルの表示はキャラクターグラフィックより手前に表示されます。
 * デフォルト：23
 * 
 * LevelOnOff
 * レベルを表示するかしないかを指定（0＝非表示、1＝表示）
 * デフォルト：1
 * 
 * 
 * ■変数に文字列を代入する方法
 * 変数に文字列を代入するには
 * イベントコマンドの"タブ1"にある"ゲーム進行"内の"変数の操作"を実行し
 * 代入したい変数を選び、代入にチェックを入れ
 * スクリプトに書き込みます
 * このとき　'　←この記号ではじめと終わりを挟むのを忘れないでください。
 * （ ' ←この記号はキーボードが半角英数のときにshiftを押しながら７で打てます）
 * 例：'タケノコ'
 * 
 * ■BB ENTERTAINMENT BLOGにて画像付きで解説しています。
 * 記事：http://bb-entertainment-blog.blogspot.jp/2016/11/blog-post_27.html#more
 * 
 * バージョン：
 * 1.0.2 2016/12/01 レベルの表示、非表示を切り替えるパラメータを追加
 * 1.0.1 2016/11/29 ヘルプを追記
 * 1.0.0 2016/11/27 初版
 * 
 * 利用規約：
 * このプラグインは、MITライセンスのもとで公開されています。
 * Copyright (c) 2016 BB ENTERTAINMENT
 * Released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * 
 * コンタクト：
 * BB ENTERTAINMENT Twitter: https://twitter.com/BB_ENTER/
 * BB ENTERTAINMENT BLOG   : http://bb-entertainment-blog.blogspot.jp/
 */


(function() {
'use strict';
//-----------------------------------------------------------------------------
// プラグインパラメータ管理
//-----------------------------------------------------------------------------
var parameters = PluginManager.parameters('BB_CustomSaveWindow');
var BBSWInFC = Number(parameters['InsideFrameColor']);
var BBSWInFO = Number(parameters['InsideFrameOpacity']);
var BBSWOutFC = Number(parameters['OutsideFrameColor']);
var BBSWOutFO = Number(parameters['OutsideFrameOpacity']);
var BBSWMaxItem = Number(parameters['MaxItem']);
var BBSWItem0 = Number(parameters['Item0']);
var BBSWItem0L = Number(parameters['Item0Length']);
var BBSWItem1T = String(parameters['Item1title']);
var BBSWItem1 = Number(parameters['Item1']);
var BBSWItem2T = String(parameters['Item2title']);
var BBSWItem2 = Number(parameters['Item2']);
var BBSWItem3T = String(parameters['Item3title']);
var BBSWItem3 = Number(parameters['Item3']);
var BBSWItem4T = String(parameters['Item4title']);
var BBSWItem4 = Number(parameters['Item4']);
var BBSWItem5 = Number(parameters['Item5']);
var BBSWV1 = Number(parameters['ItemValue1']);
var BBSWV2 = Number(parameters['ItemValue2']);
var BBSWV3 = Number(parameters['ItemValue3']);
var BBSWV4 = Number(parameters['ItemValue4']);
var BBSWV1u = String(parameters['ItemValue1unit']);
var BBSWV2u = String(parameters['ItemValue2unit']);
var BBSWV3u = String(parameters['ItemValue3unit']);
var BBSWV4u = String(parameters['ItemValue4unit']);
var BBSWTF1 = Number(parameters['TitleFramelength1']);
var BBSWTF2 = Number(parameters['TitleFramelength2']);
var BBSWTF3 = Number(parameters['TitleFramelength3']);
var BBSWTF4 = Number(parameters['TitleFramelength4']);
var BBSWCPY = Number(parameters['CharacterPositionY']);
var BBSWCOY = Number(parameters['CharacterOpacity']);
var BBSWLPY = Number(parameters['LevelPositionY']);
var BBSWLOO = Number(parameters['LevelOnOff']);
//-----------------------------------------------------------------------------
// セーブデータに名前を定義
//-----------------------------------------------------------------------------

DataManager.makeSavefileInfo = function() {
    var info = {};
    info.globalId   = this._globalId;
    info.title      = $dataSystem.gameTitle;
    info.characters = $gameParty.charactersForSavefile();
    info.faces      = $gameParty.facesForSavefile();
    info.playtime   = $gameSystem.playtimeText();
    info.timestamp  = Date.now();
    info.mapname    = $gameMap.displayName();
    info.gold       = $gameParty._gold;
    info.savecount  = $gameSystem._saveCount;
    info.value1     = $gameVariables.value(BBSWV1);
    info.value2     = $gameVariables.value(BBSWV2);
    info.value3     = $gameVariables.value(BBSWV3);
    info.value4     = $gameVariables.value(BBSWV4);
    return info;
};

Game_Party.prototype.charactersForSavefile = function() {
    if(BBSWCOY){
        var member = this.members();
    }else{
        var member = this.battleMembers();
    }
    return member.map(function(actor) {
        return [actor.characterName(), actor.characterIndex(), actor.level];
    });
};


Window_SavefileList.prototype.drawItem = function(index) {
    var id = index + 1;
    var valid = DataManager.isThisGameFile(id);
    var info = DataManager.loadSavefileInfo(id);
    var rect = this.itemRectForText(index);

    this.contents.fontSize = 20;
    this.contents.paintOpacity = BBSWInFO;
    this.contents.fillRect(rect.x - 5, rect.y + 2, rect.width + 10, 2, this.textColor(BBSWInFC));//上の棒
    this.contents.fillRect(rect.x - 5, rect.y + rect.height - 3, rect.width + 10, 2, this.textColor(BBSWInFC));//下の棒
    this.contents.fillRect(rect.x - 5, rect.y + 4, 2, rect.height - 7, this.textColor(BBSWInFC));//左の棒
    this.contents.fillRect(rect.width + 9, rect.y + 4, 2, rect.height - 7, this.textColor(BBSWInFC));//右の棒
    this.contents.fillRect(rect.x - 3, rect.y + 4, rect.width + 6, 28, this.textColor(BBSWInFC));//タイトル背景

    this.contents.paintOpacity = BBSWOutFO;
    if (BBSWMaxItem >= 1) {
        this.contents.fillRect(rect.x + rect.width - 278, rect.y + 70, BBSWTF1, 26, this.textColor(BBSWOutFC));//タイトル背景
        this.contents.fillRect(rect.x + rect.width - 278, rect.y + 68, 276, 2, this.textColor(BBSWOutFC));//上の棒
        this.contents.fillRect(rect.x + rect.width - 278, rect.y + 96, 276, 2, this.textColor(BBSWOutFC));//下の棒
        this.contents.fillRect(rect.x + rect.width - 278 + 274, rect.y + 70, 2, 26, this.textColor(BBSWOutFC));//右の棒
    } if (BBSWMaxItem >= 2) {
        this.contents.fillRect(rect.x + rect.width - 278, rect.y + 37, BBSWTF2, 26, this.textColor(BBSWOutFC));
        this.contents.fillRect(rect.x + rect.width - 278, rect.y + 35, 276, 2, this.textColor(BBSWOutFC));
        this.contents.fillRect(rect.x + rect.width - 278, rect.y + 63, 276, 2, this.textColor(BBSWOutFC));
        this.contents.fillRect(rect.x + rect.width - 278 + 274, rect.y + 37, 2, 26, this.textColor(BBSWOutFC));
    } if (BBSWMaxItem >= 3) {
        this.contents.fillRect(rect.x + rect.width - 558, rect.y + 70, BBSWTF3, 26, this.textColor(BBSWOutFC));
        this.contents.fillRect(rect.x + rect.width - 558, rect.y + 68, 276, 2, this.textColor(BBSWOutFC));
        this.contents.fillRect(rect.x + rect.width - 558, rect.y + 96, 276, 2, this.textColor(BBSWOutFC));
        this.contents.fillRect(rect.x + rect.width - 558 + 274, rect.y + 70, 2, 26, this.textColor(BBSWOutFC));
    } if (BBSWMaxItem >= 4) {
        this.contents.fillRect(rect.x + rect.width - 558, rect.y + 37, BBSWTF4, 26, this.textColor(BBSWOutFC));
        this.contents.fillRect(rect.x + rect.width - 558, rect.y + 35, 276, 2, this.textColor(BBSWOutFC));
        this.contents.fillRect(rect.x + rect.width - 558, rect.y + 63, 276, 2, this.textColor(BBSWOutFC));
        this.contents.fillRect(rect.x + rect.width - 558 + 274, rect.y + 37, 2, 26, this.textColor(BBSWOutFC));
    }
    this.contents.paintOpacity = 255;
    this.resetTextColor();
    if (this._mode === 'load') this.changePaintOpacity(valid);
    this.drawFileId(id, rect.x, rect.y);
    if (info) {
        this.changePaintOpacity(valid);
        this.drawContents(info, rect, valid);
        this.changePaintOpacity(true);
    }
};

Window_SavefileList.prototype.drawContents = function(info, rect, valid) {
    var bottom = rect.y + rect.height;
    if (rect.width >= 420) {
//項目0------------------------------------------------------------------------
        if (BBSWItem0 == 1) {
            this.drawText(info.title, rect.x + 142, rect.y, BBSWItem0L);
        } else if (BBSWItem0 == 2) {
            this.drawText(info.playtime, rect.x + 142, rect.y, BBSWItem0L);
        } else if (BBSWItem0 == 3) {
            this.drawText(info.mapname, rect.x + 142, rect.y, BBSWItem0L);
        } else if (BBSWItem0 == 4) {
            this.drawText(info.gold + TextManager.currencyUnit, rect.x + 142, rect.y, BBSWItem0L);
        } else if (BBSWItem0 == 5) {
            this.drawText(info.savecount, rect.x + 142, rect.y, 312);
        } else if (BBSWItem0 == 6) {
            this.drawText(info.value1 + BBSWV1u, rect.x + 142, rect.y, BBSWItem0L);
        } else if (BBSWItem0 == 7) {
            this.drawText(info.value2 + BBSWV2u, rect.x + 142, rect.y, BBSWItem0L);
        } else if (BBSWItem0 == 8) {
            this.drawText(info.value3 + BBSWV3u, rect.x + 142, rect.y, BBSWItem0L);
        } else if (BBSWItem0 == 9) {
            this.drawText(info.value4 + BBSWV4u, rect.x + 142, rect.y, BBSWItem0L);
        }
//-----------------------------------------------------------------------------
if(valid) this.drawPartyCharacters(info, rect.x + 25, rect.y, bottom);
//-----------------------------------------------------------------------------
    }
    var lineHeight = this.lineHeight();
    var y2 = bottom - lineHeight;
/*
    this.contents.paintOpacity = 64;
//タイトルバック■
    this.contents.fillRect(rect.x + rect.width - 278, y2 + 30 - 28, BBSWTF1, 28, this.textColor(BBSWOutFC));
    this.contents.fillRect(rect.x + rect.width - 278, y2 - 2 - 28, BBSWTF2, 28, this.textColor(BBSWOutFC));
    this.contents.fillRect(rect.x + rect.width - 558, y2 + 30 - 28, BBSWTF3, 28, this.textColor(BBSWOutFC));
    this.contents.fillRect(rect.x + rect.width - 558, y2 - 2 - 28, BBSWTF4, 28, this.textColor(BBSWOutFC));
//アンダーバー
    this.contents.fillRect(rect.x + rect.width - 278, y2 + 30, 276, 2, this.textColor(BBSWOutFC));
    this.contents.fillRect(rect.x + rect.width - 278, y2 - 2, 276, 2, this.textColor(BBSWOutFC));
    this.contents.fillRect(rect.x + rect.width - 558, y2 + 30, 276, 2, this.textColor(BBSWOutFC));
    this.contents.fillRect(rect.x + rect.width - 558, y2 - 2, 276, 2, this.textColor(BBSWOutFC));

    this.contents.paintOpacity = 255;
*/
    if (y2 >= lineHeight) {
//項目1 右下-------------------------------------------------------------------
        this.drawText(BBSWItem1T, rect.x + rect.width - 274, y2 - 2, BBSWTF1 - 10);
        if (BBSWItem1 == 1) {
            this.drawText(info.title, rect.x + rect.width - 274 + BBSWTF1, y2 - 2, 266 - BBSWTF1, 'right');//rect.x - 7, y2 - 2, rect.width
        } else if (BBSWItem1 == 2) {
            this.drawText(info.playtime, rect.x + rect.width - 274 + BBSWTF1, y2 - 2, 266 - BBSWTF1, 'right');
        } else if (BBSWItem1 == 3) {
            this.drawText(info.mapname, rect.x + rect.width - 274 + BBSWTF1, y2 - 2, 266 - BBSWTF1, 'right');
        } else if (BBSWItem1 == 4) {
            this.drawText(info.gold + TextManager.currencyUnit, rect.x + rect.width - 274 + BBSWTF1, y2 - 2, 266 - BBSWTF1, 'right');
        } else if (BBSWItem1 == 5) {
            this.drawText(info.savecount, rect.x + rect.width - 274 + BBSWTF1, y2 - 2, 266 - BBSWTF1, 'right');
        } else if (BBSWItem1 == 6) {
            this.drawText(info.value1 + BBSWV1u, rect.x + rect.width - 274 + BBSWTF1, y2 - 2, 266 - BBSWTF1, 'right');
        } else if (BBSWItem1 == 7) {
            this.drawText(info.value2 + BBSWV2u, rect.x + rect.width - 274 + BBSWTF1, y2 - 2, 266 - BBSWTF1, 'right');
        } else if (BBSWItem1 == 8) {
            this.drawText(info.value3 + BBSWV3u, rect.x + rect.width - 274 + BBSWTF1, y2 - 2, 266 - BBSWTF1, 'right');
        } else if (BBSWItem1 == 9) {
            this.drawText(info.value4 + BBSWV4u, rect.x + rect.width - 274 + BBSWTF1, y2 - 2, 266 - BBSWTF1, 'right');
        }
//-----------------------------------------------------------------------------
//項目2 右上-------------------------------------------------------------------
        this.drawText(BBSWItem2T, rect.x + rect.width - 274, y2 - 34, BBSWTF2 - 10);
        if (BBSWItem2 == 1) {
            this.drawText(info.title, rect.x + rect.width - 274 + BBSWTF2, y2 - 34, 266 - BBSWTF2, 'right');//rect.x - 7, y2 - 34, rect.width
        } else if (BBSWItem2 == 2) {
            this.drawText(info.playtime, rect.x + rect.width - 274 + BBSWTF2, y2 - 34, 266 - BBSWTF2, 'right');
        } else if (BBSWItem2 == 3) {
            this.drawText(info.mapname, rect.x + rect.width - 274 + BBSWTF2, y2 - 34, 266 - BBSWTF2, 'right');
        } else if (BBSWItem2 == 4) {
            this.drawText(info.gold + TextManager.currencyUnit, rect.x + rect.width - 274 + BBSWTF2, y2 - 34, 266 - BBSWTF2, 'right');
        } else if (BBSWItem2 == 5) {
            this.drawText(info.savecount, rect.x + rect.width - 274 + BBSWTF2, y2 - 34, 266 - BBSWTF2, 'right');
        } else if (BBSWItem2 == 6) {
            this.drawText(info.value1 + BBSWV1u, rect.x + rect.width - 274 + BBSWTF2, y2 - 34, 266 - BBSWTF2, 'right');
        } else if (BBSWItem2 == 7) {
            this.drawText(info.value2 + BBSWV2u, rect.x + rect.width - 274 + BBSWTF2, y2 - 34, 266 - BBSWTF2, 'right');
        } else if (BBSWItem2 == 8) {
            this.drawText(info.value3 + BBSWV3u, rect.x + rect.width - 274 + BBSWTF2, y2 - 34, 266 - BBSWTF2, 'right');
        } else if (BBSWItem2 == 9) {
            this.drawText(info.value4 + BBSWV4u, rect.x + rect.width - 274 + BBSWTF2, y2 - 34, 266 - BBSWTF2, 'right');
        }
//-----------------------------------------------------------------------------
//項目3 左下-------------------------------------------------------------------
        this.drawText(BBSWItem3T, rect.x + rect.width - 554, y2 - 2, BBSWTF3 - 10);
        if (BBSWItem3 == 1) {
            this.drawText(info.title, rect.x + rect.width - 554 + BBSWTF3, y2 - 2, 266 - BBSWTF3, 'right');//rect.x - 287, y2 - 2, rect.width
        } else if (BBSWItem3 == 2) {
            this.drawText(info.playtime, rect.x + rect.width - 554 + BBSWTF3, y2 - 2, 266 - BBSWTF3, 'right');
        } else if (BBSWItem3 == 3) {
            this.drawText(info.mapname, rect.x + rect.width - 554 + BBSWTF3, y2 - 2, 266 - BBSWTF3, 'right');
        } else if (BBSWItem3 == 4) {
            this.drawText(info.gold + TextManager.currencyUnit, rect.x + rect.width - 554 + BBSWTF3, y2 - 2, 266 - BBSWTF3, 'right');
        } else if (BBSWItem3 == 5) {
            this.drawText(info.savecount, rect.x + rect.width - 554 + BBSWTF3, y2 - 2, 266 - BBSWTF3, 'right');
        } else if (BBSWItem3 == 6) {
            this.drawText(info.value1 + BBSWV1u, rect.x + rect.width - 554 + BBSWTF3, y2 - 2, 266 - BBSWTF3, 'right');
        } else if (BBSWItem3 == 7) {
            this.drawText(info.value2 + BBSWV2u, rect.x + rect.width - 554 + BBSWTF3, y2 - 2, 266 - BBSWTF3, 'right');
        } else if (BBSWItem3 == 8) {
            this.drawText(info.value3 + BBSWV3u, rect.x + rect.width - 554 + BBSWTF3, y2 - 2, 266 - BBSWTF3, 'right');
        } else if (BBSWItem3 == 9) {
            this.drawText(info.value4 + BBSWV4u, rect.x + rect.width - 554 + BBSWTF3, y2 - 2, 266 - BBSWTF3, 'right');
        }
//-----------------------------------------------------------------------------
//項目4 左上-------------------------------------------------------------------
        this.drawText(BBSWItem4T, rect.x + rect.width - 554, y2 - 34, BBSWTF4 - 10);
        if (BBSWItem4 == 1) {
            this.drawText(info.title, rect.x + rect.width - 554 + BBSWTF4, y2 - 34, 266 - BBSWTF4, 'right');//rect.x - 287, y2 - 34, rect.width
        } else if (BBSWItem4 == 2) {
            this.drawText(info.playtime, rect.x + rect.width - 554 + BBSWTF4, y2 - 34, 266 - BBSWTF4, 'right');
        } else if (BBSWItem4 == 3) {
            this.drawText(info.mapname, rect.x + rect.width - 554 + BBSWTF4, y2 - 34, 266 - BBSWTF4, 'right');
        } else if (BBSWItem4 == 4) {
            this.drawText(info.gold + TextManager.currencyUnit, rect.x + rect.width - 554 + BBSWTF4, y2 - 34, 266 - BBSWTF4, 'right');
        } else if (BBSWItem4 == 5) {
            this.drawText(info.savecount, rect.x + rect.width - 554 + BBSWTF4, y2 - 34, 266 - BBSWTF4, 'right');
        } else if (BBSWItem4 == 6) {
            this.drawText(info.value1 + BBSWV1u, rect.x + rect.width - 554 + BBSWTF4, y2 - 34, 266 - BBSWTF4, 'right');
        } else if (BBSWItem4 == 7) {
            this.drawText(info.value2 + BBSWV2u, rect.x + rect.width - 554 + BBSWTF4, y2 - 34, 266 - BBSWTF4, 'right');
        } else if (BBSWItem4 == 8) {
            this.drawText(info.value3 + BBSWV3u, rect.x + rect.width - 554 + BBSWTF4, y2 - 34, 266 - BBSWTF4, 'right');
        } else if (BBSWItem4 == 9) {
            this.drawText(info.value4 + BBSWV4u, rect.x + rect.width - 554 + BBSWTF4, y2 - 34, 266 - BBSWTF4, 'right');
        }
//-----------------------------------------------------------------------------
//項目5 上部-------------------------------------------------------------------
        var L5 = 609 - BBSWItem0L;
        if (BBSWItem5 == 1) {
            this.drawText(info.title, rect.x - L5 + rect.width, rect.y, L5, 'right');//rect.x + 455, rect.y, 312,
        } else if (BBSWItem5 == 2) {
            this.drawText(info.playtime, rect.x - L5 + rect.width, rect.y, L5, 'right');
        } else if (BBSWItem5 == 3) {
            this.drawText(info.mapname, rect.x - L5 + rect.width, rect.y, L5, 'right');
        } else if (BBSWItem5 == 4) {
            this.drawText(info.gold + TextManager.currencyUnit, rect.x - L5 + rect.width, rect.y, L5, 'right');
        } else if (BBSWItem5 == 5) {
            this.drawText(info.savecount, rect.x - L5 + rect.width, rect.y, L5, 'right');
        } else if (BBSWItem5 == 6) {
            this.drawText(info.value1 + BBSWV1u, rect.x - L5 + rect.width, rect.y, L5, 'right');
        } else if (BBSWItem5 == 7) {
            this.drawText(info.value2 + BBSWV2u, rect.x - L5 + rect.width, rect.y, L5, 'right');
        } else if (BBSWItem5 == 8) {
            this.drawText(info.value3 + BBSWV3u, rect.x - L5 + rect.width, rect.y, L5, 'right');
        } else if (BBSWItem5 == 9) {
            this.drawText(info.value4 + BBSWV4u, rect.x - L5 + rect.width, rect.y, L5, 'right');
        }
    }
};

Window_SavefileList.prototype.drawPartyCharacters = function(info, x, y, bottom) {
    if (info.characters) {
        this.contents.fontSize = 16;
        for (var i = 0; i < info.characters.length; i++) {
            var data = info.characters[i];
            var opa = BBSWCOY < 2 || i < $gameParty.battleMembers().length;
            this.changePaintOpacity(opa);
            this.drawCharacter(data[0], data[1], x + i * 48, bottom - BBSWCPY);
            if (!BBSWLOO) continue;
            this.drawText(TextManager.levelA + " " + data[2], 12 + i * 48, y + BBSWLPY, 40);
        }
        this.changePaintOpacity(true);
        this.contents.fontSize = 20;
    }
};

Window_SavefileList.prototype.drawFileId = function(id, x, y) {
    this.drawText(TextManager.file + ' ' + id, x, y, 120);
};

})();