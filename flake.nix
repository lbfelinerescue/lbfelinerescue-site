{
  description = "A very basic flake";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-compat.url = "github:edolstra/flake-compat";
  inputs.flake-compat.flake = false;
  inputs.flake-utils.url = "github:numtide/flake-utils";
  inputs.npmlock2nix.url = "github:nix-community/npmlock2nix";
  inputs.npmlock2nix.flake = false;
  inputs.nix-npm-buildpackage.url = "github:serokell/nix-npm-buildpackage";
  inputs.nix-npm-buildpackage.flake = false;

  outputs = {
    self,
    nixpkgs,
    flake-compat,
    flake-utils,
    npmlock2nix,
    nix-npm-buildpackage,
  } @ inputs:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
        prettier = pkgs.callPackage ./prettier.nix {};
        npmlock2nix' = pkgs.callPackage npmlock2nix {};

        gatsby-node-modules = npmlock2nix'.v2.node_modules {
          src = ./gatsby;
          nodejs = pkgs.nodejs;
        };

        gatsby = pkgs.writeShellApplication {
          name = "gatsby";
          text = ''
            ${gatsby-node-modules}/bin/gatsby "$@"
          '';
        };
      in {
        devShells.default = pkgs.mkShell {
          packages = [
            pkgs.alejandra
            pkgs.hugo
            prettier
            gatsby
          ];
        };

        devShells.npm = pkgs.mkShell {
          packages = [
            pkgs.nodePackages.npm
            pkgs.nodejs
          ];
        };

        packages = {
          inherit gatsby-node-modules;
        };
      }
    );
}
