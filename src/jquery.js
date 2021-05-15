
window.jQuery=function(selector){
   const elements=document.querySelectorAll(selector)
   //不直接返回elements,而是API可以操作elements
   //jQuery接受一个选择器,返回对象去操作elements
   const api={
     //这里用到了闭包,访问了外部的变量  
   addClass(className){
   for(let i=0;i<elements.length;i++){
    elements[i].classList.add(className)
   }
   return undefined
   }
   }
return api 
}
  