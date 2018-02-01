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
## iOS
### ios test
```
fastlane ios test
```
Runs all the tests
### ios upload_new_app
```
fastlane ios upload_new_app
```
Create new application and upload to the appstore
### ios provision
```
fastlane ios provision
```
Create provision profile for the project
### ios build
```
fastlane ios build
```
Builds and pushes version to app - use incrementVersion:[major|minor|patch] for versioning
### ios upload
```
fastlane ios upload
```
Upload to App Store and submit for review
### ios submit_to_release
```
fastlane ios submit_to_release
```
build and upload to App Store

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
