import {
  Eye,
  Heart,
  MapPin,
  MessageCircle,
  MoreVertical,
  Play,
  Share2,
  Volume2,
} from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

import { discoverPosts } from "@/data/dummyData";

type StoryCardProps = {
  post: (typeof discoverPosts)[number];
};

export default function StoryCard({ post }: StoryCardProps) {
  return (
    <View className="bg-white">
      {/* User Header */}
      <View className="flex-row items-center px-4 py-3">
        <Image
          source={post.user.avatar}
          className="h-10 w-10 rounded-full"
          resizeMode="cover"
        />

        <View className="ml-3 flex-1">
          <Text className="text-[14px] font-semibold text-[#222222]">
            {post.user.name}
          </Text>

          <Text
            className={`mt-[2px] text-[12px] ${
              post.user.following ? "text-[#777777]" : "text-[#163D4C]"
            }`}
          >
            {post.user.following ? "Following" : "Follow"}
          </Text>
        </View>

        <Pressable className="h-9 w-9 items-center justify-center">
          <MoreVertical size={21} color="#555555" strokeWidth={1.8} />
        </Pressable>
      </View>

      {/* Post Image */}
      <View className="relative w-full">
        <Image
          source={post.image}
          className="h-[220px] w-full"
          resizeMode="cover"
        />

        <View className="absolute inset-0 items-center justify-center">
          <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-black/45">
            <Play size={21} color="#FFFFFF" fill="#FFFFFF" strokeWidth={0} />
          </Pressable>
        </View>

        <Pressable className="absolute bottom-3 right-3 h-8 w-8 items-center justify-center rounded-full bg-black/45">
          <Volume2 size={17} color="#FFFFFF" strokeWidth={1.8} />
        </Pressable>
      </View>

      {/* Metadata */}
      <View className="flex-row items-center px-4 pt-3">
        <Text className="text-[11px] text-[#777777]">{post.date}</Text>

        <View className="mx-2 h-[3px] w-[3px] rounded-full bg-[#999999]" />

        <MapPin size={12} color="#777777" strokeWidth={1.8} />

        <Text className="ml-1 text-[11px] text-[#777777]">{post.location}</Text>

        <View className="mx-2 h-[3px] w-[3px] rounded-full bg-[#999999]" />

        <Eye size={13} color="#777777" strokeWidth={1.8} />

        <Text className="ml-1 text-[11px] text-[#777777]">{post.views}</Text>
      </View>

      {/* Title */}
      <Text className="px-4 pt-2 text-[14px] leading-[21px] text-[#222222]">
        {post.title}
        <Text className="text-[#777777]"> more</Text>
      </Text>

      {/* Actions */}
      <View className="flex-row items-center px-4 py-4">
        <Pressable className="mr-6 flex-row items-center">
          <Heart size={21} color="#555555" strokeWidth={1.7} />
          <Text className="ml-1.5 text-[11px] text-[#777777]">
            {post.likes}
          </Text>
        </Pressable>

        <Pressable className="mr-6 flex-row items-center">
          <Share2 size={20} color="#555555" strokeWidth={1.7} />
          <Text className="ml-1.5 text-[11px] text-[#777777]">
            {post.shares}
          </Text>
        </Pressable>

        <Pressable className="flex-row items-center">
          <MessageCircle size={21} color="#555555" strokeWidth={1.7} />
          <Text className="ml-1.5 text-[11px] text-[#777777]">
            {post.comments}
          </Text>
        </Pressable>
      </View>

      <View className="h-[7px] bg-[#F3F3F3]" />
    </View>
  );
}
