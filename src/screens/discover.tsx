import { Menu, Search, SlidersHorizontal } from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StoryCard from "@/components/storyCard";
import { discoverPosts } from "@/data/dummyData";

export default function DiscoverScreen() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">
      {/* Header */}
      <View className="h-[79px] flex-row items-center bg-[#163D4C] px-4">
        {/* Menu */}
        <Pressable className="h-10 w-10 items-center justify-center">
          <Menu size={25} color="#FFFFFF" strokeWidth={1.8} />
        </Pressable>

        {/* Search */}
        <View className="ml-3 h-[39px] flex-1 flex-row items-center rounded-[4px] bg-white px-3">
          <Search size={18} color="#777777" strokeWidth={1.8} />

          <Text className="ml-2 text-[13px] text-[#999999]">Search</Text>
        </View>

        {/* Filter */}
        <Pressable className="ml-3 h-10 w-10 items-center justify-center">
          <SlidersHorizontal size={22} color="#FFFFFF" strokeWidth={1.8} />
        </Pressable>
      </View>

      {/* Discover Feed */}
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {discoverPosts.map((post) => (
          <StoryCard key={post.id} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
