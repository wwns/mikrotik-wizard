# MikroTik Network Designer

[Polski](README.md) · [English](README.en.md) · [Deutsch](README.de.md)

Ein browserbasierter MikroTik-Netzwerkdesigner und Generator für RouterOS-v7-Konfigurationen. Die Anwendung ist eine statische Website und benötigt weder Installation noch Build-Schritt.

## Erste Schritte

- **Lokal:** `mikrotik wizard.html` in einem Webbrowser öffnen.
- **GitHub Pages:** In den Repository-Einstellungen Pages für den Branch `main` und den Ordner `/ (root)` aktivieren.
- **Docker:** Das veröffentlichte Image wie unten beschrieben starten.

## Funktionen

- MikroTik-Gerätekatalog und Netzwerk-Topologieeditor mit Portverbindungen.
- Konfiguration von VLAN, WLAN, VPN und RouterOS-Funktionen.
- Generierung von RouterOS-v7-Skripten einschließlich LACP-Bonding.
- Projekte als JSON-Dateien speichern und laden.
- Arbeitsfläche zoomen und verschieben sowie Kabelverbindungen hervorheben.
- Benutzeroberfläche auf Polnisch, Englisch und Deutsch.

## Projektdateien

- `mikrotik wizard.html` — Benutzeroberfläche und Styles.
- `main.js` — Logik des Editors und Konfigurationsgenerators.
- `i18n.js` — Übersetzungen.

Die Anwendung verwendet klassische Skripte und kann daher auch direkt über die HTML-Datei geöffnet werden.

## Docker-Image

Das Image `ghcr.io/wwns/mikrotik-wizard:latest` wird bei Änderungen am Branch `main` automatisch von GitHub Actions veröffentlicht. Docker wird benötigt.

```sh
docker pull ghcr.io/wwns/mikrotik-wizard:latest
docker run --detach --name mikrotik-wizard --publish 8080:80 ghcr.io/wwns/mikrotik-wizard:latest
```

Anschließend <http://localhost:8080> öffnen. Den Container mit `docker stop mikrotik-wizard` anhalten.

Tags nach dem Muster `v*` veröffentlichen Images mit Versionsnummer, zum Beispiel `ghcr.io/wwns/mikrotik-wizard:v1.0.0`.
