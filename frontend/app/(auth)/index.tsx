import {
    View,
    Text,
    Image,
    Animated,
    useAnimatedValue,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Keyboard,
    TouchableWithoutFeedback,
    Easing,
} from "react-native";
import { useContext, useEffect, useRef, useState } from "react";
import { styles } from "@/styles/auth.styles";
import CountryPickerModal from "@/components/CountryPickerModal";
import { CountryContext } from "@/context/CoutryCodeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "@/utils/theme";
import { CountryModalContext } from "@/context/CountryModalContext";
import { useIsFocused } from "@react-navigation/native";


export default function index() {
    const pizzaAnim = useRef(new Animated.Value(0)).current;
    const burgerAnim = useRef(new Animated.Value(0)).current;
    const samosaAnim = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;
    const isFocused = useIsFocused();


    const { country } = useContext(CountryContext);
    const { showModal, setShowModal } = useContext(CountryModalContext);
    const inputRef = useRef<any>(null); // used to focus textInput when clicked anywhere on phoneNumberWrapper

    useEffect(() => {
        Animated.spring(pizzaAnim, {
            toValue: 1,
            tension: 1,
            useNativeDriver: true,
        }).start();

        Animated.decay(burgerAnim, {
            velocity: -0.1,
            useNativeDriver: true,
        }).start();

        Animated.timing(samosaAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(() => {
         if (!isFocused || showModal) return;
        const showSub = Keyboard.addListener("keyboardDidShow", () => {
            Animated.timing(translateY, {
                toValue: -100,
                duration: 200,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start();
        });

        const hideSub = Keyboard.addListener("keyboardDidHide", () => {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 100,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start();
        });

        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, [isFocused ,showModal]);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {/* HEADER */}
                <View style={styles.headerWrapper}>
                    {/* LOGO */}
                    <View style={styles.logoWrapper}>
                        <Image
                            style={styles.logoImage}
                            source={require("@/assets/images/zomato-logo.png")}
                        />
                    </View>

                    {/* PIZZA */}
                    <Animated.View
                        style={[
                            styles.pizzaWrapper,
                            { transform: [{ scale: pizzaAnim }] },
                        ]}
                    >
                        <Image
                            style={styles.pizzaImage}
                            source={require("@/utils/assets/images/pizza.png")}
                        />
                    </Animated.View>

                    {/* BURGER IMAGE*/}
                    <Animated.View
                        style={[
                            styles.burgerWrapper,
                            { transform: [{ translateX: burgerAnim }] },
                        ]}
                    >
                        <Image
                            style={styles.burgerImage}
                            source={require("@/utils/assets/images/burger.png")}
                        />
                    </Animated.View>

                    {/* SAMOSAIMAGE */}
                    <Animated.View
                        style={[
                            styles.samosaWrapper,
                            {
                                opacity: samosaAnim,
                                transform: [
                                    {
                                        translateX: samosaAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [100, 0],
                                        }),
                                    },
                                ],
                            },
                        ]}
                    >
                        <Image
                            style={styles.samosaImage}
                            source={require("@/utils/assets/images/samosa.png")}
                        />
                    </Animated.View>

                    {/* DOSA IMAGE */}
                    <View style={styles.dosaWrapper}>
                        <Image
                            style={styles.dosaImage}
                            source={require("@/utils/assets/images/dosa.png")}
                        />
                    </View>
                </View>

                <Animated.View
                    style={[
                        { flex: 1, backgroundColor: "white" },
                        {
                            transform: [{ translateY: translateY }],
                        },
                    ]}
                >
                    {/* BRANDING TEXT */}
                    <View style={styles.textWrapper}>
                        <Text style={styles.brandingText}>
                            India's #1 Food Delivery and Dining App
                        </Text>
                    </View>

                    <View style={styles.authTextWrapper}>
                        <View style={styles.lineContainer}>
                            <View style={styles.line} />
                            <Text style={styles.authText}>
                                Login or sign up
                            </Text>
                            <View style={styles.line} />
                        </View>
                    </View>

                    <View style={styles.numberWrapper}>
                        <View style={styles.countryCodeWrapper}>
                            <TouchableOpacity
                                onPress={() => {
                                    setShowModal(true);
                                }}
                                style={styles.countryCodeSelector}
                            >
                                <Text>{country.countryCode}</Text>
                                <Ionicons
                                    name="caret-down-sharp"
                                    size={24}
                                    color={COLORS.darkGrey}
                                />
                            </TouchableOpacity>
                            {showModal && <CountryPickerModal />}
                        </View>

                        <TouchableWithoutFeedback
                        onPress={() => inputRef.current?.focus()}
                        >
                            <View style={styles.phoneNumberWrapper}>
                                <Text>{country.Iso} </Text>
                                <TextInput
                                    ref={inputRef}
                                    placeholderTextColor={"black"}
                                    placeholder="Enter Mobile Number"
                                    keyboardType="phone-pad"
                                    style={styles.input}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Continue</Text>
                    </TouchableOpacity>

                    <View style={styles.lineContainer}>
                        <View style={styles.line} />
                        <Text style={styles.authText}>or</Text>
                        <View style={styles.line} />
                    </View>

                    <View style={styles.authWrapper}>
                        <TouchableOpacity style={styles.authBox}>
                            <Ionicons
                                name="logo-google"
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.authBox}>
                            <Ionicons
                                name="logo-apple"
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.authBox}>
                            <Ionicons
                                name="mail"
                                size={24}
                                color={COLORS.primary}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.policyWrapper}>
                        <Text
                            style={{
                                fontSize: 12,
                                marginBottom: 9,
                                fontWeight: "400",
                                color: COLORS.darkGrey,
                            }}
                        >
                            By continuing, you agree to our
                        </Text>
                        <View style={styles.policyTextWrapper}>
                            <Text style={styles.policyText}>
                                Terms of Service
                            </Text>
                            <Text style={styles.policyText}>
                                Privacy Policy
                            </Text>
                            <Text style={styles.policyText}>
                                Content Policies
                            </Text>
                        </View>
                    </View>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
}
