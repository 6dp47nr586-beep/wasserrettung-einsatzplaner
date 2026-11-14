WASSERRETTUNG EINSATZPLANER v1.2.2 – PWA TESTVERSION

Upload in GitHub:
- Den gesamten Inhalt dieses Ordners in den Repository-Ordner v1.2.2 hochladen.
- index.html, manifest.json, service-worker.js und README-UPLOAD.txt liegen direkt in v1.2.2.
- Den Ordner icons vollständig mit hochladen.
- Die bisherigen Versionen nicht überschreiben.

Offline-Karten in v1.2.2:
- Pro Speichervorgang wird nur die aktuelle Zoomstufe und eine Zoomstufe darüber gespeichert.
- Dadurch bleibt die Kachelzahl auch bei großen Bildschirmen deutlich kleiner.
- Pro Speichervorgang sind maximal 650 Kacheln erlaubt.
- Für weitere Flussabschnitte die Karte verschieben und erneut speichern.
- Für höhere Detailstufen näher an den gewünschten Flussabschnitt zoomen und erneut speichern.
- Bereits vorhandene Kacheln werden nicht nochmals aus dem Internet geladen.
- Die gespeicherten Kacheln liegen nur auf diesem Gerät.

Test:
1. Version v1.2.2 online öffnen und einmal vollständig laden.
2. Gewünschte Flussabschnitte und Zoomstufen jeweils mit „Karte offline speichern“ sichern.
3. Erst danach WLAN/mobile Daten ausschalten und die App neu laden.
4. Prüfen, ob die Karte bei den gespeicherten Abschnitten und Zoomstufen sichtbar bleibt.

Hinweise:
- Offline-Karten sind nur für zuvor heruntergeladene Bereiche und Zoomstufen verfügbar.
- Live-Pegel, Hydrologiequellen und externe Links benötigen weiterhin Internet.
- Kartenanbieter-Nutzungsbedingungen und Gerätespeicherlimits beachten.
- Vor einer Verwendung im Einsatz müssen Kartenabdeckung, Flussdaten, Marker und Berechnungen fachlich und auf den tatsächlichen Einsatzgeräten geprüft werden.
