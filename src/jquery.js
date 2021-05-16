
window.$ = window.jQuery = function (selectorOrArray) {
  let elements;
  if (typeof selectorOrArray === 'string') {
    elements = document.querySelectorAll(selectorOrArray)
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }
  const api = Object.create(jQuery.prototype)
  //const api ={_proto_:jQuery.prototype}
  Object.assign(api, {
    elements: elements,
    oldApi: selectorOrArray.oldApi
  })
  return api
};
//不直接返回elements,而是API可以操作elements
//jQuery接受一个选择器,返回对象去操作elements
//等于这种写法api.oldApi=selectorOrArray
jQuery.fn = jQuery.prototype = {
  constructor: jQuery,
  addClass(className) {
    for (let i = 0; i < this.elements.length; i++) {
      const element2 = this.elements[i];
      element2.classList.add(className);

    }
    return this//链式操作方法
  },
  find(selector) {
    let array = []
    for (let i = 0; i < this.elements.length; i++) {
      const elements2 = Array.from(this.elements[i].querySelectorAll(selector))
      array = array.concat(elements2)

    }

    array.oldApi = this//this就是旧的Api,把旧的API放在数组身上
    const newApi = jQuery(array)
    return newApi
  },
  end() {
    return this.oldApi//this就是新的api
  },
  //遍历每一个元素
  each(fn) {
    for (let i = 0; i < this.elements.length; i++) {
      fn.call(null, this.elements[i], i)
    }
  },
  //怎么寻找爸爸
  parent() {
    const array = []
    this.each((node) => {
      if (array.indexOf(node.parentNode) === -1) {
        array.push(node.parentNode)
      }
    })
    return jQuery(array)
  },
  children() {
    const array = []
    this.each((node) => {
      //把任务拆开放在队列里面
      array.push(...node.children)
    })
    return jQuery(array)
  },
 //print() {
    //console.log(elements.this)
  //},
};

