import { createContext, useState } from "react";

interface CountryModalType {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CountryModalContext = createContext<CountryModalType>({
    showModal: false,
    setShowModal: () => {},
});

export const CountryModalProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <CountryModalContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </CountryModalContext.Provider>
    );
};
