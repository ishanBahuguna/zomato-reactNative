import {
    View,
    Modal,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TextInput as RNTextInput,
} from "react-native";
import { useContext, useRef, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { countryCodes } from "@/utils/conuntryCodes";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CountryText from "./CountryText";
import { CountryContext } from "@/context/CoutryCodeContext";
import { Ionicons } from "@expo/vector-icons";
import { CountryModalContext } from "@/context/CountryModalContext";
import { COLORS } from "@/utils/theme";
import { CountryType } from "@/utils/types";
// import Modal from  "react-native-modal"

export default function CountryPickerModal() {
    const { showModal, setShowModal } = useContext(CountryModalContext);
    const [keyword , setKeyword] = useState<string>("");
    const { country, setCountry } = useContext(CountryContext);
    const inputRef = useRef<RNTextInput>(null);

    const countryFiltered = countryCodes.filter((countryCode) => {
        return countryCode.name
            .toLowerCase()
            .startsWith(keyword.toLowerCase());
    });

    const countryCodesSorted = countryFiltered.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    const countrySetter = (name: string) => {
        setKeyword(name);
        let findCountry : CountryType | undefined = countryCodes.find((c) => c.name === name);

        if (findCountry) setCountry(findCountry);
        else return;
    };

    console.log(country);

    return (
        <Modal
            // isVisible={showModal}
            // animationInTiming={800}
            // animationOutTiming={800}
            // animationIn={"slideInUp"}
            // animationOut={"slideInDown"}
      
            animationType="slide"
            visible={showModal}
            onRequestClose={() => setShowModal(false)}
        >
            <View style={styles.inputWrapper}>
                <View style={{ marginBottom: 10 }}>
                    <TouchableOpacity onPress={() => setShowModal(false)}>
                        <Ionicons name="chevron-down" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => inputRef.current?.focus()}
                    style={styles.input}
                >
                    <Ionicons name="search" size={24} color={COLORS.primary} />
                    <TextInput
                        ref={inputRef}
                        style={{paddingRight:30 , height:"90%" , width:"90%"}}
                        autoComplete="country"
                        placeholder="Search your country..."
                        placeholderTextColor="black"
                        onChangeText={(e) => countrySetter(e)}
                        value={keyword}
                        clearButtonMode="always"

                    />
                </TouchableOpacity>
            </View>
            <FlashList
                data={country ? countryCodesSorted : countryCodes}
                keyExtractor={(item) => item.countryCode}
                renderItem={({ item }) => <CountryText {...item} />}
                estimatedItemSize={50}
                keyboardShouldPersistTaps="handled"
            />
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputWrapper: {
        marginTop: 50,
        marginBottom: 20,
        paddingHorizontal: 10,
    },

    input: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        width: 370,
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: "black",
        backgroundColor: "white",
        shadowOffset: {
            width: 1,
            height: 2,
        },

        shadowOpacity: 0.2,
        shadowRadius: 4,

        elevation: 8,

        // Optional: 3D effect using border colors
        // borderColor: "#ccc", // main border
        borderBottomColor: "#999", // dark for bottom
        borderRightColor: "#999", // dark for right
        borderTopColor: "#eee", // light for top
        borderLeftColor: "#eee", // light for left

        paddingHorizontal: 10,
        marginLeft: 5,
        gap: 5,
    },
});
