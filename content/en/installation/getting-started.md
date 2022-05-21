---
title: Getting Started
description: 'Various known bugs and other issues in Ultramarine Linux.'
position: 5
category: Installation
---

Ultramarine Linux comes in a form of an ISO image, which can be used to make a bootable DVD, or be flashed onto a USB stick.

This guide will help you get the correct ISO image, create your boot image and install Ultramarine Linux on your computer.

# Downloading

## Choosing your edition

Ultramarine Linux comes in 5 variants:
- The **Flagship Edition**, which is the default and most popular variant, powered by the Budgie desktop environment and is made to stay out of your way. This is probably the version you want to use, and its desktop layout is similar to Windows or Chrome OS.
- The **GNOME Edition**, with the GNOME desktop environment designed to be elegant and modern. This is the variant you want if you would like a simple, unique experience.
- The **Pantheon Edition**, featuring elementary OS' Pantheon Desktop, made to be familiar to users coming from macOS.
- The **Cutefish Edition**, an experimental version using the Cutefish desktop environment, this is currently the smallest variant, but the Cutefish desktop itself is far from finished, and is heavily under development.
- **Ultramarine Lapis**, an OSTree-based variant of the Flagship edition. This variant is designed to be completely immutable, which means the system image itself is not modifiable. This is a variant recommended for non-technical users, or users who mostly work with container-based environments.

Ultramarine Linux is only compatible with x86_64 (AMD64) systems. This is usually the case for most modern computers. On Macs, this means that Ultramarine Linux only supports Intel Macs.

The ISO images are available for download from the [Ultramarine Linux website](https://ultramarine-linux.org).

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

## Creating the bootable media

### With Ultramarine Linux

You can use the Fedora Media Writer to create a bootable media from the ISO image.
![](/assets/fedoramediawriter.png)

### With other operating systems (Windows, macOS, other Linux distributions)

You can use [balenaEtcher](https://www.balena.io/etcher/) to create a bootable media from the ISO image.

![](/assets/balenaetcher.png)

### With Windows (alternative)

You can use [Rufus](https://rufus.ie/) to create the bootable image.

![](/assets/rufus_en.png)


## Booting to Ultramarine Linux

After flashing the image to your USB drive, you can boot to Ultramarine Linux by plugging in the drive and restarting your computer.

Before your computer boots to your current OS, please refer to your computer's documentation on which key to press to select a custom boot option.

<alert type='info'>

Most BIOS has a special key that can be used to select a boot device, or to enter the BIOS setup screen. This varies from brand to brand. These keys may be `Esc`, `F1`, `F2`, `F8`, `F11`, `F12`, or even `Del`. The BIOS will usually display a message on the screen briefly on startup. If you're not sure which key to press, look up the BIOS setup instructions on the internet or ask your computer manufacturer.

</alert>

<alert type='info'>

On Macs, hold down the `Alt` or `Option` key after hearing the boot chime.

</alert>