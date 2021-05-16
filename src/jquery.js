
window.jQuery=function(selectorOrArray){
  let elements
  if(typeof selectorOrArray==='string'){
    elements=document.querySelectorAll(selectorOrArray)
  }else if(selectorOrArray instanceof Array){
    elements=selectorOrArray
  }

   //不直接返回elements,而是API可以操作elements
   //jQuery接受一个选择器,返回对象去操作elements

   /*    const api={
     //这里用到了闭包,访问了外部的变量  
   addClass(className){
   for(let i=0;i<elements.length;i++){
    elements[i].classList.add(className)
   }
   return this//链式操作方法
   }
   }
return api 
} */
//高级写法写法
return{
  //这里用到了闭包,访问了外部的变量
  oldApi:selectorOrArray.oldApi , //把oldApi放到api身上
addClass(className){
for(let i=0;i<elements.length;i++){
 elements[i].classList.add(className)
}
return this//链式操作方法
},
find(selector){
  let array=[]
  for(let i=0;i<elements.length;i++){
    const elements2=Array.from(elements[i].querySelectorAll(selector))
  array=array.concat(elements2)
  }
  array.oldApi=this//this就是旧的Api,把旧的API放在数组身上
  const newApi=jQuery(array)
  return newApi
},
end(){
  return this.oldApi//this就是新的api
},
//遍历每一个元素
each(fn){
  for(let i=0;i<elements.length;i++){
    fn.call(null,elements[i],i)
  }
},
//怎么寻找爸爸
parent(){
  const array=[]
  this.each((node)=>{
    if(array.indexOf(node.parentNode)===-1){
      array.push(node.parentNode)
    }
  })
return jQuery(array)
},
children(){
const array=[]
this.each((node)=>{
  //把任务拆开放在队列里面
  array.push(...node.children)
})
return jQuery(array)
},
print(){
  console.log(elements)
},
}
}