(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{490:function(s,a,e){"use strict";e.r(a);var t=e(30),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"下载go安装包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载go安装包"}},[s._v("#")]),s._v(" 下载go安装包")]),s._v(" "),e("p",[s._v("Golang官网下载地址：https://golang.org/dl/")]),s._v(" "),e("h2",{attrs:{id:"将安装包放到-usr-local目录下-并解压"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将安装包放到-usr-local目录下-并解压"}},[s._v("#")]),s._v(" 将安装包放到/usr/local目录下，并解压")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("tar -zxvf go1.19.4.linux-386.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"将-usr-local-go-bin添加到环境变量种"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将-usr-local-go-bin添加到环境变量种"}},[s._v("#")]),s._v(" 将/usr/local/go/bin添加到环境变量种")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vi /etc/profile\n# 在最后一行添加\nexport GOROOT=/usr/local/go\nexport PATH=$PATH:$GOROOT/bin\n# 保存退出后source一下（vim 的使用方法可以自己搜索一下）\nsource /etc/profile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"执行go-version查看是否安装成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行go-version查看是否安装成功"}},[s._v("#")]),s._v(" 执行go version查看是否安装成功")]),s._v(" "),e("p",[s._v("如果报错如下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("-bash: /usr/local/go/bin/go: /lib/ld-linux.so.2: bad ELF interpreter: No such file or directory\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装glibc.i686即可")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum install glibc.i686\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);