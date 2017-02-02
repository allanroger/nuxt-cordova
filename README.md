## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

##Cordova

``` bash

$ npm i -g cordova

$ cordova build ios/android

```

Now generate the dist files, create a folder called www in the project root, and copy the files in dist folder to the www folder.

###Android

 ``` bash

 $ cordova run android

 ```

 ###iOS

 ```bash
 $ cordova build ios
 ```
 In ./platforms/ios folder, open xcode project and deploy to your phone.
