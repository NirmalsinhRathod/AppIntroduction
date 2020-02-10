# App Introduction

## Introduction

You can see it in many application which needs a little assistance. If your application has any feature which needs some instruction then instead of going to the theory or the long list you can make it more interesting using it.



## Installation

> To create a step by step app introduction we are going to use `react-native-copilot` library. For this library, you just have to install this library with `react-native-svg` and you are good to go. It provides the following components which will help us to create a step by step guide:

( 1 ) CopilotStep: Whatever component we want to showcase we will cover with it. It provides text to define the text we want to show, order to define the order of the component, and name which will be unique for each component.

```
<CopilotStep
  text="this is title"
  order={1}
  name="firstUniqueKey">
  <WalkthroughableText style={styles.title}> 
    Example of App Introduction Tour in React Native
  </WalkthroughableText>
</CopilotStep>```
```
( 2 ) copilot: Higher-order component for the screen component that you want to use copilot with

```
export default copilot({
  animated: true, // Can be true or false
  overlay: 'svg', // Can be either view or svg
})(App);
```

( 3 ) walkthroughable: Before defining walkthrough steps for your react elements, you must make them walkthroughable. The easiest way to do that for built-in React Native components is using the walkthroughable HOC. Then you must wrap the element with CopilotStep.

```
const WalkthroughableText = walkthroughable(Text); //Making a WalkthroughableText
const WalkthroughableImage = walkthroughable(Image); //Making a WalkthroughableImage
```

This is how you can make a step by step introduction guide in your React Native app



