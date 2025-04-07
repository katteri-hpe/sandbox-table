# sandbox-table
This is a sandbox environment created to investigate stencil core regression. 

We have update the stencil/core to the latest 4.29.1 and could see the package.json inside the build output (loader) is missing . The latest version that has package.json is in 4.27.0 .

We had to downgrade the package to 4.27.0 to have the expected build output.

This repo is created to investigate the issue further and solve the regression. 