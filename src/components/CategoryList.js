import React, {useState} from 'react';
import {FlatList, TouchableOpacity, Text} from 'react-native';

export default function CategoryList() {
  const [category, setCategory] = useState(1);
  const categories = [
    {id: 1, categoryName: 'All'},
    {id: 2, categoryName: 'Men'},
    {id: 3, categoryName: 'Women'},
    {id: 4, categoryName: 'Kids'},
    {id: 5, categoryName: 'Old'},
    {id: 6, categoryName: 'Young'},
  ];
  const renderCategory = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => setCategory(item.id)}
      className={
        'rounded-[10px] h-10 px-6 flex items-center justify-center mr-4 overflow-auto ' +
        (item.id === category ? 'bg-black' : 'bg-button-opacity')
      }>
      <Text
        className={
          ' font-medium ' + (item.id === category ? 'text-white' : 'text-black')
        }>
        {item.categoryName}
      </Text>
    </TouchableOpacity>
  );
  return (
    <FlatList
      contentContainerStyle={{paddingLeft: 24}}
      data={categories}
      renderItem={renderCategory}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}
