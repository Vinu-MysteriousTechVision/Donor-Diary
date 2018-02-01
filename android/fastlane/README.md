fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## Android
### android test
```
fastlane android test
```
Runs all the tests
### android sampleTest
```
fastlane android sampleTest
```

### android build
```
fastlane android build
```
Builds and pushes version to app - use incrementVersion:[major|minor|patch] for versioning
### android deploy
```
fastlane android deploy
```
Deploy a new version to the Play store
### android submit_to_release
```
fastlane android submit_to_release
```
Build and upload to Play Store

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
