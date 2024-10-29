import React from 'react';
import {View, Text} from 'react-native';

const Welcome = ({code,name})=> {
  return (
    <View>
      <Text>
        Welcome to {code} - {name}
      </Text>
    </View>
  );
};

class ModuleInfo extends React.Component {
  render() {
    return (
      <View>
        <Text>These are my modules this semester:</Text>
        <Welcome code="303" name="IT Project Management"/>
        <Welcome code="C338" name="AI and Machine Learning"/>
        <Welcome code="C346" name="Mobile App Developoment"/>
        <Welcome code="T004" name="Intro to 3D Art Asset C"/>
      </View>
    )
  }
}

export default ModuleInfo;