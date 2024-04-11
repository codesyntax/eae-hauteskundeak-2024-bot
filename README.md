# 2024ko hauteskunde bota

Zerbitzaria prestatu. Horretarako jarraitu argibide hauek: [https://on.cypress.io/required-dependencies](https://on.cypress.io/required-dependencies)

Node instalatu zure zerbitzarian, guk [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) erabiltzea gomendatzen dugu.


Pakete hau klonatu eta ingurunea instalatu. 

```sh
$ npm install
```

Zehaztu zure konexio datuak ingurune aldagaietan:

```sh
export CYPRESS_USERNAME=bla
export CYPRESS_PASSWORD=bla
export CYPRESS_RESULT_FILE_PATH=/tmp/Fitxategia.xml
```

Exekutatu testa:

```sh
$ npm run e2e:chrome
```
edo chrome ez baduzu:

```sh
$ npm run e2e:electron
```

