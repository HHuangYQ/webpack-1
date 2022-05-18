import x from './x.js'
import png from './assets/1.png'

 const div = document.getElementById('app')

 div.innerHTML=`
 <img src="${png}">
 `
//用import括号去加载一个文件，然后会得到一个promise，promise.then成功之后做xxx失败之后做xxx
 const button = document.createElement('button')
 button.innerText = '懒加载'
 button.onclick = ()=>{
 const promise = import('./lazy')
 promise.then((module)=>{
    const fn = module.default
    fn()
},()=>{
    console.log('模块加载错误')
})
 }

 div.appendChild(button)