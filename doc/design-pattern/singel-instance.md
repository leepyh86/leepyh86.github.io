###1.什么叫单例?
单例从字面上理解为单个实例，也就是说只负责创建类的单个实例.为什么要这么做，有什么好处呢, 这要看actually场景了.最常见的一个实例就是数据库连接类.假如在这种case下不使用单例的话，每次访问数据库就创建一个实例.
###2.使用单例的优势?
前面讲了单例就是只实例一次。那这样的设计模式有什么优势呢，适合某些特定的类.就说客户端同服务端交互，只要设计数据读写，这时候离不开数据库的访问.那么每个用户访问一次都得创建一次数据库连接，实他们只要访问同一台db服务器，创建这些实例的过程都是一样的，这时候就考虑使用单例子，减少了实例的创建.

###3.实现
好了废话这么多也许你早就不耐烦了.那么直接上代码讲解单例子的实现步骤.

```
class singelInstance{
        private static $singeInstance = null;
        private function __construct(){
        }
        private function __clone(){
        }

        public static function getSingeInstance(){
            if(self::$singeInstance != null){
                self::$singeInstance = new self();


            }
            return self::$singeInstance;
        }
   }
```
