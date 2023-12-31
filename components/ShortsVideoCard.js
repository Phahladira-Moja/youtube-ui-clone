import { View, Text, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { TouchableOpacity } from "react-native";

const ShortsVideoCard = ({ item }) => {
  return (
    <View className="relative h-64 w-40 mr-3 flex justify-between">
      <Image
        source={item.image}
        className="h-full w-full rounded-xl absolute"
      />

      <View className="flex-row justify-end pt-3 pr-1">
        <TouchableOpacity>
          <Icon.MoreVertical stroke="white" strokeWidth={1.4} height="20" />
        </TouchableOpacity>
      </View>

      <View className="p-2">
        <Text className="text-white shadow-lg font-bold text-sm">
          {item.title}
        </Text>
        <Text className="text-white shadow-md font-extrabold text-xs">
          {item.viewCount} views
        </Text>
      </View>
    </View>
  );
};

export default ShortsVideoCard;
