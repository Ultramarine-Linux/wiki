---
title: Developing for Ultramarine
description: 'Things to get started on developing in Ultramarine.'
position: 40
category: Development
---

Ultramarine Linux aims to be a developer-friendly environment for all kinds of developers. In this article, we will cover the basics of how to get started developing in Ultramarine.

If you would like to develop your own software, you can get started with the section below.

If you would like to develop **for** Ultramarine, you can get started with the [Developing for Ultramarine](#developing-for-ultramarine) section.


## Getting Started

Ultramarine comes with the [Python programming language](https://www.python.org/) out of the box, which is also required for most Fedora and Ultramarine 
software, including the DNF package manager itself.


### Setting up Rust

To set up Rust in your environment, you can install the Rust and Cargo package from the Fedora repositories.

```zsh
sudo dnf install rustc cargo
```

You can also use the `rustup` installer from the [Rust website](https://www.rust-lang.org/tools/install). This will install Rust in your local environment.


## Developing for Ultramarine

Our main IDE is [Visual Studio Code](https://code.visualstudio.com/), which is an open-source (mostly source-available) IDE that is available for both Windows, macOS, and Linux.

If you, however, do not prefer to use the official Microsoft distribution of Visual Studio Code, you can also use [VSCodium](https://www.vscodium.com/), which is a free alternative distribution of Visual Studio Code. Or you can also use the [Open-source distribution of Visual Studio Code](https://github.com/microsoft/vscode) here.

Our preferred programming languages are Python and Rust, and our preferred GUI toolkit is GTK.

To build packages for Ultramarine, see [Using umpkg](/development/umpkg).

### UI development

It is recommended to follow the [GNOME guidelines](https://developer.gnome.org/hig/) for UI development for Ultramarine apps. However, if you think that the GNOME guidelines do not fit the aesthetic of Ultramarine, you can deviate from the GNOME guidelines and do your own UI design.

For Ultramarine apps, we do not use libadwaita due to cross-desktop consistency issues. Instead, use standard GTK widgets for your UI.


### Build systems

For build systems, we prefer using the programming language's native build system. For example, if you're using Rust, you can use the Rust's native Cargo build system. And in the case of Python, you can use the standard Python setuptools, which consists of either a `setup.py` file or a `pyproject.toml` file.

For cases where using a native build system does not fit the needs of the application, we have a prioritized list of build systems that we recommend using:

- [CMake](https://cmake.org/)
- [Meson](https://mesonbuild.com/) (Little to no VSCode tooling)
- [GNU Autotools](https://www.gnu.org/software/automake/manual/html_node/Autotools-Introduction.html)
- A standard makefile.
