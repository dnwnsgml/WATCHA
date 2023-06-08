import React, { createContext, useReducer, useRef, useContext } from "react";

const initItems = [
    // --------------new-----------------
    {
        id: 1,
        src: "https://an2-img.amz.wtchn.net/image/v2/ZkNGBqYZLj8giQn-ibmWAg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9ERXhNakl4TlRRMU1qVTRNalF3TkRVaWZRLkpkVGJmbkRubFAxS2ZoQkwxTXVhU0xSOU1sNi1rc1lNSzc5Uk9pNUo3SVU",
        genre: "애니메이션",
        scope: "평균 ★4.7",
        new: true
    },
    {
        id: 2,
        src: "https://an2-img.amz.wtchn.net/image/v2/SrMISD6QyVFnoDaHLcS7xg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk56ZzVORGt4TnpRMk5qQTBPRE13T0RJaWZRLk5fdDdmMEpQZEpOSW1MSEc4UE1IX2IzWWtuYWVfWHo2V3hmd0JnZkVKV28",
        genre: "예능",
        scope: "평균 ★3.9",
        new: true
    },
    {
        id: 3,
        src: "https://an2-img.amz.wtchn.net/image/v2/xGLCbKG0a6SDmzvKqj7inw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9ERXlNRGN3TXpJNU56VXhNVEV6TURZaWZRLnBvbEdSUnIwVXI3bG1EbzZpRjlwSnlQM2NxYkNBRkcwRm1ENXlRaHZxSE0",
        genre: "로맨스",
        scope: "평균 ★4.3",
        new: true
    },
    {
        id: 4,
        src: "https://an2-img.amz.wtchn.net/image/v2/h-Gnmq7qE1GNRrpI4RfeaA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9ESXpNVFF4TURJMk1ERXlPVEV6T1RjaWZRLnlueDBRUGNWTFBIVHhWRHZEQlFnbWVRQUNWck1TV3dKMEpLbE5zUW1adXM",
        genre: "드라마",
        scope: "평균 ★4.3",
        new: true
    },
    {
        id: 5,
        src: "https://an2-img.amz.wtchn.net/image/v2/JxF4KCxeydhUT1R16DuJ9Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9ESXpNVFkyT0RVd09UVXpNRFExTVRRaWZRLmZhSVZIOHJCUEtfUU9uTElNMVBBdGJwblVZUmZNbld0OGIyQlFKTUlMR0U",
        genre: "드라마",
        scope: "평균 ★4.2",
        new: true
    },
    {
        id: 6,
        src: "https://an2-img.amz.wtchn.net/image/v2/hvfUoFK1_Mehebr8hfrimg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9ERXhPVGMwT0RVeE9USXlOalEwTVRJaWZRLldvcURlcTZuc3kxMWpqRHhIMXk1SjB4ZVpjQ1VhWDR0QXFEc21acTBOMUU",
        genre: "드라마",
        scope: "평균 ★4.2",
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