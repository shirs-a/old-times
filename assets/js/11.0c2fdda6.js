(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{465:function(n,t,s){"use strict";s.r(t);var a=s(30),i=Object(a.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h3",{attrs:{id:"概要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[n._v("#")]),n._v(" 概要")]),n._v(" "),s("p",[n._v("如果要问spring boot和传统的ssm项目有什么区别，那就是spring boot\n基于原始的spring做了进一步的封装，简化了ssm项目繁琐的配置，只需要\n一个启动类，就可以运行的我们的后端项目，初次接触spring boot的朋友\n会发现，只是运行了启动类的main方法，我们的项目就跑了起来，关于\napplication.yaml文件中的一大堆配置，和我们庞大的业务代码，多多少少\n带了一点迷茫，那么，spring boot项目是如何启动运行的呢？它帮我们封装\n了哪些信息呢？application.yaml文件的配置又是什么意思呢？我们可以逐一\n了解下。")]),n._v(" "),s("p",[n._v("新建一个spring boot项目，最简单的情况下，一个启动类长这样。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class DemoApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br")])]),s("p",[n._v("可以看到，类中有一个run方法，和一个@SpringBootApplication注解，\n关于spring boot的启动原理，很多人会从@SpringBootApplication说起，\n讲到这是一个复合注解，balala...，其实，我们可以从run方法看起~")]),n._v(" "),s("h3",{attrs:{id:"springapplication-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springapplication-run"}},[n._v("#")]),n._v(" SpringApplication.run()")]),n._v(" "),s("p",[n._v("点进run方法，我们可以看到如下的方法，其中，比较关键的有prepareContext和\nrefreshContext方法。")]),n._v(" "),s("img",{attrs:{src:"/old-times/png/springboot_v2/v1.png"}}),n._v(" "),s("p",[n._v("点进prepareContext方法，并在249行打上断点，在启动项目是，可以\n看到sources获取的是启动类的全类名。")]),n._v(" "),s("img",{attrs:{src:"/old-times/png/springboot_v2/v2.png"}}),n._v(" "),s("p",[n._v("prepareContext方法，主要将listeners、environment、\napplicationArguments、banner等重要组件与上下文对象关联。")]),n._v(" "),s("p",[n._v("refreshContext刷新容器。")]),n._v(" "),s("p",[n._v("待完善....")]),n._v(" "),s("h3",{attrs:{id:"springbootapplication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springbootapplication"}},[n._v("#")]),n._v(" @SpringBootApplication")]),n._v(" "),s("p",[n._v("@SpringBootApplication是一个复合注解，我们点进去可以看到它的组成如下。")]),n._v(" "),s("img",{attrs:{src:"/old-times/png/springboot_v2/v3.png"}})])}),[],!1,null,null,null);t.default=i.exports}}]);