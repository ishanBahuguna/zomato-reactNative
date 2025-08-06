import { COLORS } from "@/utils/theme";

import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },

    headerWrapper: {
        backgroundColor: COLORS.primary,
        width: width,
        height: width - 90,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        overflow: "hidden",
    },

    logoWrapper: {
        flex: 1,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },

    logoImage: {
        position: "absolute",
        top: 135,
        width: 150,
        height: 40,
    },

    pizzaWrapper: {
        position: "absolute",
        bottom: -50,
        right: 15,
        width: 170,
        height: 170,
        borderRadius: 100,
    },

    pizzaImage: {
        width: 150,
        height: 150,
    },

    burgerWrapper: {
        position: "absolute",
        bottom: 0,
        width: 250,
        height: 150,
    },

    burgerImage: {
        width: 200,
        height: 150,
        left: 1,
        bottom: -10,
        transform: [{ rotate: "40deg" }],
    },

    samosaWrapper: {
        position: "absolute",
        width: 170,
        height: 170,
    },

    samosaImage: {
        width: 170,
        height: 170,
        transform: [{ rotate: "150deg" }],
        top: -40,
    },

    dosaWrapper: {
        position: "absolute",
        right: 0,
        width: 180,
        height: 180,
    },

    dosaImage: {
        width: 250,
        height: 180,
        top: -30,
    },

    textWrapper: {
        width: width,
        height: 120,
        justifyContent: "flex-end",
        paddingHorizontal: 15,
    },

    brandingText: {
        fontSize: 27,
        fontWeight: "800",
        textAlign: "center",
    },

    authTextWrapper: {
        marginTop: 25,
    },

    lineContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.lightgrey,
        marginHorizontal: 10,
    },

    authText: {
        fontSize: 18,
        color: COLORS.darkGrey,
        fontWeight: "600",
    },

    numberWrapper: {
        flexDirection: "row",
        height: 50,
        marginTop: 20,
        alignItems: "center",
        gap: 20,
        marginLeft: 32,
    },

    countryCodeWrapper: {
        width: 75,
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "white",

        // iOS shadow
        shadowColor: "black",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // Android shadow
        elevation: 8,

        // Optional: 3D effect using border colors
        // borderColor: "#ccc", // main border
        borderBottomColor: "#999", // dark for bottom
        borderRightColor: "#999", // dark for right
        borderTopColor: "#eee", // light for top
        borderLeftColor: "#eee", // light for left
    },

    countryCodeSelector: {
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
    },

    phoneNumberWrapper: {
        display:"flex",
        flexDirection:"row",
        width: 240,
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "white",

        alignItems:"center",
        gap:5,
        paddingHorizontal: 15,

        // iOS shadow
        shadowColor: "black",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // Android shadow
        elevation: 8,

        // Optional: 3D effect using border colors
        // borderColor: "#ccc", // main border
        borderBottomColor: "#999", // dark for bottom
        borderRightColor: "#999", // dark for right
        borderTopColor: "#eee", // light for top
        borderLeftColor: "#eee", // light for left
    },

    input: {
        // backgroundColor:"red",
        fontSize: 16,
        color: "",
        height: "100%",
    },

    btn: {
        // flex: 1,
        backgroundColor: COLORS.primary,
        marginHorizontal: 25,
        marginVertical: 25,
        height: 45,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    btnText: {
        fontSize: 19,
        color: "white",
    },

    authWrapper: {
        display: "flex",
        flexDirection: "row",
        marginTop: 25,
        height: 45,
        // backgroundColor:"red",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 40,
    },

    authBox: {
        display: "flex",
        height: "100%",
        width: 45,
        alignItems: "center",
        justifyContent: "center",

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
    },

    policyWrapper: {
        // backgroundColor:"red",
        marginTop:50,
        display:"flex",
        alignItems:"center"
    },

    policyTextWrapper: {
        display:"flex",
        flexDirection:"row",
        gap:9
    } ,

    policyText: {
        fontSize:10,
        fontWeight:"500",
        borderBottomWidth:1,
        color:COLORS.darkGrey,
        borderBottomColor:COLORS.lightgrey
    }
});
