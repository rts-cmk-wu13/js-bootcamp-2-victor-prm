# Småopgaver 03 (Niveau 1)

11-02-2019

* Definér funktionen `skjulElementViaCssSelector`:

	* Den skal tage imod ét parameter: `cssSelector`

	* Den skal lede efter et element vha. den modtagede cssSelector.

	* Hvis elementet bliver fundet, skal den sætte dets `display` til `"none"`.

	* Funktionen behøver kun at kunne arbejde med ét element ad gangen.

* Indsæt et par elementer direkte i HTML'en (uden JavaScript).

* Demonstrér at din funktion kan skjule hvilket som helst element ved at kalde den således (disse er bare eksempler):


```javascript
skjulElementViaCssSelector (".produkt  .koebKnap");
skjulElementViaCssSelector (".profil  img");
```

## Ekstraopgave 1:

*(Du kan eventuelt vende tilbage til ekstraopgaven, når du har løst opgaverne i niveau 2)*

* Opret en `"03_ekstra_1"` mappe i Niveau1-mappen og kopiér html, js og css filerne her fra opgave 3.

* Definér funktionen `skjulElement`:

	* Den skal tage imod ét parameter: `element`

	* Hvis den modtagede element-variabel ikke er `null` skal den sætte elementets display til `"none"`.

* Redigér din forrige funktion, `skjulElementViaCssSelector` så den gør følgende:

	* Den skal tage imod ét parameter: `cssSelector`

	* Den skal lede efter et element vha. den modtagede cssSelector.

	* Den skal kalde din anden funktion, `skjulElement` og give den det fundne element som argument.


## Ekstraopgave 2:

*(Du kan eventuelt vende tilbage til ekstraopgaven, når du har løst opgaverne i niveau 2)*

* Opret en `"03_ekstra_2"` mappe i Niveau1-mappen og kopiér html, js og css filerne fra forrige løsning.

Redigér dine funktioner, så de kan manipulere flere elementer på én gang.

Man skal f.eks. kunne kalde en funktion således:

```javascript
skjulElementViaCssSelector (".produkt  img");
```

hvilket bør i dette tilfælde påvirke alle `<img>` tags inden i `".produkt"` elementet.<br>
Hvis du laver denne ekstraopgave bør du nok omdøbe funktionerne, så "Element" står i flertal.