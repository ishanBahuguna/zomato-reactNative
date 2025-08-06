import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, { ReactNode, useContext } from "react";
import { CountryContext } from "@/context/CoutryCodeContext";
import { CountryType } from "@/utils/types";
import { CountryModalContext } from "@/context/CountryModalContext";
import { COLORS } from "@/utils/theme";

export default function CountryText({ name, Iso, countryCode }: CountryType) {
    const { setCountry } = useContext(CountryContext);
    const {setShowModal} = useContext(CountryModalContext);
    // console.log(country);

    return (
        <TouchableOpacity
            style={styles.textWrapper}
            onPress={() => {
                setCountry({ name, Iso, countryCode });
                setShowModal(false);
            }}
        >
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    textWrapper: {
        flex: 1,
        justifyContent: "center",

        height: 50,
        width: 380,
        margin: 2,
        borderBottomWidth:0.5,
        borderRadius: 15,
        borderBottomColor: COLORS.lightgrey

    },

    text: {
        fontSize: 20,
        fontWeight:"600",
        paddingHorizontal:20
    },
});
