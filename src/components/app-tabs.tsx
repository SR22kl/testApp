import { Bell, Compass, MapPin, Plus } from "lucide-react-native";
import { useState } from "react";
import { Image, Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DiscoverScreen from "@/screens/discover";
import ProfileScreen from "@/screens/profile";

export default function AppTabs() {
  const [activeTab, setActiveTab] = useState<"discover" | "profile">(
    "discover",
  );

  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white">
      {/* Screens */}
      <View className="flex-1">
        <View
          className="flex-1"
          style={{
            display: activeTab === "discover" ? "flex" : "none",
          }}
        >
          <DiscoverScreen />
        </View>

        <View
          className="flex-1"
          style={{
            display: activeTab === "profile" ? "flex" : "none",
          }}
        >
          <ProfileScreen onBack={() => setActiveTab("discover")} />
        </View>
      </View>

      {/* Bottom Navigation */}
      <View
        style={{ paddingBottom: insets.bottom }}
        className="border-t border-gray-200 bg-white"
      >
        <View className="h-[70px] flex-row items-center justify-between px-5">
          {/* Discover */}
          <Pressable
            onPress={() => setActiveTab("discover")}
            className="items-center justify-center"
          >
            <View
              className={`h-10 w-10 items-center justify-center rounded-full ${
                activeTab === "discover" ? "bg-slate-100" : ""
              }`}
            >
              <Compass
                size={25}
                color={activeTab === "discover" ? "#173D4D" : "#9CA3AF"}
              />
            </View>

            {activeTab === "discover" && (
              <View className="mt-1 h-[2px] w-7 rounded-full bg-[#173D4D]" />
            )}
          </Pressable>

          {/* Location */}
          <Pressable className="items-center justify-center">
            <MapPin size={25} color="#A5A5A5" />
          </Pressable>

          {/* Add */}
          <Pressable className="items-center justify-center">
            <View className="h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300">
              <Plus size={22} color="#A5A5A5" />
            </View>
          </Pressable>

          {/* Notifications */}
          <Pressable className="items-center justify-center">
            <Bell size={25} color="#A5A5A5" />
          </Pressable>

          {/* Profile */}
          <Pressable
            onPress={() => setActiveTab("profile")}
            className="items-center justify-center"
          >
            <View
              className={`h-10 w-10 items-center justify-center rounded-full ${
                activeTab === "profile" ? "border-2 border-[#173D4D]" : ""
              }`}
            >
              <View className="h-8 w-8 overflow-hidden rounded-full bg-gray-300">
                <Image
                  source={require("@/assets/profile.jpg")}
                  className="h-full w-full"
                />
              </View>
            </View>

            {activeTab === "profile" && (
              <View className="mt-1 h-[2px] w-7 rounded-full bg-[#173D4D]" />
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
}
