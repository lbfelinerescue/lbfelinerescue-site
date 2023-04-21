{
  description = "A very basic flake";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-compat.url = "github:edolstra/flake-compat";
  inputs.flake-compat.flake = false;
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = {
    self,
    nixpkgs,
    flake-compat,
    flake-utils,
  } @ inputs:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
        prettier = pkgs.callPackage ./prettier.nix {};
      in {
        devShells.default = pkgs.mkShell {
          packages = [
            pkgs.alejandra
            pkgs.hugo
            prettier
          ];
        };
      }
    );
}
