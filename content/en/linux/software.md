---
title: Software and package management
description: 'This wiki is meant to be the extended documentation for both end users and developers, so it is separated in those two categories.'
position: 22
category: Linux Concepts
---

There are many different ways to install software on Linux.

## The system package manager


Most software is installed using the system package manager. There are many different package managers, and each one has its own unique features and benefits, such as:

- APT (Used by Debian, Ubuntu, and many other Linux distributions)
- Pacman (Used by Arch Linux)
- Yum (Used by older versions of Fedora and Red Hat)
- DNF (Used by Fedora)
- XBPS (Used by Void Linux)
- Portage (Used by Gentoo, and Chrome OS)

Ultramarine Linux is based on Fedora, and thus uses the DNF package manager.

To install an RPM package from the Ultramarine and Fedora repositories, use the `dnf` command.

```bash
sudo dnf install steam # Install Steam
```

## Other package managers

You can also install software using other package managers.

There are many different user-only package managers, such as:

- Snap
- Flatpak
- Steam (For games)

### Flatpak

Flatpak is supported out of the box in Ultramarine Linux. To install a Flatpak app, open GNOME Software or AppCenter, or use the `flatpak` command.


### Snap

Snap is a package manager made by Canonical for Ubuntu. It was created to make deploying serverside services easier, and it is also used for GUI applications.

To get started, install Snap.

```bash
sudo dnf install snapd # Install Snap
```

Then, open the Snap store and search for the app you want to install.

```bash
# Install VLC media player
sudo snap install vlc
```

### Steam

To install a game on Steam, first install Steam.

```bash
sudo dnf install steam
```

Then, open the Steam store and search for the game you want to install.


## Other installation methods

### AppImages

AppImages are self-contained binaries that are packaged with their own dependencies. To use an AppImage, simply download it, and then execute it by double-clicking it or using the command line.

```bash
./balenaEtcher.AppImage
```

### Install from source

Sometimes, software is not available in a package, and you need to build it from source.

To do this, follow the developer's instructions and build the software yourself.
