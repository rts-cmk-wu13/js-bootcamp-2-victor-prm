# Småopgaver 02 (Niveau 2)

05-02-2019

## Regler

* Du skal bruge **BEM konventionen.
* Du skal selv skrive al **HTML** og **CSS** *(du får ikke noget udleveret)*.
* Det er ok, hvis det ikke er muligt, at tilføje flere produkter i HTML'en uden at man bliver nødt til at ændre i Javascriptet.
	* Hvis du har tid og overskud, synes jeg du skulle gøre det muligt (vha. Arrays og querySelectorAll funktionen).
* Ét af produkterne skal have en **BEM modifier**, så det skiller sig lidt ud.

## Layout

* Opret 3 produkt-elementer i HTML'en.<br>
Hvert produkt skal have følgende:
	* Navn
	* Pris
	* Billede  *(du finder bare et tilfældigt billede til hvert produkt)*
	* Antal  *(starter med at være 0)*
	* Plus knap ved siden ad Antal
	* Minus knap ved siden ad Antal

## Funktionalitet

* Når man trykker på et produkts **plus-knap** stiger antallet med ét.
* Når man trykker på et produkts **minus-knap** falder antallet med ét.
	* Antallet må ikke komme under 0.

## Ekstraopgave

* Tilføj oplysningen **"Total pris"** (under hver Pris oplysning), som bliver udregnet ud fra **Pris** og **Antal**.<br>Dette er altså total pris per produkt.

## Prioritering

Hvis det giver dig problemer i Javascript, at der er 3 produkter at arbejde med, så sørg bare for, at plus- og minus-knapperne fungerer på ét af produkterne.

Der SKAL dog vises 3 produkter på siden.

Husk at følge **BEM konventionen**