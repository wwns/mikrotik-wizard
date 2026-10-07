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

## Kontener Docker

Obraz `ghcr.io/wwns/mikrotik-wizard:latest` jest publikowany automatycznie przez GitHub Actions po zmianie gałęzi `main`. Wymagany jest Docker.

```sh
docker pull ghcr.io/wwns/mikrotik-wizard:latest
docker run --detach --name mikrotik-wizard --publish 8080:80 ghcr.io/wwns/mikrotik-wizard:latest
```

Otwórz <http://localhost:8080>. Aby zatrzymać kontener, wykonaj `docker stop mikrotik-wizard`.

Wydania oznaczone tagiem `v*` publikują obraz z odpowiadającym tagiem wersji, np. `ghcr.io/wwns/mikrotik-wizard:v1.0.0`.
