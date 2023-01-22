---
title: Using Andaman
description: 'Build and push packages with the Andaman toolchain.'
position: 41
category: Development
---

To make package management easier for everyone, Ultramarine Linux developers and Fyra Labs have created the Andaman Toolchain, aka. [`anda`](https://github.com/FyraLabs/anda).

The latest version as of writing is `0.1.6`.


## Getting Started

Install Andaman with `dnf install anda`. Andaman is in the Terra repository.

## Configuration

Andaman uses a per-project configuration file written in HCL. The configuration file is named `anda.hcl` and it is located in the root of the project directory.

The configuration files can also be loaded recursively from the current directory, for easier project discovery. This is useful if you have multiple projects in the same directory. For example, the Terra and Ultramarine Linux repositories are stored inside a monorepo with all its packages.

To start building a package in an already configured project, simply run `anda build <project>` from the project directory.
