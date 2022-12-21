import React from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import {UsesGetList} from '../hooks/getListQuery';

const SettingScreen = params => {
  const {data, isLoading} = UsesGetList();
  console.log(data.data);
  return (
    <View>
      <StatusBar backgroundColor={'white'} translucent={true} />
      {isLoading ? (
        <Text>loading...</Text>
      ) : (
        <FlatList
          data={data.data}
          renderItem={({item, index}) => <Text>{item.email}</Text>}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default SettingScreen;
