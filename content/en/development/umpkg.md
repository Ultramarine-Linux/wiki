---
title: Using umpkg
description: 'Build and push packages with the Ultramarine Packager.'
position: 41
category: Development
---

Since Ultramarine Linux is based on Fedora, [Koji] is used to manage builds and packages. From [Fedora Wiki](https://fedoraproject.org/wiki/Koji):
> Koji is the software that builds RPM packages for the Fedora project. It uses [Mock](https://rpm-software-management.github.io/mock/) to create chroot environments to perform builds.

To make package management easier for everyone, Ultramarine Linux developers have created the Ultramarine Packager, aka. [`umpkg`](https://github.com/ultramarine-linux/umpkg).

The latest version as of writing is `0.3.3`.


## Getting Started
Install umpkg with `dnf install umpkg`. umpkg is already in ultramarine's dnf repository.

Initialise your koji profile (for Ultramarine Linux by default) and RPM build environment with `umpkg setup`. The profile will be located at `~/.koji/config.d/ultramarine.conf`.

Login with `kinit `*`username`*`@ULTRAMARINE-LINUX.ORG`.

<alert>

To get a Kerberos principal for pushing Ultramarine packages to the build system, sign up for an account at [The Ultramarine Accounts Portal](https://auth.ultramarine-linux.org/auth/realms/ultramarine/account/).

GitHub logins may not work if you do not have a full name and last name in your GitHub profile. This is a FreeIPA limitation.

</alert>

## Configurations
Most umpkg-related configurations can be set within `./umpkg.toml` when inside a package, or globally `~/.config/umpkg.toml`, including:
- `build_script`, a command ran before building SRPMs
- `build_method` (either `mock` or `rpmbuild`)
- `spec`, the path to the `.spec` file relative to the directory
- `owner`, the koji username who owns the package
- `git_repo`, the link to the git repository of the package

**WARN: strings in `.toml` files have to be "double-quoted"!**


## Downloading a package
Even though you can clone a package repository directly with `git`, you can still download a package with `umpkg get `*`pkgname`*. umpkg will download the package by adding *`pkgname`* to the url specified in global config.

## Making a new package
Run `umpkg init `*`pkgname`* to create a new package. umpkg will automatically create:
- a directory named after the package
- a spec file named after the package
- `umpkg.toml` with default information of the package

For example, if the following is in `~/.config/umpkg.toml`:
```toml
repo = "https://github.com/ultramarine-linux/"
```

Running `umpkg init discord-canary` will result in the following file system structure:

```
discord-canary/
discord-canary/umpkg.toml
discord-canary/discord-canary.spec
```

And within `umpkg.toml`:

```toml
[discord-canary]
spec = "discord-canary.spec"
build_script = ""
build_method = "mock"
owner = "your koji username"
git_repo = "https://github.com/ultramarine-linux/discord-canary"
```

Remember to replace owner with your actual koji username!

The spec file is also generated automatically, but you still have to edit the content, including `%install`, `%files`, `%changelog`, `Version`, `Summary`, `URL`, `Source0`, `License`, `Requires`, and `Group`.

Read about spec files here: https://docs.fedoraproject.org/en-US/packaging-guidelines/#_spec_files


## Building packages
Run `umpkg build` to build an RPM package.

If you only need the SRPM package, run `umpkg buildsrc` instead.

In case you are not in the package folder, supply `-d path/to/folder`.

### Build script
If you only want to run the build scripts, run `umpkg bs`.

## Pushing/Adding packages to Koji
After building your package, you have to upload the package to Koji so that it can be published.

If the package is not in Koji, run `umpkg add `*`tag`*.
See all the tags for Ultramarine Linux [here](https://lapis.ultramarine-linux.org/koji/tags).

For pushing, run `umpkg push `*`target`*.
For the list of available build targets in Ultramarine Linux, see [here](https://lapis.ultramarine-linux.org/koji/buildtargets).



[Koji]: https://lapis.ultramarine-linux.org/koji/
