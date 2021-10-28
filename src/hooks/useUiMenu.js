import {useContext, useEffect} from 'react';

/* Importaciones propias */
import {UiContext} from '../context/UiContext';

export const useUiMenu = (hide) => {
    const {showMenu, hideMenu} = useContext(UiContext);

    useEffect(() => {
        if (hide) hideMenu();
        else showMenu();
    }, [hide, hideMenu, showMenu]);
}