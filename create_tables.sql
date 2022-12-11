CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table Categories(
	id bigserial primary key,
	name varchar(200) unique not null
	);

create table Products( 
	id uuid default uuid_generate_v4() primary key,
	name varchar(200) not null,
	price decimal(8,2) not null,
	category_id integer,
	foreign key (category_id) references Categories(id) ON DELETE CASCADE
	);

