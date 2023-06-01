import React, { createContext, useReducer, useRef, useContext } from "react";

const initItems = [
    {
        id: 1,
        src: "https://an2-img.amz.wtchn.net/image/v2/ZkNGBqYZLj8giQn-ibmWAg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9ERXhNakl4TlRRMU1qVTRNalF3TkRVaWZRLkpkVGJmbkRubFAxS2ZoQkwxTXVhU0xSOU1sNi1rc1lNSzc5Uk9pNUo3SVU",
        genre: "애니메이션",
        scope: "평균 ★4.7",
        new: true
    }
]

function itemReducer(state, action) {
    switch (action.type) {
    }
}

const ItemStateContext = createContext();

export function Itemprovider({ children }) {
    const [state, dispatch] = useReducer(itemReducer, initItems);

    return (
        <ItemStateContext.Provider value={state}>
            {children}
        </ItemStateContext.Provider>
    );
}

export function useItemState() {
    const context = useContext(ItemStateContext);
    if (!context) {
        throw new Error("ItemStateContext를 찾을수 없음");
    }
    return context;
}