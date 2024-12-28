import { router } from "expo-router"


export const resetAndNevigate = (newPath) => {
    if(router.canGoBack()) {
        router.dismissAll()
    }
    router.replace(newPath)
}