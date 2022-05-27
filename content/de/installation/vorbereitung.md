---
title: Vorbereitung
description: 'Der Einstiegspunkt zur Installation von Ultramarine Linux'
position: 5
category: Installation
---

Ultramarine Linux ist in Form eines ISO-Abbilds zum Download erhältlich, welches verwendet werden kann um eine bootfähige DVD oder einen USB zu erstellen.
Diese Anleitung bietet Hilfe bei der Auswahl des richtigen Abbildes, Erstellung des bootfähigen Speichermediums und Installation.

# Herunterladen

## Auswahl der Edition

Ultramarine Linux ist in 5 Editionen erhältlich:
- Die **Flagship Edition**, welche die Standardvariante ist. Diese benutzt das Budgie Desktop Environment, welches ein ähnliches Layout wie ChromeOS oder Windows bietet. Diese Edition ist am beliebtesten und die beste Wahl. 
- Die **GNOME Edition**, welche mit dem GNOME Desktop Environment kommt. GNOME wurde erstellt, um elegant und modern zu sein. Diese Variante ist für alle Nutzer, die eine simple und einzigartige Erfahrung bevorzugen, geeignet.
- Die **Pantheon Edition**, welche mit dem Pantheon Desktop Environment von Elementary OS ausgeliefert wird. Pantheon ist die beste Wahl für alle Nutzer, die von MacOS kommen.
- Die **Cutefish Edition**, eine experimentelle Version mit dem Cutefish Desktop Environment. Diese ist aktuell die kleinste Variante, aber der Cutefish Desktop selbst ist noch lange nicht fertig und wird noch entwickelt.
- **Ultramarine Lapis**, eine OSTree-basierende Variante der Flagship Edition. Diese Variante ist gemacht, um komplett unveränderbar zu sein, was bedeutet, dass das System-Abbild selbst nicht modifizierbar ist. Diese Variante wird für nicht-technische Nutzer oder Nutzer, die meistens mit einer Container-basierenden Umgebung arbeiten, empfohlen.

Ultramarine Linux ist nur mit x86_64 (AMD64) Systemen kompatibel. Das ist normalerweise auf modernen Computern der Fall. Für Macs heißt das, dass Ultramarine Linux nur Intel Macs unterstützt. 

Das ISO-Abbild ist zum herunterladen verfügbar auf der [Ultramarine Linux Website](https://ultramarine-linux.org).
## Checking the integrity of the ISO image (Recommended)

If you would like to make sure the ISO image is valid, Ultramarine ISO images all come with a `CHECKSUM` file that can be checked against the image itself.

The checksum file is a SHA256 checksum of the ISO image, you can use the following command to check the integrity of the ISO image (if you're using another Linux distribution)

```bash
sha256sum -b /path/to/ultramarine.iso # Generate the checksum for the ISO image
cat /path/to/CHECKSUM # Check the checksum

# Now you can compare the checksum

```

### Verifying the checksum on Windows
```powershell
CertUtil -hashfile PATH\TO\ULTRAMARINE.ISO SHA256
# Open the CHECKSUM file with Nodepad and compare the checksum
```

## Erstellen eines bootfähigen Mediums

### Mit Ultramarine Linux

Nutzer können den Fedora Media Writer verwenden um ein bootfähiges Medium aus dem ISO-Abbild zu erstellen.

![](/assets/fedoramediawriter.png)

### Mit einem anderen Betriebssystem (Windows, macOS, andere Linux Distributionen)

Nutzer können [balenaEtcher](https://www.balena.io/etcher/) nutzen, um ein bootfähiges Medium aus dem ISO-Abbild zu erstellen.

![](/assets/balenaetcher.png)

### Mit Windows (Alternative)

Nutzer können alternativ auch [Rufus](https://rufus.ie/) nutzen, um ein bootfähiges Medium zu erstellen.

![](/assets/rufus_en.png)


## In Ultramarine Linux booten

Nachdem erstellen eines bootfähigen Mediums, können Sie Ultramarine Linux starten, indem Sie das bootfähige Medium anschlißen und den Computer neu starten.

Bevor der Computer in ihr aktuelles Betriebssystem bootet, lesen Sie in der Dokumentation ihres Computer nach, mit welcher Taste Sie eine individuelle Boot-Option auszuwählen.

<alert type='info'>

Die meisten BIOS verfügen über eine spezielle Taste, die zur Auswahl eines Boot-Geräts oder zum Aufrufen des BIOS-Setup-Bildschirms verwendet werden kann. Diese Taste variiert von Marke zu Marke. Diese Tasten sind vielleicht `Esc`, `F1`, `F2`, `F8`, `F11`, `F12`, oder sogar `Del`. Das BIOS zeigt in der Regel beim Starten kurz eine Meldung auf dem Bildschirm an. Wenn Sie nicht sicher sind, welche Taste Sie drücken müssen, sehen Sie in den BIOS-Anweisungen ihres Computers im Internet nach oder fragen Sie Ihren Computerhersteller.

</alert>

<alert type='info'>

Auf Macs, halten Sie `Alt` oder `Option` gedrückt, nachdem Sie das Startgeräusch hören.

</alert>


