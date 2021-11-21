###定义i
  观察owner设计模式：观察owner(observer)和被观察owner(subject),或说public和subscrible的一种设计模式.被观察owner负责将观察owner保存到容器，或删除, 被观察owner发生改变可以通知他的所有观察owner.这是一种一对多的设计模式.

###实现Demo
看看下面这个小demo吧
```
    class MySubject implements SplSubject{
        private $_observers=[];
        private $_name;
        public function __construct($name) {
            $this->_observers = new SplObjectStorage();
            $this->_name = $name;
        }
        public function attach(SplObserver $observer) {
            $this->_observers->attach($observer);
        }
        public function detach(SplObserver $observer) {
            $this->_observers->detach($observer);
        }
        public function notify() {
            foreach ($this->_observers as $observer) {
                $observer->update($this);
            }
        }
        public function getName() {
            return $this->_name;
        }
    }
    class MyObserver1 implements SplObserver {
        public function update(SplSubject $subject) {
            echo  '观察owner1';
        }
    }
    class MyObserver2 implements SplObserver {
        public function update(SplSubject $subject) {
            echo  '观察owner2';
        }
    }
    class otherClass{
      $observer1 = new MyObserver1();
      $observer2 = new MyObserver2();
      $subject = new MySubject("test");
      $subject->attach($observer1);
      $subject->attach($observer2);
      $subject->notify();
    }```
end, thank you!
