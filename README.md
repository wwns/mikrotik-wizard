# MikroTik Network Designer

Przeglądarkowy projektant sieci MikroTik i generator konfiguracji RouterOS v7. Aplikacja działa jako statyczna strona — nie wymaga instalacji ani kompilacji.

## Uruchomienie

- **Lokalnie:** otwórz `mikrotik wizard.html` w przeglądarce.
- **GitHub Pages:** w ustawieniach repozytorium włącz Pages dla gałęzi `main` i katalogu `/ (root)`.

## Funkcje

- Katalog urządzeń MikroTik oraz edytor topologii z połączeniami portów.
- Konfiguracja VLAN, sieci Wi-Fi, VPN i opcji RouterOS.
- Generator skryptów RouterOS v7, w tym konfiguracji LACP.
- Zapis i wczytywanie projektu JSON.
- Powiększanie i przesuwanie planszy oraz podświetlanie połączeń.
- Interfejs w języku polskim, angielskim i niemieckim.

## Pliki

- `mikrotik wizard.html` — interfejs i style.
- `main.js` — logika edytora i generatora.
- `i18n.js` — tłumaczenia.

Skrypty są ładowane jako klasyczne skrypty, dzięki czemu aplikację można uruchomić również bezpośrednio z pliku HTML.
