WASSERRETTUNG EINSATZPLANER v1.2.1 – PWA TESTVERSION

Upload in GitHub:
- Den gesamten Inhalt dieses Ordners in den Repository-Ordner v1.2.1 hochladen.
- index.html, manifest.json, service-worker.js und README-UPLOAD.txt liegen direkt in v1.2.1.
- Den Ordner icons vollständig mit hochladen.
- Die bisherige Version v1.2.0 nicht überschreiben.

Offline-Karten in v1.2.1:
- Beim Speichern wird der aktuelle sichtbare Kartenausschnitt von einer Zoomstufe unter der aktuellen bis zu drei Zoomstufen über der aktuellen Zoomstufe gespeichert (maximal Zoom 18).
- Pro Speichervorgang sind maximal 650 Kacheln erlaubt.
- Für lange Flussstrecken den Fluss in mehrere sichtbare Ausschnitte aufteilen und jeden Abschnitt separat speichern.
- Für stärkere Vergrößerung in den gewünschten Bereich hineinzoomen und dort erneut speichern.
- Bereits vorhandene Kacheln werden nicht nochmals aus dem Internet geladen.
- Die gespeicherten Kacheln liegen nur auf diesem Gerät.

Test:
1. Version v1.2.1 online öffnen und einmal vollständig laden.
2. Für die gewünschten Flussabschnitte und Detailstufen jeweils „Karte offline speichern“ ausführen.
3. Erst danach WLAN/mobile Daten ausschalten und die App neu laden.
4. Prüfen, ob die Karte bei den gespeicherten Zoomstufen und Abschnitten sichtbar bleibt.

Hinweise:
- Offline-Karten können nur für zuvor heruntergeladene Bereiche und Zoomstufen angezeigt werden.
- Live-Pegel, Wetter-/Hydrologiequellen und externe Links benötigen weiterhin Internet.
- Kartenanbieter-Nutzungsbedingungen und Gerätespeicherlimits beachten.
- Vor einer Verwendung im Einsatz müssen Kartenabdeckung, Flussdaten, Marker und Berechnungen fachlich und auf den tatsächlichen Einsatzgeräten geprüft werden.
