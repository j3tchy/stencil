import { Config } from '@stencil/core';
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: 'core',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: "@jetchy/core",
      proxiesFile: "../react/src/components.ts",
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
