import service from "../service";

export const banner = () => {
	// banner
	// 调用此接口, 可获取 banner(轮播图) 数据,
	// 可选参数:
	// type: 资源类型, 对应以下类型, 默认为 0 即 PC
	// 0:pc 1:android 2:iphone 3:ipad
	// 接口地址: /banner
	// 调用例子: /banner, /banner?type = 2
	return service({
		url: `/banner?type=0`,
		methods: 'GET'
	})
}
// export const homePage = () => {
// 	// 首页 - 发现音乐
// 	// 说明: 调用此接口, 可获取 APP 首页信息
// 	// 接口地址: /homepage/block / page

// 	// 可选参数: refresh: 是否刷新数据, 默认为 false
// 	// cursor: 上一条数据返回的 cursor
// 	return service({
// 		url: `/homepage/block/page`,
// 		methods: 'GET'
// 	})
// }
export const dailySongList = () => {
	// 说明: 调用此接口, 可获取推荐歌单
	// 可选参数: limit: 取出数量, 默认为 30(不支持 offset)
	// 接口地址: /personalized
	// 调用例子: /personalized?limit=1
	return service({
		url: `/personalized?limit=12`,
		methods: 'GET'
	})
}

export const newSong = () => {
	// 推荐新音乐
	// 说明: 调用此接口, 可获取推荐新音乐
	// 可选参数: limit: 取出数量, 默认为 10(不支持 offset)
	// 接口地址: /personalized/newsong
	// 调用例子: /personalized/newsong
	return service({
		url: `/personalized/newsong?limit=15`,
		methods: 'GET'
	})
}

export const privateContent = () => {
	// 独家放送(入口列表)

	// 说明: 调用此接口, 可获取独家放送

	// 接口地址: /personalized/privatecontent

	// 调用例子: /personalized/privatecontent
	return service({
		url: `/personalized/privatecontent`,
		methods: 'GET'
	})
}

export const recommendMv = () => {
	// 推荐 mv
	// 说明: 调用此接口, 可获取推荐 mv

	// 接口地址: /personalized/mv

	// 调用例子: /personalized/mv
	return service({
		url: `/personalized/mv`,
		methods: 'GET'
	})
}

export const hotSearch = async () => {
	// 热搜列表(简略)
	// 说明: 调用此接口, 可获取热门搜索列表

	// 接口地址: /search/hot

	// 调用例子: /search/hot

	return service({
		url: `/search/hot`,
		methods: 'GET'
	})
}
// 向给定ID的用户发起请求

export const hotSearchDetail = () => {
	// 热搜列表(详细)
	// 说明: 调用此接口, 可获取热门搜索列表

	// 接口地址: /search/hot/detail

	// 调用例子: /search/hot/detail

	return service({
		url: `/search/hot/detail`,
		methods: 'GET'
	})
}

export const searchMultimatch = (keyWords) => {
	// 搜索建议
	// 说明: 调用此接口, 传入搜索关键词可获得搜索建议, 搜索结果同时包含单曲, 歌手, 歌单信息
	// 必选参数: keywords: 关键词
	// 可选参数: type: 如果传 'mobile' 则返回移动端数据
	// 接口地址: /search/suggest
	// 调用例子: /search/suggest?keywords=海阔天空 /search/suggest?keywords=海阔天空&type=mobile

	return service({
		url: `/search/suggest?keywords=${keyWords}`,
		methods: 'GET'
	})
}
export const userDetail = (id) => {
	// 获取用户详情
	// 说明: 登录后调用此接口, 传入用户 id, 可以获取用户详情
	// 必选参数: uid: 用户 id
	// 接口地址: /user/detail
	// 调用例子: /user/detail ? uid = 3219654671

	return service({
		url: `/user/detail?uid=${id}`,
		methods: 'GET'
	})
}
export const userPlaylist = (id) => {
	// 获取用户歌单
	// 说明: 登录后调用此接口, 传入用户 id, 可以获取用户歌单
	// 必选参数: uid: 用户 id
	// 可选参数:
	// limit: 返回数量, 默认为 30
	// offset: 偏移数量，用于分页, 如 : (页数 - 1) * 30, 其中 30 为 limit 的值, 默认为 0
	// 接口地址: /user/playlist
	// 调用例子: /user/playlist ? uid = 32953014
	return service({
		url: `/user/playlist?uid=${id}`,
		methods: 'GET'
	})
}

//获取音频的url
export const getSongUrl = (id) => {
	return service({
		url: `/song/url?id=${id}`,
		method: 'GET',
	})
}
//获取歌曲详情
export const getSongDetail = (id) => {
	return service({
		url: `/song/detail?ids=${id}`,
		method: 'GET',
	})
}