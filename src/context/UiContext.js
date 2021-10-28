import {createContext, useState} from 'react';

export const UiContext = createContext();

export const UiProvider = ({children}) => {
    /* Estado del menú */
    const [uiMenu, setUiMenu] = useState(false);

    /* Método para mostrar menú */
    const showMenu = () => {
        setUiMenu(false);
    }

    /* Método para ocultar menú */
    const hideMenu = () => {
        setUiMenu(true);
    }

    return (
        <UiContext.Provider value={{
            uiMenu,
            showMenu,
            hideMenu
        }}>
            {children}
        </UiContext.Provider>
    )
}