const obj = {
    host : 'localhost',
    user : 'root',
    password : 'admin1234',
    dialect : 'mysql'
};

const mariaDB = {
    ...obj,
    dialect: 'mariadb'
}

console.log(mariaDB);

const oracleDB = Object.assign(
    {},
    obj,
    {dialect:'oracle',charset:'utf8'}
   
);

console.log(oracleDB);