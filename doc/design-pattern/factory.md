###1.什么叫工厂模式？
定义一个类创建一个专门生成某个接口不同实现的complete的public方法.

###2.使用工厂模式的好处?
隐藏了创建过程的复杂度，不需要直接new类就可以获取想要类的实例。
*  隐藏detail类名，很多类隐藏得很深的，而且可能会在后续版本换掉
*  aviod you辛苦的准备构造方法的参数
*  这个工厂类可以被config成Other Class
*  这个工厂对象可以被传递

最后来句重要的
new XXX,actually也是一种硬编码！！！

###3.Specific 实现
好了废话这么多也许你早就不耐烦了。那么直接上代码看下一个实例吧.
创建一个接口
```
    interface Shape{
        public function getArea();
        public function getCircumference();
    }
    class Rectangle implements shape{/*Rectangle类实现接口*/
        private $width;
        private $height;
        public function __construct($width, $height){
            $this->width = $width;
            $this->height = $height;
        }        public function getArea(){
            return $this->width*$this->height;
        } 

        public function getCircumference(){
            return 2*($this->width + $this->height);
        }
    }
    class Circle implements shape{/*Circle类实现接口*/
        private $radius=0;
        public function __construct($radius){
            $this->radius = $radius;
        }
        public function getArea(){
            return M_PI*pow($this->radius, 2);
        }

        public function getCircumference(){
            return 2*M_PI*$this->radius;
        }
     }
    class FactoryShape{/*FactoryShape工厂类生产实例*/

        public static function create(){
            switch(func_num_args()){
                case 1:
                    return new Circle(func_get_arg(0));
                case 2:
                    return new Rectangle(func_get_arg(0), func_get_arg(1));

             default:
                 # code....
                 break;
             }
         
        }
    }
    class otherClass{/*外部类调用*/ 
        $rect = FactoryShape::create(5, 5);/*只需要通过参数传递到工厂方法就可以获取想要的实例，不需要直接new类本身，减去繁琐的构造参数，减少系统的耦合度，方便Other classs using，也方便接口的扩展*/
        $area = $rect->getArea();
        $circumference = $rect->getCircumference();
        echo "面积是：".$area;
        echo "周长是：".$circumference;
    }
```
