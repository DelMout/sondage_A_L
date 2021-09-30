# sondage_A_L

Sondage soirée Jeux à l'Amicale Laïque

## frontend

Vue.js 3
Vuestic UI (layout)

## Create database 'amicale_laique'

-   MySQL server must be installed.
-   Replace |user_name| by the name of the user in instructions below.
-   Use the file **database.sql**
-   Connect to your MySQL server (the path is like MySQL/"MySQL Server 8.0"/bin) on your operating terminal (replace |path of the file| by your path) :

```
...bin>mysql -u |user_name| -p<|path of the file database.sql|
```

-   Type your password

**OR**

```
...bin>mysql -u |user_name| -p
```

-   Type your password

```
mysql>SOURCE |path of the file database.sql|
```
