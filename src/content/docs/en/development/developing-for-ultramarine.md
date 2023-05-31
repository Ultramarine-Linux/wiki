---
title: Developing for Ultramarine
description: 'Things to get started on developing in Ultramarine.'
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

Our team uses [Visual Studio Code](https://code.visualstudio.com/), which is an open-source (mostly source-available) IDE that is available for both Windows, macOS, and Linux.

If you, however, do not prefer to use the official Microsoft distribution of Visual Studio Code, you can also use [VSCodium](https://www.vscodium.com/), which is a free alternative distribution of Visual Studio Code. Or you can also use the [Official open-source build of Visual Studio Code](https://github.com/microsoft/vscode) here.

There are also other supported IDEs and software we recommend using for development, such as:

- [JetBrains CLion](https://www.jetbrains.com/clion/) (Native applications with C/C++, or Rust)
- [JetBrains PyCharm](https://www.jetbrains.com/pycharm/) for Python development.
- [GNOME Builder](https://wiki.gnome.org/Apps/Builder) for GNOME and GTK development.
- [Qt Creator](https://www.qt.io/product/development-tools) for Qt development.

And other text editors you can use, such as:

- [VIM](https://www.vim.org/)
- [Emacs](https://www.gnu.org/software/emacs/)
- [Micro](https://micro-editor.github.io/)
- [Neovim](https://neovim.io/)
- [Helix](https://helix-editor.com/)

These text editors come with a minimal set of features, so you may want to install plugins for them, and configure them to your liking.

Our preferred programming languages are Python, Vala, and Rust, and our preferred GUI library is Helium.

To build packages for Ultramarine, see [Using Andaman](/development/anda).

### UI development

It is recommended to follow the [Helium Human Interface Guidelines](https://developer.fyralabs.com/helium/hig/introduction) for UI development for Ultramarine apps. These guidelines should not be considered a be-all end-all, it is perfectly acceptable to deviate from the guidelines (or not follow them at all) if it limits aspects of your app.

### Build systems

For build systems, we prefer using the programming language's native build system. For example, if you're using Rust, you can use the Rust's native Cargo build system. And in the case of Python, you can use the standard Python setuptools, which consists of either a `setup.py` file or a `pyproject.toml` file.

For cases where using a native build system does not fit the needs of the application, we have a prioritized list of build systems that we recommend using:

- [Meson](https://mesonbuild.com/)
- [CMake](https://cmake.org/)
- [GNU Autotools](https://www.gnu.org/software/automake/manual/html_node/Autotools-Introduction.html)
- A standard makefile.
