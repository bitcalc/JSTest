function src() {
    var t1 = new URL(location).searchParams.get('source')
    return t1
}

var t1 = src()
display.innerHTML = t1          // 1 跨站脚本（XSS）

function f1(operation, data) {
    return eval(data)           // 2 代码注入
}
f1("val", src())

function g(cmd, str, obj) {
    return f(cmd, str, obj)
}
function f(operation, data, obj) {
    let f2 = "e" + operation    // "e"+"val"
    if (obj) {
        return window[f2](data) // 3 代码注入
    }
    let f3 = window[f2]         //window.eval
    return freal(f3, data)
}
function freal(f, arg) {
    return f(arg)               // 4 代码注入
}

g("val", src(), true)           // "val"
g("val", src())                 // "val"
