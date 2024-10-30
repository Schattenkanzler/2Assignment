# My Dockerized Web Application

## Projektbeschreibung

Diese Applikation ist eine einfache Webanwendung, die aus einem Frontend, einem Backend und einer MySQL-Datenbank besteht. Die Komponenten kommunizieren über Docker-Netzwerke, und die Datenbank speichert ihre Daten in einem Docker-Volume.

## Services

- **Frontend**: Statische HTML-Seite, ausgeliefert über Nginx.
- **Backend**: Node.js-API, die auf Anfragen vom Frontend reagiert und mit der MySQL-Datenbank kommuniziert.
- **Datenbank**: MySQL, speichert die Anwendungsdaten.
- **Nginx Proxy**: Reverse Proxy zur Weiterleitung der Anfragen.

## Docker-Funktionalitäten

- **Docker Netzwerke**: Das `webnet`-Netzwerk ermöglicht die Kommunikation zwischen den Services.
- **Volumes**: `db_data` wird als Volume verwendet, um die MySQL-Daten persistent zu speichern.
- **Umgebungsvariablen**: Die Datenbank- und Backend-Services verwenden Umgebungsvariablen zur Konfiguration.

## Verwendung

1. Klone dieses Repository.
2. Führe `docker-compose up` im Hauptverzeichnis aus, um alle Services zu starten.
3. Öffne den Browser und gehe zu `http://localhost:8080`, um das Frontend zu sehen.
4. Um die API direkt aufzurufen, gehe zu `http://localhost/api`.

## Anforderungen

- Docker und Docker Compose müssen installiert sein.