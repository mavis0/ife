- 盒模型的概念
	
	html中每一个元素都是以盒子的形式出现在网页中。包括margin， border， padding， content
	
- inline， block和inline-block的概念

  行内元素：跟随文档流流动，可以被分成两行。设置宽高无效，但margin，border，padding有效
  
  块元素：可以理解为前后都有分行符，独占一行，盒模型全适用。
  
  行内块元素：随文档流流动，但不可被分成两行。盒模型全适用。
  
- 内外边距，宽度，高度，box-sizing等属性

  ![盒模型](<https://mdn.mozillademos.org/files/13649/box-model-alt-small.png>)

  可以使用box-sizing使得width和height属性指整个盒子。

- 浮动，清除浮动

  浮动指的是将元素脱离正常的文档布局流，吸附到其父容器的侧边。在多列布局时要注意优先级，最先声明的拥有高的优先级。

  清楚浮动采用属性clear，指的是采用该属性的元素左边/右边/两边都不能有浮动元素。

- 如何使用浮动进行布局

  两列布局便是一个float:left, float:right 

  三列布局float:left float:left float:right

  另：本次的作业完成度还是不高，最后一份简历明知道应该使用表格做吧，可是表格的许多特性还不清楚，也不知道表格内是否可以浮动，所以留着以后吧，don't mean to me.哈哈哈哈









