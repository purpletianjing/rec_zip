ALTER TABLE userDetail ADD COLUMN gender ENUM("F", "M");
ALTER TABLE userDetail DROP COLUMN id;
ALTER TABLE userDetail ADD COLUMN userId INT UNIQUE NOT NULL FIRST;