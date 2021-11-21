###1.什么叫策略模式？
抽象接口定义的方法，实现某一个功能有多种算法else策略.这些实现由不同的子类complete.根据需求由调用不同的策略。交由策略类来处理，根据参数获取不同的策略对象instance.

###2.使用工厂模式的好处?
隐藏了创建过程的复杂度，不需要直接new类就可以获取想要类的实例。
*  隐藏Specific className，很多类隐藏得很深的，而且可能会在后续版本换掉，子类可以修改，可以添加Other subclass，隐藏细节.
*  aviod你辛苦的准备构造方法的参数
* 这个策略类可以被config成其它类

最后来句重要的
new XXX(),也是一种硬编码！！！

###3.Demo display
好了废话这么多也许你早就不耐烦了。那么直接上代码看下一个demo吧.
```
        /**抽象策略角色 
        * Interface RotateItem 
        */  

        interface  Product_strategy{
          public function productType();
        }



        /**Detail策略角色——X产品 
        * Class XItem 
        */  
        class XItem implements Product_strategy  
        {  


            public function productType()  
            {  
              echo "我是X产品，我非惯性旋转了。<br/>";  
            }  
        }  

        /**Detail策略角色——Y产品 
        * Class YItem 
        */  
        class YItem implements Product_strategy  
        {  
            function productType()  
            {  
              echo "我是Y产品，我<span style='color: #ff0000;'>不能</span>惯性旋转。<br/>";  
            }  

        }  

        /**Detail策略角色——XY产品 
        * Class XYItem 
        */  
        class XYItem implements Product_strategy  
        {  
            function productType()  
            {  
              echo "我是XY产品，我惯性旋转。<br/>";  
            }  
        }  

        class contextStrategy  
        {  
            private $item;  

            public function getItem($item_name)  
            {  
              try  
              {  
                $class=new ReflectionClass($item_name);  
                $this->item=$class->newInstance();  
              }  
              catch(ReflectionException $e)  
             {  
               $this->item="";  
             }  
        }  

            public function productType(){
                $this->item->productType();
            }
        }  
        class otherClass{
            $strategy = new contextStrategy();
            $strategy->getItem('XItem');
            $strategy->productType();

            $strategy->getItem('YItem');
            $strategy->productType();

            $strategy->getItem('XYItem');
            $strategy->productType();
        }
