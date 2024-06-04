create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  lastname varchar(255) not null ,
  firstname varchar(255) not null ,
  password varchar(255) not null
);

create table student (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  lastname varchar(255) not null ,
  firstname varchar(255) not null ,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

create table song (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  genre varchar(500) not null
);
