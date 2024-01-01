# Getting Started

### navigate to `docker-compose.yml` is in the mongoDB folder if you are in root directory.

```bash
cd mongoDB
```

After that run this command to make sure you've pulled all the image and the containers are up and running.

```bash
docker-compose up
```

<br>


# Connect using MongoDB Compass GUI client

- Download [MongoDB Compass](https://www.mongodb.com/products/tools/compass)
- Enter this connection string with correct `username` and `password` and hit connect.
```bash
mongodb://<username>:<password>@localhost:27017
```
- That's all you need to do to connect to mongoDB Compass GUI client.

# Access the mongo shell via docker

**follow these steps to enable mongo shell:**

Navigate to the container names `mongo`

Open `Exec` where you can interact with the container and run the following commands.

Firstly, let's shift to root. (Otherwise you might not be able to connect as you wont't have root permissions)
```bash
su
```


Now, we can connect to the mongo using this:
```bash
mongosh -u root -p example --host mongo
```

- `-u root` this is the username that we have provided in the compose file with `MONGO_INITDB_ROOT_USERNAME: root` env var
- `-p example` this is the password that we have provided in the compose file with `MONGO_INITDB_ROOT_PASSWORD: example` env var

After running this you will see the following output:

```bash
Current Mongosh Log ID: 65932fefdabd58e8ac600ac8
Connecting to:          mongodb://<credentials>@mongo:27017/?directConnection=true&appName=mongosh+2.1.1
Using MongoDB:          7.0.4
Using Mongosh:          2.1.1

For mongosh info see: https://docs.mongodb.com/mongodb-shell/


To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

------
   The server generated these startup warnings when booting
   2024-01-01T21:34:05.441+00:00: /sys/kernel/mm/transparent_hugepage/enabled is 'always'. We suggest setting it to 'never'
   2024-01-01T21:34:05.441+00:00: vm.max_map_count is too low
------

test>
```

Now, run `show dbs` and you will get the list of dbs as follows:

```bash
test> show dbs
admin   100.00 KiB
config   12.00 KiB
local    72.00 KiB
```

Now, you can run mongodb related commands here