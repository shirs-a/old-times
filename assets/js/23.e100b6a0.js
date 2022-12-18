(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{471:function(s,n,a){"use strict";a.r(n);var e=a(30),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("该模式的思想就是将一个对象作为原型，\n对其进行复制、克隆，产生一个和原对象类似的新对象。")]),s._v(" "),a("p",[s._v("实现对象的复制操作，只需要实现Cloneable接口即可，在JVM中，\n只有实现了这个接口的类才可以被拷贝，否则会抛出CloneNotSupportedException异常。")]),s._v(" "),a("p",[s._v("Cloneable接口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("public interface Cloneable {\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("Cloneable接口是一个空接口，没有要实现的方法，那么我们的克隆方法该\n如何创建呢？由于在java中，所有的类都是Object类的子类，所以我们\n只需要重写Object类中的clone()方法就行了，如下所示。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('public class Prototype implements Cloneable {\n\n    public void write(){\n        System.out.println("this is a prototype method");\n    }\n\n    protected Prototype clone() throws CloneNotSupportedException {\n        Prototype clone = (Prototype) super.clone();\n        return clone;\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("测试类")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("public class PrototypeTest {\n    public static void main(String[] args) {\n        Prototype prototype = new Prototype();\n        try {\n            Prototype clone = prototype.clone();\n            clone.write();\n        } catch (CloneNotSupportedException e) {\n            e.printStackTrace();\n        }\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("输出")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("this is a prototype method\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("值得注意的是，使用clone方法创建的新对象的构造函数是不会被执行的，\n也就是说会绕过任何构造函数（有参和无参），因为clone方法的原理是\n从堆内存中以二进制流的方式进行拷贝，直接分配一块新内存。")]),s._v(" "),a("h3",{attrs:{id:"浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝"}},[s._v("#")]),s._v(" 浅拷贝")]),s._v(" "),a("p",[s._v("浅拷贝只会拷贝对象本身相关的基本类型和string类型的数据，\n数组引用和对象引用的成员变量都不会被拷贝。这样会存在拷贝\n之后的对象会和原始对象共用一部分数据的情况，因为一个变量\n不是静态的但却可以多个对象同时修改它的值。")]),s._v(" "),a("p",[s._v("浅拷贝实现类")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('public class ShallowClone implements Cloneable {\n\n    private List<String> nameList = new ArrayList<>();\n\n    int age = 24;\n\n    String address = "西安";\n\n    public void addName(String name){\n        nameList.add(name);\n    }\n\n    public void printNames(){\n        for (String name:nameList){\n            System.out.println(name);\n        }\n    }\n\n    public void changeAge(int age){\n        this.age = age;\n    }\n\n    public void changeAddress(String address){\n        this.address = address;\n    }\n\n    protected ShallowClone clone() throws CloneNotSupportedException {\n        ShallowClone clone = (ShallowClone) super.clone();\n        return clone;\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("p",[s._v("测试类")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('public class PrototypeTest {\n    public static void main(String[] args) {\n        ShallowClone origin = new ShallowClone();\n        try {\n            ShallowClone shallowClone = origin.clone();\n            origin.addName("shirs");\n            shallowClone.addName("shirs_v2");\n            origin.printNames();\n            origin.changeAge(30);\n            origin.changeAddress("深圳");\n            System.out.println("origin.age:"+origin.age);\n            System.out.println("origin.address:"+origin.address);\n            System.out.println("--------");\n            shallowClone.printNames();\n            System.out.println("shallowClone.age:"+shallowClone.age);\n            System.out.println("shallowClone.address:"+shallowClone.address);\n        } catch (CloneNotSupportedException e) {\n            e.printStackTrace();\n        }\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("输出")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("shirs\nshirs_v2\norigin.age:30\norigin.address:深圳\n--------\nshirs\nshirs_v2\nshallowClone.age:24\nshallowClone.address:西安\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("如上可以看到，拷贝后的对象和原对象公用一个引用对象，而基础数据类型\n和String类型的变量则重新创建了。")])])}),[],!1,null,null,null);n.default=t.exports}}]);