# OSM_memos
OSMのメモなどをつらつらと書きます
主にメモとスニペット用

## Circle.jsについて
OSM というかOpenLayersで半径をメートルにした「美しい」円を書きたかった

Openlayers Circle radius in meters と何度検索したことか！！！

Polygon？ めんどくさい

座標で線引き？？ 中心座標だけもってたい私にやさしくない

そんなわけで手計算で無理矢理近似値を作りました

それっぽい円が書けます

縮尺対応は下記

|Zoom Level|半径約100mを表すpointRadius|
|---|---|
|18|200|
|17|100|
|16|50|
|15|25|
|14|12|
|13|7|
|12|4|
|11|2|
|10|1|
|9|0|
|8|0|
|7|0|
|6|0|
|5|0|
|4|0|
|3|0|
|2|0|
|1|0|

※ぶっちゃけZoomLevel9以下は点
