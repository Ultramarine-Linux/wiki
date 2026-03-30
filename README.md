# Ultramarine Linux Wiki

Welcome to the source repository behind the [Ultramarine Wiki]! We welcome any contributions and
you may freely send pull requests to this repository if you would like to modify any of the
content here!

## Translations

TBD as we shift to our new docs site

## Hacking
### Dev Containers

1. Install the Dev Containers extension in your IDE
   - Zed comes with Dev Containers, see [this documentation](https://zed.dev/docs/dev-containers)

   - VSCode users need to install the Dev Containers extension

   - Podman users need to install `podman-docker` from their package manager
   
2. Open your IDE and select the "Reopen in Dev Container" option
3. Run `bun i` to install deps
4. Run `bun dev` or `bun dev --host` to start the dev server
   
### Flox
1. Get [Flox](https://flox.dev/docs/install-flox/install/)
2. Clone and enter this repo
3. Run `flox activate`

You can run the dev server with `flox services start dev`, or to expose to LAN or Tailnet, run `flox services start dev-host`

### On the Host
1. Install `bun` and `nodejs`
2. Run `bun i` to install deps
3. Run `bun dev` or `bun dev --host` to start the dev server


[Ultramarine Wiki]: https://wiki.ultramarine-linux.org
