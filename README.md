# 2024ko hauteskunde bota

2024ko EAEko hauteskundeen emaitzen datuak era automatikoan deskargatzeko robota duzu hau.

Emaitzak XML formatuan emango ditu Eusko Jaurlaritzak hedabideentzat prestatutako intranet baten, baina fitxategi hori deskargatzeko intranetean login egin behar da.

Logina egiteko, baina, ezin da HTTP Basic autentifikazioa erabili. Ezta JWT tokenak edo beste edozein autentifikazio modu estandar ere: intranetean login egin behar da eta orduan deskargatu daiteke fitxategia. Nabigatzailean jartzen diren Cookie batzuen bidez kontrolatzen da logina eginda dagoen ala ez.

Beraz, nabigatzailearen erabilera simulatzen duen [Cypress](https://cypress.io) erabiliz, fitxategi hori eskatu eta formularioa betetzen duen robot hau prestatu dugu.

## Instalazio argibideak

1. Lehenengo zerbitzaria prestatu behar duzu Cypress ondo exekutatu dadin. Horretarako jarraitu argibide hauek: [https://on.cypress.io/required-dependencies](https://on.cypress.io/required-dependencies)

2. [Node.js](https://nodejs.org/en) instalatu zure zerbitzarian, guk [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) erabiltzea gomendatzen dugu horretarako.

3. Pakete hau klonatu eta ingurunea instalatu.

```sh
$ npm install
```

4. Zehaztu zure konexio datuak ingurune aldagaietan:

```sh
export CYPRESS_USERNAME=bla
export CYPRESS_PASSWORD=bla
export CYPRESS_RESULT_FILE_PATH=/tmp/Fitxategia.xml
```

5. Zure ordenagailuan Chrome nabigatzailea instaluta baduzu, horrela exekutatu dezakezu deskarga:

```sh
$ npm run e2e:chrome
```

6. Zerbitzari baten instalatu baduzu eta Chrome ez baduzu, Cypressek instalatzen duen `electron` erabili dezakezu, horrea:

```sh
$ npm run e2e:electron
```

Bi kasuetan deskargatutako fitxategia `CYPRESS_RESULT_FILE_PATH` aldagaian definitu duzun tokian izango duzu.

## Lizentzia

[MIT Lizentzia](./LICENSE)

## Kredituak

![tokikom](./assets/tokikom.png)

Produktu honen garapena [Tokikom](https://tokikom.eus)ek finantzatu du.
