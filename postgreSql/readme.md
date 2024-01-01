# Getting Started

### navigate to `docker-compose.yaml` is in the `postgreSql` folder if you are in root directory.

```bash
cd postgreSql
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

Open `Exec` where you can interact with the container and run the following commands.

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
---------------------------------------------------------------------------------------------------------------------------
 PostgreSQL 16.1 (Debian 16.1-1.pgdg120+1) on aarch64-unknown-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
(1 row)
```

Now, you can run postgresql related commands here.