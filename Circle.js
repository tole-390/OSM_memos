// イベントの登録
map.events.register("zoomend", map, onZoomChanged);

// イベント発火時
function onZoomChanged() {
	setCircl();
}

/*
 * 縮尺に合わせて円を書く
 */
function setCircl() {
	// 円の削除と再描画
	// ズーム合わせで円のサイズを調整する
	var mapZoomSize = map.getZoom();
	
	// 都度削除から新規
	vectorLayer.removeAllFeatures();
	// 半径算出 - 縮尺に合わせて半径約100mの円を書きたい
	var radius = 0;
	switch (mapZoomSize){
	case 18:
		radius = 200;
		break;
	case 17:
		radius = 100;
		break;
	case 16:
		radius = 50;
		break;
	case 15:
		radius = 25;
		break;
	case 14:
		radius = 12;
		break;
	case 13:
		radius = 7;
		break;
	case 12:
		radius = 4;
		break;
	case 11:
		radius = 2;
		break;
	case 12:
		radius = 1;
		break;
	default:
		radius = 0;
	}
	
	// 円描画はオブジェクトは事前に作っておいて
	// イベント処理では半径だけ作り直して再描画
	clcArray[idx].style.pointRadius = radius;
	vectorLayer.addFeatures([clcArray[idx]]);
	vectorLayer.refresh({force:true});
}
