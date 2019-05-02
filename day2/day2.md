- HTML是什么，HTML5是什么
	html是用来描述网页的一种语言；html5是html中的一个版本，丢弃了一些标签，也增加了一些标签
	
- HTML元素标签、属性都是什么概念？

  由尖括号包围、通常成对出现。用来语义化其所包含的元素；属性为html元素提供附加信息。通常以key/value的形式出现，不同的元素有不同的属性。
  
- 文档类型是什么概念，起什么作用？

  声明html版本，帮助浏览器使用哪个版本进行内容解析。<!DOCTYPE> 便指的是采用html5编写。

- meta标签都用来做什么的？

  META元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者及其他元数据。一个页面可以有多个meta，如`<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">` 用来定义文档关键词，用于搜索引擎，`<meta name="author" content="Hege Refsnes">`用来定义页面作者。

- Web语义化是什么，是为了解决什么问题？

  Web语义化是为了达到更好的机读性,让机器可以更好的理解页面结构。

- 链接是什么概念，对应什么标签？

  就是网页跳转,对应a标签。
  
- 常用标签都有哪些，都适合用在什么场景?

  h1~6标题,p段落,img图片,em斜体,strong黑体,q引用,blockquote长引用,br /换行, hr/ 水平线,code代码,pre多行代码,ul-li无序列表,ol-li有序列表, div逻辑划分,a链接。
  
- 表单标签都有哪些，对应着什么功能，都有哪些属性?

  form元素定义表单,中间可以增加input(表单元素).form的属性有action, method, name等等;input的属性有type, name, value等等。

- ol, ul, li, dl, dd, dt等这些标签都适合用在什么地方，举个例子?

  ol-li有序列表;ul-li无序列表;dl-dt-dd定义列表,dt用来表述项目,dd是详细解释.

  ```html
  <dl>
     <dt>计算机</dt>
     <dd>用来计算的仪器 ... ...</dd>
     <dt>显示器</dt>
     <dd>以视觉方式显示信息的装置 ... ...</dd>
  </dl>
  ```

  

