# MikroTik Network Designer

[Polski](README.md) · [English](README.en.md) · [Deutsch](README.de.md)

A browser-based MikroTik network designer and RouterOS v7 configuration generator. The app is a static website and requires no installation or build step.

## Getting started

- **Locally:** open `mikrotik wizard.html` in a web browser.
- **GitHub Pages:** in the repository settings, enable Pages for the `main` branch and the `/ (root)` folder.
- **Docker:** run the published image as described below.

## Features

- MikroTik device catalog and network topology editor with port connections.
- VLAN, Wi-Fi, VPN, and RouterOS feature configuration.
- RouterOS v7 script generation, including LACP bonding.
- Save and load projects as JSON files.
- Canvas zoom and pan, plus cable highlighting.
- User interface in Polish, English, and German.

## Project files

- `mikrotik wizard.html` — user interface and styles.
- `main.js` — editor and configuration generator logic.
- `i18n.js` — translations.

The app uses classic scripts, so it can also be opened directly from the HTML file.

## Docker image

The image `ghcr.io/wwns/mikrotik-wizard:latest` is published automatically by GitHub Actions when changes are pushed to `main`. Docker is required.

```sh
docker pull ghcr.io/wwns/mikrotik-wizard:latest
docker run --detach --name mikrotik-wizard --publish 8080:80 ghcr.io/wwns/mikrotik-wizard:latest
```

Open <http://localhost:8080>. Stop the container with `docker stop mikrotik-wizard`.

Tags matching `v*` publish versioned images, for example `ghcr.io/wwns/mikrotik-wizard:v1.0.0`.
