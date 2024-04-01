# Getting Started

### navigate to `docker-compose.yaml` is in the `PostgreSql_with_postgis` folder if you are in root directory.

```bash
cd PostgreSql_with_postgis
```

After that run this command to make sure you've pulled all the image and the containers are up and running.

```bash
docker-compose up
```

<br>


# Access Adminer

- Go to `http://localhost:8080` to access Adminer portal.
- Enter respective credentials after selecting system as `MySQL` and hit login
- You are connected to mysql GUI and good to go now!

# Access PostgreSQL shell in container

**follow these steps to enable PostgreSQL shell:**

Navigate to the container names `db-1`

Open `Exec` in Mac/Linux or `Terminal` in Windows where you can interact with the container and run the following commands.

```bash
psql -U sunny -p 5432 -h db -d theekke -c "SELECT version();"
```

- `-U sunny`: Specifies the PostgreSQL username as `sunny`.

- `-p 5432`: Specifies the port number (5432) on which the PostgreSQL server is running. If the port is `5432` then this flag is optional.

- `-h db`: Specifies the host as `db` where the PostgreSQL server is located.

- `-d theekke`: Specifies the name of the PostgreSQL database as `theekke`.

- `-c "SELECT version();"`: Executes the SQL command `SELECT version();` on the specified database.

Running this command will prompt you to enter the password. Enter `POSTGRES_PASSWORD` env var value from docker compose file. And, you are good to go!

Output after correct password:

```bash
                                                              version                                                           
   
--------------------------------------------------------------------------------------------------------------------------------
---
 PostgreSQL 14.1 (Debian 14.1-1.pgdg110+1) on aarch64-unknown-linux-gnu, compiled by gcc (Debian 10.2.1-6) 10.2.1 20210110, 64-b
it
(1 row)
```

# Check PostGIS Installation

To verify if PostGIS is installed correctly, run the following command:

```bash
psql -U sunny -p 5432 -h db -d theekke -c "CREATE EXTENSION postgis;"
```

Explanation of Flags:

- `-U sunny`: Specifies the username `sunny` for connecting to the PostgreSQL database. This should match the username defined in the `POSTGRES_USER` environment variable in the docker-compose file.
- `-p 5432`: Specifies the port number (`5432`) on which the PostgreSQL server is running. By default, PostgreSQL uses port `5432`. If the port is the default one, this flag is optional.
- `-h db`: Specifies the host (`db`) where the PostgreSQL server is located. In this case, `db` is the name of the PostgreSQL service defined in the docker-compose file.
- `-d theekke`: Specifies the name of the PostgreSQL database (`theekke`) to connect to.
- `-c "CREATE EXTENSION postgis;"`: Executes the SQL command `CREATE EXTENSION postgis;` in the specified database. This command creates the PostGIS extension, which enables spatial functionality in PostgreSQL.

Running this command will create the PostGIS extension in the specified database. If successful, it means PostGIS is installed correctly.


Now, you can run postgresql with postgis related commands here.