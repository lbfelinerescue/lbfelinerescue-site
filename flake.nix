{
  description = "A very basic flake";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-compat.url = "github:edolstra/flake-compat";
  inputs.flake-compat.flake = false;
  inputs.flake-utils.url = "github:numtide/flake-utils";
  inputs.npmlock2nix.url = "github:nix-community/npmlock2nix";
  inputs.npmlock2nix.flake = false;

  outputs =
    { self
    , nixpkgs
    , flake-compat
    , flake-utils
    , npmlock2nix
    ,
    } @ inputs:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        prettier = pkgs.callPackage ./prettier.nix { };
        npmlock2nix' = pkgs.callPackage npmlock2nix { };

        gatsbydev = npmlock2nix'.v2.shell {
          src = ./gatsby;
        };

        gatsby-node-modules = npmlock2nix'.v2.node_modules {
          src = ./gatsby;
        };

        gatsby-build = npmlock2nix'.v2.build {
          src = ./gatsby;
          installPhase = "cp -r dist $out";
          buildCommands = [ "npm run build" ];
        };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = [
            pkgs.alejandra
            pkgs.hugo
            prettier
            #pkgs.nodePackages.gatsby-cli
            gatsbydev
          ];
        };

        packages = {
          inherit gatsbydev gatsby-node-modules gatsby-build;
        };
      }
    );
}
