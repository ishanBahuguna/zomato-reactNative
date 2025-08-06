import React, { createContext, useState } from "react";
import { CountryType } from "@/utils/types";

interface CountryContextType {
    country: CountryType;
    setCountry: React.Dispatch<React.SetStateAction<CountryType>>;
}

export const CountryContext = createContext<CountryContextType>({
    country: {
        name: "",
        Iso: "",
        countryCode: "",
    },
    setCountry: () => {},
});

export const CountryCodeProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [country, setCountry] = useState<CountryType>({
        name: "India",
        Iso: "+91",
        countryCode: "IN",
    });

    return (
        <CountryContext.Provider value={{ country, setCountry }}>
            {children}
        </CountryContext.Provider>
    );
};
