const api=jQuery('.test')//不返回元素而是返回API对象
api.addClass('red').addClass('blue').addClass('green')//链式操作(调用函数,本身还能再返回api又可以继续调用)遍历所有刚才获取到的元素,添加'.red'
//同时api.addClass.call(api,参数)所有这里api就是this
//为什么可行
 const x1=jQuery('.test').find('.child')
console.log(x1)
x1.addClass('red') 

const x =jQuery('.test')
.find('.child').addClass('red')
.end()//返回到原来的
.addClass('yellow')

x.each((div)=>console.log(div))

x.parent().print()

x.children().print()