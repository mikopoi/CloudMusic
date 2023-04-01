export const getCurrentTime = () => {  //当前时间
	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth() + 1;
	const day = now.getDate();
	const hour = now.getHours();
	const minute = now.getMinutes();
	const second = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();;

	return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

export const playCount = (number) => { // 对播放数量的处理
	if (number < 10000) {
		return number
	} else if (number < 100000000) {
		return (number / 10000).toFixed(1) + '万'
	} else {
		return (number / 100000000).toFixed(1) + '亿'
	}
}

export const convertMsToMinSec = (ms) => { // 毫秒  --> 分:秒 函数
	// 调用方法
	// let timeString = convertMsToMinSec(238552)
	// console.log(timeString)
	let minutes = Math.floor(ms / 60000)
	let seconds = ((ms % 60000) / 1000).toFixed(0)
	return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

// 密码的校验函数
export const validatePassword = (password) => {
	// const password = "MySecurePassword123!";
	// const isValid = validatePassword(password);
	// console.log(isValid); // 使用方法

	// 密码长度必须至少为8个字符
	if (password.length < 6) {
		return false;
	}
	// 密码必须至少包含一个大写字母
	if (!/[A-Z]/.test(password)) {
		return false;
	}
	// 密码必须至少包含一个小写字母
	if (!/[a-z]/.test(password)) {
		return false;
	}
	// 密码必须至少包含一个数字
	if (!/\d/.test(password)) {
		return false;
	}
	// If all checks pass, password is valid
	return true;
}
// 邮箱的校验函数
export const validateEmail = (email) => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}
// 电话号码的校验函数
export const validatePhoneNumber = (phoneNumber) => {
	const regex = /^1[3456789]\d{9}$/;
	return regex.test(phoneNumber);
}
