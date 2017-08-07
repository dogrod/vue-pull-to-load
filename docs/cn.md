## API

Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| maxDistance | 最大滑动距离 | Number | 90 |
| activeRange | 触发行为的范围 | Number | 10 |
| pullSpeedRange | 到底 / 顶之后的拖动距离和元素滚动时间的比例（越大越慢，1为拖动1px就滚动1px） | Number | 2 |
| topFunction | 向上拖动到顶之后触发的行为（若不绑定方法则到顶后无法向上拖动） | Function | none |
| bottomFunction | 向下拖动到顶之后触发的行为（若不绑定方法则到底后无法向下拖动） | Function | none |