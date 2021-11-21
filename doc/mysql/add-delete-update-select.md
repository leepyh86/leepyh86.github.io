##常用基础 - 增删改查基本语句

###插入数据记录
有了数据表后，这张表是空的，接下来我们要通过INSERT语句往数据表插入数据：
```
      /*建个学生表*/
      CREATE TABLE student(
	     name VARCHAR(10),
	     gender TINYINT(1), /*性别 1=男 2=女*/
	     birthday DATE
      );
      /*插入一条学生数据*/
      INSERT INTO student(name,gender,birthday) VALUES('Jay', 1, '1999-09-09');
      /*再来一条，但这位学生没有出生，因为这位女同学不想透露*/
      INSERT INTO student(name,gender) VALUES('May', 2);
总结：在INSERT INTO后面写表名，然后括号，括号里面是要插入数据的字段名称，后面再来个VALUES关键字加括号，括号就是与字段对应的数据值


###基本的数据查询
紧接着上面，插入数据后就可以查询到数据了：查询全部学生数据
```
     SELECT * FROM student;
      /*输出结果*/
      +------+--------+------------+
      | name | gender | birthday   |
      +------+--------+------------+
      | Jay  |      1 | 1999-09-09 |
      | May  |      2 | NULL       |
      +------+--------+------------+
其实SQL挺语义化的，有点像读英语句子一样，比较好记，FROM后面是表名哦

###查询全部学生的名字
在SELECT后面明确声明指定的字段就行了
```
       SELECT name FROM student;
       /*输出结果*/
         +------+
         | name |
         +------+
         | Jay  |
         | May  |
         +------+
        /*查询全部学生的名字和性别*/
        SELECT name,gender FROM student;
        /*输出结果*/
        +------+--------+
        | name | gender |
        +------+--------+
        | Jay  |      1 |
        | May  |      2 |

### 批量插入数据
可以一次性插入多条数据：
```
     INSERT INTO student(name,gender,birthday) VALUES('Kay', 1, '1989-06-09'),('Mars', 2, '2000-02-02');

与基本的插入数据语句的区别就是VALUES后面加多个括号，其实每个括号里面的就是一条数据记录的各个值，后面还能加许多括号，自己试吧

###更新数据记录
就是修改数据：
```
     /*将指定姓名的同学性别更新为女*/
     UPDATE student SET gender = 2 WHERE name = 'Jay';

     /*将所有姓名包含ay的同学性别更新为男*/
     UPDATE student SET gender = 1 WHERE name LIKE '%ay%';

     /*无条件地将整张表的所有数据生日字段的值都设置为1990年1月3号*/
     UPDATE student SET birthday = '1990-01-03';
