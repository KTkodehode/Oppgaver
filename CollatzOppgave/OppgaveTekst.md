# Sommeroppgave for Modul C - Collatz

Collatz formodning hevder følgende:

# Start med et vilkårlig positivt tall:

Dersom tallet er partall, del tallet på 2.
Dersom tallet er oddetall, gang tallet med 3 og pluss på 1.
Repeter prosessen over på det resulterende tallet.

Alle tall vil til slutt ende på 1, og bli værende i en evig loop
(1 -> 4 -> 2 -> 1)

Du skal lage en nettside hvor brukeren kan prøve ut Collatz formodning:

Siden skal inneholde et number input field hvor bruker kan skrive inn tallet som skal testes og en submit knapp.

Med Javascript skal du ta imot brukeren sitt tall, og kjøre Collatz prosedyren på det. Koden din skal også ta vare på det høyeste tallet som nås i sekvensen, og hvor mange steg det tok å komme til 1.

Høyeste tall som ble nådd og antall steg det tok å komme til 1 skal settes i en et HTML element og vises til bruker som et resultat:

“Utfører Collatz funksjonen på tallet (BRUKEREN SITT TALL HER)”

“Antall steg før tallet endte på 1: (ANTALL STEG)”
“Høyeste tall nådd i sekvensen: (HØYESTE TALL)”

Style siden med CSS.

Anbefaler denne YouTube linken om temaet.

Lykke til og les oppgaven godt før du setter i gang!

EXTRA CREDITS:

Istedenfor å kjøre Collatz funksjonen kun på brukerens tall, kjør funksjonen på ALLE tall fra 1 til og med tallet brukeren skrev inn.

Koden din skal plukke opp:
Tallet som nådde høyest antall steg og hvor mange steg det var.
Tallet som nådde det høyeste tallet og hvor høyt det tallet var.

Logg deretter følgende som resultat:

“Utfører Collatz funksjonen på alle tall fra 1 til (BRUKERENS TALL)”

“Tallet som nådde flest steg var (TALLET SOM NÅDDE FLEST STEG) med (ANTALL STEG)”

“Tallet som nådde høyeste tall var (TALLET SOM NÅDDE DET HØYESTE TALLET) som nådde en topp på (DET HØYESTE TALLET)”
