import React, {useState, useCallback} from 'react';
import {FlatList, RefreshControl, Animated} from 'react-native';
import Product from './Product';
import data from 'data.json';
import CategoryList from './CategoryList';

export default function ProductList({AnimatedHeaderValue}) {
  const [refreshing, setRefreshing] = useState(false);
  const wait = time => {
    return new Promise(resolve => setTimeout(resolve, time));
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderProduct = ({item}) => (
    <Product
      id={item.id}
      name={item.name}
      image={item.image}
      price={item.price}
    />
  );
  return (
    <FlatList
      data={data}
      renderItem={renderProduct}
      contentContainerStyle={{
        display: 'flex',

        
       
        width: '100%',
        paddingHorizontal: 24
      }}
      stickyHeaderHiddenOnScroll={true}
      
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps={'always'}
      overScrollMode="auto"
      onScroll={(e) => {
        AnimatedHeaderValue.setValue(e.nativeEvent.contentOffset.y)
      }}
      
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}
