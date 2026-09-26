import { Camera, ChevronLeft } from "lucide-react-native";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen({ onBack }: { onBack: () => void }) {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">
      {/* Top Header */}
      <View className="h-[60px] flex-row items-center bg-[#163D4C] px-5">
        {/* Back Button */}
        <Pressable
          onPress={onBack}
          className="h-10 w-10 items-center justify-center"
        >
          <ChevronLeft size={29} color="#FFFFFF" strokeWidth={1.7} />
        </Pressable>

        <Text className="ml-auto text-[14px] font-medium tracking-wide text-white">
          Update Account
        </Text>

        <View className="w-1" />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* Cover Image */}
        <View className="relative h-[209px] w-full">
          <Image
            source={require("@/assets/profile-cover.jpg")}
            className="h-full w-full"
            resizeMode="cover"
          />

          {/* Camera Button */}
          <Pressable
            className="absolute right-5 -bottom-6 h-16 w-16 items-center justify-center rounded-full bg-white"
            style={{
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.15,
              shadowRadius: 5,
            }}
          >
            <Camera size={29} color="#163D4C" strokeWidth={1.8} />
          </Pressable>
        </View>

        {/* Form */}
        <View className="px-[19px] pt-[27px]">
          <View className="mb-[24px]">
            <Text className="mb-[9px] text-[13px] tracking-[1px] text-[#747474]">
              Name
            </Text>

            <TextInput
              value="Johan Liebert"
              className="h-[41px] rounded-[5px] bg-indigo-50 px-[19px] text-[14px] tracking-wide text-[#333333]"
              placeholder="Enter your name"
              placeholderTextColor="#777777"
            />
          </View>

          <View className="mb-[24px]">
            <Text className="mb-[9px] text-[13px] tracking-[1px] text-[#747474]">
              Gender
            </Text>

            <TextInput
              value="Male"
              className="h-[41px] rounded-[5px] bg-indigo-50 px-[19px] text-[14px] tracking-wide text-[#333333]"
              placeholder="Enter your gender"
              placeholderTextColor="#777777"
            />
          </View>

          <View className="mb-[24px]">
            <Text className="mb-[9px] text-[13px] tracking-[1px] text-[#747474]">
              Location
            </Text>

            <TextInput
              value="Greater noida"
              className="h-[41px] rounded-[5px] bg-indigo-50 px-[19px] text-[14px] tracking-wide text-[#333333]"
              placeholder="Enter your location"
              placeholderTextColor="#777777"
            />
          </View>

          <View className="mb-[24px]">
            <Text className="mb-[9px] text-[13px] tracking-[1px] text-[#747474]">
              Profession
            </Text>

            <TextInput
              value="Teacher"
              className="h-[41px] rounded-[5px] bg-indigo-50 px-[19px] text-[14px] tracking-wide text-[#333333]"
              placeholder="Enter your profession"
              placeholderTextColor="#777777"
            />
          </View>

          <View>
            <Text className="mb-[9px] text-[13px] tracking-[1px] text-[#747474]">
              Bio
            </Text>

            <View
              className="relative overflow-hidden rounded-[5px] bg-indigo-50"
              style={{
                minHeight: 117,
                elevation: 2,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.12,
                shadowRadius: 4,
              }}
            >
              <TextInput
                value={
                  '"Once you have everything set on your bio, you can use this tailn Instagram Schedule'
                }
                multiline
                textAlignVertical="top"
                className="h-[117px] px-[19px] py-[10px] text-[14px] leading-7 tracking-wide text-[#333333]"
                placeholder="Tell us about yourself"
                placeholderTextColor="#777777"
              />

              <Text className="absolute bottom-[5px] right-[10px] text-[11px] text-[#555555]">
                (120 words)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
