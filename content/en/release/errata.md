---
title: Errata
description: 'Various known bugs and other issues in Ultramarine Linux.'
position: 50
category: Release Notes
---

This page contains the erratum for Ultramarine Linux releases.

An erratum (or corrigendum) is a correction of a published release. It is usually made shortly after a release, and is a minor issue that is not critical to the release, and it may be corrected in the next release.

# All versions affected

## Applications

### Some installer scripts not supporting Ultramarine, even though it is a Fedora-based OS

This is related to [DNF Tells the user there are no repositories available for a Copr project](/release/errata#dnf-tells-the-user-there-are-no-repositories-available-for-a-copr-project), This bug may only be addressed upstream, or until there is mainstream recognition of Ultramarine Linux itself.


# Ultramarine 36 (Build 1.1)

## Applications

### Firefox still includes Fedora bookmarks

This is caused by the inclusion of the `fedora-bookmarks` package, which is a weak dependency of Firefox in Fedora. Uninstalling this package may not fix the issue on an already configured account. Simply remove the bookmarks yourself.


### Anaconda shows a warning about the system being pre-release

This is caused by Anaconda not finding the patched `/.buildinfo` file (or ProductMD information about Ultramarine). We do not know how Fedora is doing this, but in Budgie and Cutefish versions there is a script inserting a custom `/.buildinfo` file in the root of the filesystem.


### DNF Tells the user there are no repositories available for a Copr project

This is due to the fact that the DNF Copr plugin detects the OS ID `/etc/os-release` file, and Ultramarine uses a custom code instead of `fedora`.

A workaround is to also specify the Fedora buildroot when trying to add a Copr repository, like this:
```bash
sudo dnf copr enable cappyishihara/fedorajam-plus fedora-36-x86_64
```

This will be addressed in a `dnf-plugins-core` patch, either upstream or locally with Ultramarine.



## GNOME

### Pop!_Shell launcher
The Pop!_Shell launcher is broken. This can be fixed by installing the `pop-launcher` package, as the package was not included in the original release.


## Cutefish

### SDDM displaying black screen

SDDM may display a black screen when starting up. This is a known issue, but there is no known fix as of yet. (Possibly an upstream bug, help needed.)

## Pantheon

### Missing Switchboard (Settings) menus

This was caused by missing Pantheon Switchboard modules, which are not included in Ultramarine Linux due to time constraints.

You can help us fix this issue by offering to maintain these packages ourselves, or by [contributing to help submit them to upstream Fedora.](https://fedoraproject.org/wiki/SIGs/Pantheon)


## Lapis/OSTree Edition

### Missing tweaks from the standard releases

As the standard release includes a script to modify the system, due to the nature of OSTree, we are unable to include these tweaks unless we rebuild all major packages with our custom patches.

You can help us fix this issue by contributing and maintaining these packages yourself.