const xlsx = require('node-xlsx')
const fs = require('fs')

// 读取文件内容
let allPeopleData = xlsx.parse(__dirname + '/all-people.xlsx')[0].data
// console.log(allPeopleData)

// 将获取到的人根据不同部门放到不同数组
let departmentArr = allPeopleData.reduce((accumulator, currentValue) => {
	accumulator.filter(acc => acc.department === currentValue[1]).length > 0 ? '' : accumulator.push({department: currentValue[1]})
	return accumulator
}, [])
console.log(departmentArr)

