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
        npmbp = pkgs.callPackage nix-npm-buildpackage {};

        gatsbydev = npmlock2nix'.v2.shell {
          src = ./gatsby;
        };

        gatsby-node-modules = npmlock2nix'.v2.node_modules {
          src = ./gatsby;
          nodejs = pkgs.nodejs;
        };

        gatsby-build = npmlock2nix'.v2.build {
          src = ./gatsby;
          installPhase = "cp -r dist $out";
          buildCommands = ["npm run build"];
        };

        gatsby-npmbp = npmbp.buildNpmPackage {
          src = ./gatsby;
          npmBuild = "npm run build";
        };
      in {
        devShells.default = pkgs.mkShell {
          packages = [
            pkgs.alejandra
            pkgs.hugo
            prettier
            #pkgs.nodePackages.gatsby-cli
            gatsbydev
          ];
        };

        devShells.npm = pkgs.mkShell {
          packages = [
            pkgs.nodePackages.npm
            pkgs.nodejs
          ];
        };

        packages = {
          inherit gatsbydev gatsby-node-modules gatsby-build;
          inherit gatsby-npmbp;
        };
      }
    );
}
