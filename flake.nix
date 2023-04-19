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

        ulid = pkgs.stdenv.mkDerivation {
          name = "ulid";
          version = "2.3.0";
          src = pkgs.fetchurl {
            url = "https://registry.npmjs.org/ulid/-/ulid-2.3.0.tgz";
            sha512 = "sha512-keqHubrlpvT6G2wH0OEfSW4mquYRcbe/J8NMmveoQOjUqmo+hXtO+ORCpWhdbZ7k72UtY61BL7haGxW6enBnjw==";
          };
          installPhase = ''
            mkdir -p $out/ulid
            cp -R ./* $out/ulid/
          '';
        };

        pwp = pkgs.stdenv.mkDerivation {
          name = "pwp";
          version = "0.1.0";
          src = pkgs.fetchurl {
            url = "https://registry.npmjs.org/prettier-plugin-go-template/-/prettier-plugin-go-template-0.0.13.tgz";
            sha512 = "sha512-gG/xT5kd+kCzoMaTchXvdfBdsunyRCV6G8cgdPGPd2V5JGGKXUG7SjzBKU7jaGh2RTeblcAdBb/E+S/duOAMsA==";
          };
          installPhase = ''
            mkdir -p $out/node_modules/prettier-plugin-go-template
            cp -R ./* $out/node_modules/prettier-plugin-go-template/
            cp -R ${pkgs.nodePackages.prettier}/lib/node_modules/* $out/node_modules/
            cp -R ${ulid}/* $out/node_modules/
            cp ${prettierrc} $out/
          '';
        };

        prettierrc = pkgs.writeTextFile {
          name = "prettierrc";
          text = ''
            {
              overrides: [
                {
                  files: ["*.html"],
                  options: {
                    parser: "go-template",
                  },
                },
              ],
            }
          '';
        };

        prettier = pkgs.writeShellApplication {
          name = "prettier";
          runtimeInputs = [];
          text = ''
            ${pwp}/node_modules/prettier/bin-prettier.js \
            --config ${prettierrc} \
            "$@"
          '';
        };

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
