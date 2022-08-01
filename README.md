# Ionic app to show how we can share data between pages

This app will cover next topics
1. Nested routes
2. Modal data
3. Child components
4. Simple state management

## Useful commands for Ionic project
`ionic start shareDataBetweenPagesApp blank --type=angular`  - create new ionic angular app 

`ionic build`               - build web assets (eg. angular project)  
`ionic serve`               - open web app in browser using local web server 

## App's components
1. For nested routes we create these pages
```
ionic g page lists
ionic g page listDetails
ionic g page items
ionic g page itemDetails
```
2. For modal data we create this page
```
ionic g page modal
```
3. For child components we create custom module with the component
```
ionic g module components/sharedComponents --flat
ionic g component components/textbox
```
4. For simple state management we create custom service
```
ionic g service services/state
````

## Notes
- NGXS is a state management pattern + library for Angular
