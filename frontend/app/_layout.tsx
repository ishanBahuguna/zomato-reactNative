import { CountryModalProvider } from "@/context/CountryModalContext";
import { CountryCodeProvider } from "@/context/CoutryCodeContext";
import { COLORS } from "@/utils/theme";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
    return (
        <CountryModalProvider>
            <CountryCodeProvider>
                <Stack screenOptions={{ headerShown: false }} />
            </CountryCodeProvider>
        </CountryModalProvider>
    );
}
