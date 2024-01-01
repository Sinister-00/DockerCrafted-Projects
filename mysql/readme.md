# Getting Started

### navigate to `docker-compose.yaml` is in the `mysql` folder if you are in root directory.

```bash
cd mysql
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

# Access MySQL monitor

**follow these steps to enable sql shell:**

Navigate to the container names `db-1`

Open `Exec` where you can interact with the container and run the following commands.

```bash
mysql -u sunny -p --host=db
```


- `-u sunny`: Specifies the MySQL user as `sunny` This is the username that will be used when connecting to the MySQL server.

- `-p`: Prompts for the MySQL user's password. **This flag indicates that the user's password will be entered interactively after running the command.**

- `--host=db`: Specifies the host where the MySQL server is running. In this case, it's set to `db`, **which is likely the name of the service defined in the `docker-compose.yaml` file**.

Running this command will prompt you to enter the password. Enter `MYSQL_PASSWORD` env var value from docker compose file. And, you are good to go!

```bash
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.2.0 MySQL Community Server - GPL

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> 
```

# List all the databases

Run the following query to list all databases:

```bash
mysql> SHOW DATABASES;
```

Output:

```bash
mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| performance_schema |
| sampleDB           |
+--------------------+
3 rows in set (0.02 sec)
```

Now, you can run mysql related commands here