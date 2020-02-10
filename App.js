import React, {Component} from 'react';
//Import React

import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {WebView} from 'react-native-webview';
//Import basic required components
import {copilot, walkthroughable, CopilotStep} from 'react-native-copilot';

const WalkthroughableText = walkthroughable(Text); //Making a WalkthroughableText
const WalkthroughableImage = walkthroughable(Image); //Making a WalkthroughableImage
const WalkthroughableTouchableOpacity = walkthroughable(TouchableOpacity); //Making a TouchableOpacity

class App extends Component {
  //Setting the state if we want to skip second step
  state = {
    secondStepActive: true,
  };

  componentDidMount() {
    this.props.copilotEvents.on('stepChange', this.handleStepChange);
    //setting a function to handle the step change event
    this.props.start();
    //To start the step by step Walk through
  }

  handleStepChange = step => {
    //Handler, in case we want to handle the step change
    console.log(`Current step is: ${step.name}`);
  };
  renderHeader() {
    return (
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: '#051217',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <CopilotStep text="This is title" order={1} name="firstUniqueKey">
          <WalkthroughableText style={styles.title}>
            <Text>Ticket Booking</Text>
          </WalkthroughableText>
        </CopilotStep>
      </View>
    );
  }
  renderOptions() {
    return (
      <View style={styles.optionsContainer}>
        <CopilotStep text="This is prompt" order={2} name="secondUniqueKey">
          <WalkthroughableTouchableOpacity style={styles.options}>
            <Text style={styles.optionsText}>Prompt</Text>
          </WalkthroughableTouchableOpacity>
        </CopilotStep>
        <View style={styles.separator} />
        <CopilotStep text="This is Forward" order={3} name="thirdUniqueKey">
          <WalkthroughableTouchableOpacity style={styles.options}>
            <Text style={styles.optionsText}>Forward</Text>
          </WalkthroughableTouchableOpacity>
        </CopilotStep>
      </View>
    );
  }
  renderCategory() {
    return (
      <View style={styles.categoryContainer}>
        <CopilotStep text="From" order={4} name="fourthUniqueKey">
          <WalkthroughableTouchableOpacity style={styles.categoryText}>
            <Text style={styles.textStyle}>From</Text>
          </WalkthroughableTouchableOpacity>
        </CopilotStep>
        <CopilotStep text="To" order={5} name="fifthUniqueKey">
          <WalkthroughableTouchableOpacity style={styles.categoryText}>
            <Text style={styles.textStyle}>To</Text>
          </WalkthroughableTouchableOpacity>
        </CopilotStep>
        <CopilotStep text="Date" order={6} name="sixthUniqueKey">
          <WalkthroughableTouchableOpacity style={styles.categoryText}>
            <Text style={styles.textStyle}>Date</Text>
          </WalkthroughableTouchableOpacity>
        </CopilotStep>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderOptions()}
        {this.renderCategory()}
        {/* {this.renderData()} */}
      </View>
    );
  }
}
export default copilot({
  animated: true, // Can be true or false
  overlay: 'svg', // Can be either view or svg
})(App);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#051217',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {color: 'white', marginLeft: 20, fontSize: 18},
  options: {
    // backgroundColor: 'red',
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsText: {
    fontSize: 15,
    color: 'white',
  },
  separator: {
    width: 1,
    backgroundColor: '#051217',
  },
  optionsContainer: {
    height: 50,
    width: '100%',
    backgroundColor: '#0C2D38',
    flexDirection: 'row',
  },
  categoryContainer: {
    backgroundColor: '#0C2D38',
    height: 50,
    width: '91%',
    marginTop: 20,
    flexDirection: 'row',
  },
  categoryText: {
    width: '33.33%',
    backgroundColor: '#0C2D38',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
