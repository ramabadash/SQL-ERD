# Two days Nodejs SQL drill

---

## Use Local - Preparation of the work environment:

### Without MySQL on your computer : ❌🦈

#### Build image:

    docker build -t node-api:v1 .

#### create network

    docker network create node-api-network

#### Start MYSQL:

    docker run \
    --rm \
    -d \
    --name mysql_server \
    -e MYSQL_DATABASE='test_db' \
    -e MYSQL_USER='root' \
    -e MYSQL_PASSWORD='secret' \
    -e MYSQL_ROOT_PASSWORD='secret' \
    --network node-api-network \
    mysql:8.0

#### Start node-api

    docker run \
    --rm \
    --name node-app \
    --network node-api-network \
    -p 3000:3000 \
    -v $(pwd):/app \
    node-api:v1

### Stop running container using

    docker stop node-app
    docker stop mysql_server

### With MySQL on your computer : ✔🦈

### start using

    docker-compose up

### and stop using

    docker-compose down

### Connect with this details:

    user : student
    password: secret
    port: 3304

---

## Endpoints -

### 📍 GetsRouter -

```
Return an array with match objects:
[{"idPupils":2,"Name":"Rama","Classes_idClasses":2}]
If match not found will return empty array.
If id is missing will return status code 400 and message "Missing ID"
```

#### ✔ GET /teacher/:teacherID - Get teacher by id on request params

#### ✔ GET /class/:classID - Get class by id on request params

#### ✔ GET /pupil/:pupilID - Get pupil by id on request params

#### ✔ GET /subject/:subjectID - Get subject by id on request params

### 📍 PostRouter -

#### ✔ POST /new/pupil :

```
request.body = {
    "idPupils": 5, "Name": "Dan", "Classes_idClasses": 23
}
```

#### ✔ POST /new/teacher :

```
request.body = {
    "idTeachers": 5, "Name": "Tova", "Phone": "0521356166"
}
```

### 📍 PutRouter -

#### ✔ PUT update/pupil/:pupilID :

**Update pupil by id on request params**
**Body Optional - Can send Name / Classes_idClasses / Both**

```
request.body = {
    "Name": "Dan", "Classes_idClasses": 23
}
```

#### ✔ PUT update/class/:classID :

**Update class by id on request params**

```
request.body = {
    "Name": "Math-class"
}
```

### 📍 DeleteRouter -

#### ✔ DELETE /remove/pupil/:pupilID - Delete pupil by id on request params

#### ✔ DELETE /remove/teacher/:teacherID - Delete teacher by id on request params

---

## Future : 🔮

- **More generic functions - GET, PUT, DELETE**
- **DB seeding on connection**
- **ERD repair?**
- **Error handling**
- **Good validation for inputs (especially in the body)**

---

## Task:

### Please build an `ERD` for the senior class at the school where you attended:

### Minimum requirements:

1. Contain the following tables:

- Teachers
- Pupils
- Subjects
- Classes

2. Think about the following when creating your ERD:

- A teacher can teach a number of Subjects.
- A Pupil can learn a number of Subjects.
- A Pupil can only be associated with one class.
- One class contains several Pupils.

## EndPoints:

### GETS

- [x] GET /:teacherID
- [x] GET /:classID
- [x] GET /:pupilID
- [x] GET /:subjectID
- Will reply with information about the specific object

### POSTS

- [x] POST /new/pupil
- [x] POST /new/teacher
- Will create a new object at the correct table with information in the `req.body`

### PUTS

- [x] PUT /update/pupil/:pupilID
- [x] PUT /update/class/:classID
- Will update the object at the correct table with information in the `req.body`

### DELETS

- [x] DELETE /remove/pupil/:pupilID
- [x] DELETE /remove/teacher/:teacherID
- Will delete the object at the correct table.
