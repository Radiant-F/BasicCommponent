import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Picker,
  Switch,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [value, onChangeText] = useState('Disini');
  const [selectedValue, setSelectedValue] = useState('java');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View>
      <Text>Masukan umur anda:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'dodgerblue',
          borderWidth: 2,
          textAlign: 'center',
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Image
        style={gaya.gambar}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/4/44/Osu%21Logo_%282019%29.png',
        }}
      />
      <View style={gaya.fixToText}>
        <Button
          color="red"
          title="Press me!"
          onPress={() => alert('Hai Kevin')}
        />
        <Button
          color="red"
          title="Press me!"
          onPress={() => alert('Hai Kevin')}
        />
      </View>
      <Picker
        selectedValue={selectedValue}
        style={{height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="HTML" value="htm" />
      </Picker>
      <Switch
        trackColor={{false: '#9e0000', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#4569f7' : '#ff1414'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

export default App;

const gaya = StyleSheet.create({
  gambar: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
  },
  tombol: {
    backgroundColor: 'dodgerblue',
    alignSelf: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
