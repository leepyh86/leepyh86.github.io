###mysql登入
通过输入命令:  
```
    mysql -h 127.0.0.1 -u root -p```
###查看数据库
通过输入命令:  
```
     show databases;```
### 创建数据库
通过输入命令： 
```
     create database xxx default charset utf8;```
### 删除数据库
通过输入命令： 
```
    drop xxx;```

### 创建表
通过输入命令：
```
	   create table(
	     name VARCHAR(10),
		 birthday DATE
	   );
	   show tables;//查看所有表
	   show table 表名;```

### 删除表
通过输入命令：
```
     drop table 表名;
