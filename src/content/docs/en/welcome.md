---
title: "Welcome"
description: "This wiki is meant to be the extended documentation for both end users and developers, so it is separated in those two categories."
---

Welcome to the Ultramarine Wiki! This wiki is meant to be the extended documentation for both end users and developers, so it is separated in those two categories.

On this page you can read about all the general project information, so if you want to become familiar with important concepts and our philosophy make sure to read this first!

## General philosophy

Ultramarine Linux is meant to be a spiritual successor to Korora Linux, with the goal of making an operating system that "just works". We are making the base Fedora experience a little more pleasant with tweaks, which improves the experience for new and advanced users equally.
While most tweaks could be achieved by an install script, such a script defeats the idea of "it just works" out of the box as the user has to apply things manually. Other planned features like a custom installer with better user experience are not possible without a separate ISO.

## Planned features

- Welcome app for user onboarding with quick access to common actions
- System configuration application similar to YaST
- Custom installer to improve user experience compared to Anaconda which has a possibly overwhelming interface for new users
- Good unified documentation for both developers and end users
- Possible but not set in stone: DNF GUI frontend for easy package installation

## FAQ

### What does the migration script do?

The migration scripts install RPMFusion, then installs the bare minimum of an Ultramarine Linux installation on top of an existing Fedora installation (Swapping Fedora release packages with the Ultramarine ones).

The script only installs the bare minimum required for Ultramarine Linux to work because we don't want to add additional bloat to your current system.

### Why does this distro exist? What difference does it have other than just Fedora with RPMFusion?

Ultramarine Linux was created out of frustration with the legal limits of Fedora. As Fedora (and Red Hat) is an American entity, there are legal restrictions on what software can be
packaged in the distribution due to the US patent system.

Ultramarine, on the other hand is based in Thailand, and is not subject to any of the copyright restrictions on what software can be packaged.

The Ultramarine team aims to make Fedora a little more user friendly by allowing users to install or package any software they want as long as someone maintains it in either RPMFusion or the Ultramarine repository.

As the time of this writing, there are currently few Ultramarine packages available, but we are looking to add more software to the distribution.

Ultramarine highly encourages users to contribute to the project by submitting packages to the Ultramarine repository and maintaining them. We provide a Github bot that will automatically bump package versions and build them as new versions are released upstream, so you only have to worry about fixing packaging issues downstream.

### Is Ultramarine simply just Fedora with extra desktop environments?

No, Ultramarine is not just Fedora with extra desktop environments. We aim to ease the user experience by providing a more friendly first-time experience, and to make the system "just work" for new and advanced users.

### Does Ultramarine track or collect my data?

We do not track nor collect any data from you. Ever. We could track your personal data, but we don't even have any means of storing it.
Databases are expensive and we can't even afford to store them.

If you still don't trust us, we're fully open source! You can find all the source code on our [Github](https://github.com/Ultramarine-Linux).

## Core team

- 🇹🇭 Pornpipat "Cappy" Popum - Fyra Labs CIO, Project lead, Release Engineer
- 🇩🇪 Trobonox (Anonymous) - Documentation, Web Developer, UI/UX Designer
- 🇮🇩 Mo (Anonymous) - Low-level developer
- 🇵🇱 Toru Ishikawa (Anonymous) - Infrastructure support
- 🇺🇸 Lleyton Gray - Fyra Labs CEO, Project Manager
- 🇺🇸 Jaiden Riordan - Fyra Labs COO, Documentation, operations
